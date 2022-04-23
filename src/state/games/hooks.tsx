import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { State, Game } from '../types'
import { GameProps } from '../../views/Games/components/types'

const airTableEndpoint = `https://api.fortcake.io/games`
const coinGeckoEndpoint = `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?vs_currencies=bnb,usd&contract_addresses=`

// function getCoinGeckoEndpoint(vsCurrency: string, addresses: string) {
//   return `${coinGeckoEndpoint}vs_currencies=${vsCurrency}&contract_addresses=${addresses}`
// }

const deserializeGame = (game: Game): GameProps => {
  const { title, subtitle, logo, cta, symbol, votes } = game
  const chain = {
    chain: game.chain,
    address: game.address,
  }

  return {
    title,
    subtitle,
    logo,
    cta,
    symbol,
    votes,
    chain: [{ ...chain }],
  }
}

const createGameList = (gameList: Game[], allPrices: { address: string; price: { bnb: number; usd: number } }[]) => {
  const deserializedGames = gameList.reduce<GameProps[]>((arr, game) => {
    const symbolOnDiffChain = arr.findIndex(({ symbol }) => symbol === game.symbol)
    if (symbolOnDiffChain >= 0) {
      arr[symbolOnDiffChain].chain.push({ chain: game.chain, address: game.address })
      return arr
    }
    const deserializedGame = deserializeGame(game)

    const found = allPrices.find(({ address }) => {
      return address.toUpperCase() === game.address.toUpperCase()
    })

    if (found !== undefined) {
      deserializedGame.price = found.price
    }

    arr.push(deserializedGame)

    return arr
  }, [])

  return deserializedGames.sort((a, b) => b.votes - a.votes)
}

export const useGames = () => {
  const games = useSelector((state: State) => state.games)
  const [allGames, setAllGames] = useState<GameProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    const fetchGamesData = async () => {
      try {
        // fetch games from air tables db
        const { data: airTableGames } = await axios.get<Game[]>(airTableEndpoint, {
          signal: controller.signal,
        })

        // reduce all address to 1 string

        const reducedAddresses = airTableGames.reduce((addresses, game, index) => {
          let addrs = addresses
          addrs += `${game.address}${index === airTableGames.length - 1 ? '' : ','}`
          return addrs
        }, '')

        // query prices for all addresses from coingecko

        const { data: prices } = await axios.get<{ [address: string]: { bnb: number; usd: number } }>(
          coinGeckoEndpoint + reducedAddresses,
          {
            signal: controller.signal,
          },
        )

        // map prices to address

        const mappedPrices = Object.keys(prices).map((address) => ({
          address,
          price: prices[address],
        }))

        // create final games object

        const gamesObject = airTableGames ? createGameList(airTableGames, mappedPrices) : createGameList(games.data, [])

        setAllGames(gamesObject)
        setIsLoading(false)
      } catch (e) {
        console.info(e)
      }
    }
    fetchGamesData()

    return () => {
      setIsLoading(true)
      controller.abort()
    }
  }, [games.data])

  const { loadArchivedFarmsData, userDataLoaded } = games
  return {
    isLoading,
    loadArchivedFarmsData,
    userDataLoaded,
    data: allGames,
  }
}
