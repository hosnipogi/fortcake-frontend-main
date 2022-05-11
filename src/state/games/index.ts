import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { AppState } from 'state'
import axios from 'axios'
import games from 'config/constants/games'
import { GamesState, Game } from '../types'

const airTableEndpoint = `https://api.fortcake.io/games`
const coinGeckoEndpoint = `https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?vs_currencies=bnb,usd&contract_addresses=`

const initialState: GamesState = {
  data: games,
  userDataLoaded: false,
  prices: [
    {
      address: '',
      price: {
        bnb: 0,
        usd: 0,
      },
    },
  ],
  isLoading: false,
}

export const fetchGames = createAsyncThunk('Games/fetchGames', async () => {
  const { data } = await axios.get<Game[]>(airTableEndpoint)
  return data
})

export const fetchGamePrices = createAsyncThunk<any, void, { state: AppState }>(
  'Games/fetchGamePrices',
  async (_, { getState }) => {
    const {
      games: { data: allGames },
    } = getState()

    const reducedAddresses = allGames.reduce((addresses, game, index) => {
      let addrs = addresses
      addrs += `${game.address}${index === allGames.length - 1 ? '' : ','}`
      return addrs
    }, '')

    const geckoWithAllAddresses = coinGeckoEndpoint + reducedAddresses
    const { data } = await axios.get<{
      [address: string]: { bnb: string; usd: string }
    }>(geckoWithAllAddresses)

    const mappedPrices = Object.keys(data).map((address) => ({
      address,
      price: data[address],
    }))

    return mappedPrices
  },
)

export const gamesSlice = createSlice({
  name: 'Games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        }
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        }
      })
      .addCase(fetchGamePrices.pending, (state) => {
        return {
          ...state,
        }
      })
      .addCase(fetchGamePrices.fulfilled, (state, action) => {
        return {
          ...state,
          prices: action.payload,
        }
      })
  },
})

export default gamesSlice.reducer
