interface GamesConfig {
  title: string
  subtitle: string
  logo: string
  cta: string
  symbol: string
  votes: number
  chain: string
  address: string
}

const games: GamesConfig[] = [
  // {
  //   title: 'Axie Infinity',
  //   subtitle: 'Axie Infinity is a NFT-based online 2D game, powered by ETH and SLP crypto-currency.',
  //   logo: 'https://dl.airtable.com/.attachments/38562aa52f995c65fa30f885db477e4b/b2e517af/axie.png',
  //   cta: 'http://axieinfinity.com',
  //   symbol: 'AXS',
  //   votes: 108,
  //   chain: 'ETH',
  //   address: '0xbb0e17ef65f82ab018d8edd776e8dd940327b28b',
  // },
  // {
  //   title: 'Axie Infinity',
  //   subtitle: 'Axie Infinity is a NFT-based online 2D game, powered by ETH and SLP crypto-currency.',
  //   logo: 'https://dl.airtable.com/.attachments/38562aa52f995c65fa30f885db477e4b/b2e517af/axie.png',
  //   cta: 'http://axieinfinity.com',
  //   symbol: 'AXS',
  //   votes: 108,
  //   chain: 'BSC',
  //   address: '0x715d400f88c167884bbcc41c5fea407ed4d2f8a0',
  // },
  // {
  //   title: 'Decentraland',
  //   subtitle:
  //     'Decentraland is a decentralised 3D virtual reality platform that consists of 90,601 parcels land. Virtual estate in decentraland are NFTs which can be bought by the cryptocurrency MANA, which is based on the Ethereum blockchain.',
  //   logo: 'https://dl.airtable.com/.attachments/e54c562581040e86a91da52b090a9943/950215d0/decentraland.png',
  //   cta: 'https://decentraland.org/',
  //   symbol: 'MANA',
  //   votes: 103,
  //   chain: 'ETH',
  //   address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
  // },
  // {
  //   title: 'The Sandbox',
  //   subtitle:
  //     'The Sandbox is a virtual Metaverse where players can play, build, own, and monetize their virtual experiences.',
  //   logo: 'https://dl.airtable.com/.attachments/d689da7e97e9e97b7829bafd89c4eaac/fdce3b5d/thesandbox.png',
  //   cta: 'https://www.sandbox.game/en/',
  //   symbol: 'SAND',
  //   votes: 91,
  //   chain: 'ETH',
  //   address: '0x3845badAde8e6dFF049820680d1F14bD3903a5d0',
  // },
  // {
  //   title: 'Illuvium',
  //   subtitle:
  //     'Welcome to Illuvium An open-world RPG adventure game built on the Ethereum Blockchain. Journey across a vast and varied landscape on your quest to hunt and capture deity-like creatures called Illuvials.',
  //   logo: 'https://dl.airtable.com/.attachments/94c1f3799c4f9df5247722441e45b6a4/fa625c04/Illuvium.png',
  //   cta: 'https://www.illuvium.io/',
  //   symbol: 'ILV',
  //   votes: 85,
  //   chain: 'ETH',
  //   address: '0x767fe9edc9e0df98e07454847909b5e959d7ca0e',
  // },
  // {
  //   title: 'My Neighbor Alice',
  //   subtitle:
  //     'My Neighbor Alice is a multiplayer builder game, introducing blockchain to millions of players. Anyone can buy and own virtual islands, collect and build exciting items and meet new friends.',
  //   logo: 'https://dl.airtable.com/.attachments/581a456671b861dcd24832dae1dd62aa/d853bddd/mna.png',
  //   cta: 'https://www.myneighboralice.com/',
  //   symbol: 'ALICE',
  //   votes: 74,
  //   chain: 'ETH',
  //   address: '0xAC51066d7bEC65Dc4589368da368b212745d63E8',
  // },
  // {
  //   title: 'My Neighbor Alice',
  //   subtitle:
  //     'My Neighbor Alice is a multiplayer builder game, introducing blockchain to millions of players. Anyone can buy and own virtual islands, collect and build exciting items and meet new friends.',
  //   logo: 'https://dl.airtable.com/.attachments/581a456671b861dcd24832dae1dd62aa/d853bddd/mna.png',
  //   cta: 'https://www.myneighboralice.com/',
  //   symbol: 'ALICE',
  //   votes: 74,
  //   chain: 'BSC',
  //   address: '0xac51066d7bec65dc4589368da368b212745d63e8',
  // },
  // {
  //   title: 'Mines of Dalarnia',
  //   subtitle:
  //     "Mines of Dalarnia is an action-adventure game. Players mine and combine various in-game items, improving their skills and gear to unlock the MoD universe's secrets while fighting enemies and searching for rare relics and artifacts.",
  //   logo: 'https://dl.airtable.com/.attachments/db0db2437c504564ed92ab1b901e44e4/f510f870/MinesofDalarnia.png',
  //   cta: 'https://www.minesofdalarnia.com/',
  //   symbol: 'DAR',
  //   votes: 68,
  //   chain: 'ETH',
  //   address: '0x081131434f93063751813c619ecca9c4dc7862a3',
  // },
  // {
  //   title: 'Mines of Dalarnia',
  //   subtitle:
  //     "Mines of Dalarnia is an action-adventure game. Players mine and combine various in-game items, improving their skills and gear to unlock the MoD universe's secrets while fighting enemies and searching for rare relics and artifacts.",
  //   logo: 'https://dl.airtable.com/.attachments/db0db2437c504564ed92ab1b901e44e4/f510f870/MinesofDalarnia.png',
  //   cta: 'https://www.minesofdalarnia.com/',
  //   symbol: 'DAR',
  //   votes: 68,
  //   chain: 'BSC',
  //   address: '0x23ce9e926048273ef83be0a3a8ba9cb6d45cd978',
  // },
  // {
  //   title: 'Alien Worlds',
  //   subtitle:
  //     'Find NFTs you can use to connect and play with others. Earn Trilium that gives you power in the Planet Decentralised Autonomous Organizations (Planet DAOs) – where much of the action happens.',
  //   logo: 'https://dl.airtable.com/.attachments/b4965aeb430113b8660cd73eef80c46e/b0812451/alienworlds.png',
  //   cta: 'https://alienworlds.io/',
  //   symbol: 'TLM',
  //   votes: 8,
  //   chain: 'ETH',
  //   address: '0x888888848B652B3E3a0f34c96E00EEC0F3a23F72',
  // },
  // {
  //   title: 'Alien Worlds',
  //   subtitle:
  //     'Find NFTs you can use to connect and play with others. Earn Trilium that gives you power in the Planet Decentralised Autonomous Organizations (Planet DAOs) – where much of the action happens.',
  //   logo: 'https://dl.airtable.com/.attachments/b4965aeb430113b8660cd73eef80c46e/b0812451/alienworlds.png',
  //   cta: 'https://alienworlds.io/',
  //   symbol: 'TLM',
  //   votes: 8,
  //   chain: 'BSC',
  //   address: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
  // },
  // {
  //   title: 'FORTCAKE',
  //   subtitle: 'FORTCAKE is a community driven crypto gaming platform built on the Binance Smart Chain.',
  //   logo: 'https://dl.airtable.com/.attachments/ac3a1c11a75e14d53ef85542b74f4ad5/21e82cb9/newforttoken.png',
  //   cta: 'https://fortcake.io/',
  //   symbol: 'FORTCAKE',
  //   votes: 7,
  //   chain: 'BSC',
  //   address: '0x2f477a472f4657f7917126a663b5affe94d5a2b6',
  // },
  // {
  //   title: 'Monsta Infinite',
  //   subtitle:
  //     'Monsta Infinite is a decentralized game universe where anyone can earn tokens through playing the game competitively or for leisure.‌',
  //   logo: 'https://dl.airtable.com/.attachments/3e78f969ff2839f590c6c99ecb0299bb/6b157866/monstainfinite.png',
  //   cta: 'https://monstainfinite.com/',
  //   symbol: 'MONI',
  //   votes: 2,
  //   chain: 'BSC',
  //   address: '0x9573c88aE3e37508f87649f87c4dd5373C9F31e0',
  // },
  // {
  //   title: 'Polychain Monsters',
  //   subtitle:
  //     'Polychain Monsters aims to create a cross-chain digital collectible and gaming ecosystem with mainstream appeal. At its core, Polymon are beautifully animated NFTs, which can be unpacked from digital booster packs with $PMON on Ethereum, Binance Smart Chain, and Polygon.',
  //   logo: 'https://dl.airtable.com/.attachments/c67b11e674884c4d0d9510552bca7704/55dfae2f/polychainmonsters.png',
  //   cta: 'https://polychainmonsters.com/',
  //   symbol: 'PMON',
  //   votes: 1,
  //   chain: 'ETH',
  //   address: '0x1796ae0b0fa4862485106a0de9b654eFE301D0b2',
  // },
  // {
  //   title: 'Kryptomon',
  //   subtitle:
  //     'Kryptomon is an upcoming NFT Digital Pet game based on Binance Smart Chain that blends the cute and addicting gameplay of Tamagotchi and the intense strategy of Pokémon battles.',
  //   logo: 'https://dl.airtable.com/.attachments/f80bf07b99e3e46c59712986771bed4e/34c10d8f/Kryptomon.png',
  //   cta: 'https://kryptomon.co/',
  //   symbol: 'KMON',
  //   votes: 1,
  //   chain: 'BSC',
  //   address: '0xc732b6586a93b6b7cf5fed3470808bc74998224d',
  // },
  // {
  //   title: 'Binamon',
  //   subtitle:
  //     'Enter the new Play to Earn game, and battle the most epic monsters! Rise to the top with your Binamon, and earn a spot in the World Rankings! GET BINAMONS.',
  //   logo: 'https://dl.airtable.com/.attachments/d9c6b725034279c330201bcc93cde118/3eb99ea7/binamon.png',
  //   cta: 'https://binamon.org/',
  //   symbol: 'BMON',
  //   votes: 1,
  //   chain: 'BSC',
  //   address: '0x08ba0619b1e7a582e0bce5bbe9843322c954c340',
  // },
  // {
  //   title: 'Polychain Monsters',
  //   subtitle:
  //     'Polychain Monsters aims to create a cross-chain digital collectible and gaming ecosystem with mainstream appeal. At its core, Polymon are beautifully animated NFTs, which can be unpacked from digital booster packs with $PMON on Ethereum, Binance Smart Chain, and Polygon.',
  //   logo: 'https://dl.airtable.com/.attachments/c67b11e674884c4d0d9510552bca7704/55dfae2f/polychainmonsters.png',
  //   cta: 'https://polychainmonsters.com/',
  //   symbol: 'PMON',
  //   votes: 1,
  //   chain: 'BSC',
  //   address: '0x1796ae0b0fa4862485106a0de9b654eFE301D0b2',
  // },
  // {
  //   title: 'Aavegotchi',
  //   subtitle:
  //     'Aavegotchi is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake Non-fungible tokens (NFTs) avatars with interest-generating tokens and interact with the Aavegotchi metaverse. It is a unique combination of Decentralized Finance (DeFi) and NFTs.',
  //   logo: 'https://dl.airtable.com/.attachments/9f71542386d570f551b99d2d92b053a4/87e9328e/aavegotchi.png',
  //   cta: 'https://aavegotchi.com/',
  //   symbol: 'GHST',
  //   votes: 0,
  //   chain: 'ETH',
  //   address: '0x3F382DbD960E3a9bbCeaE22651E88158d2791550',
  // },
  // {
  //   title: 'Crypto Blades',
  //   subtitle:
  //     'CryptoBlades is a play-to-earn NFT RPG developed by Riveted Games on the Binance Smart Chain platform. The game revolves around the acquisition of legendary Blades and the powerful Heroes who wield them. Players may participate in combat using their assets to earn SKILL tokens. ssets are player-owned NFTs minted to the ERC-721 standard, and may be traded on the proprietary marketplace. CryptoBlades utilizes a play-to-earn model by distributing SKILL through gameplay, and giving value to player NFTs by increasing their use through future features. As part of being one of the original settlers of CryptoBlades Kingdoms, you may lay claim to a realm for your DAO and put your name on the map.',
  //   logo: 'https://dl.airtable.com/.attachments/fde2dc80ee363a194f8360f6223ce551/5d2e6071/cryptoblades.png',
  //   cta: 'https://www.cryptoblades.io/',
  //   symbol: 'SKILL',
  //   votes: 0,
  //   chain: 'BSC',
  //   address: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
  // },
  // {
  //   title: 'Gods Unchained',
  //   subtitle:
  //     'The ultimate digital trading card game that gives players true ownership of their collection. Play for free, play for keeps, or trade on open marketplaces.',
  //   logo: 'https://dl.airtable.com/.attachments/186da9be45b76c7c19ba5b4a5943996b/e2b38c2e/godsunchained.png',
  //   cta: 'https://godsunchained.com/',
  //   symbol: 'GODS',
  //   votes: 0,
  //   chain: 'ETH',
  //   address: '0xccc8cb5229b0ac8069c51fd58367fd1e622afd97',
  // },
  // {
  //   title: 'Faraland',
  //   subtitle:
  //     'Faraland is a multiplayer RPG NFT GAME that lets the user engage in the combat arena and profit from battles.',
  //   logo: 'https://dl.airtable.com/.attachments/038eb8f1637ae2fe757c3dadc9e1b865/91024230/faraland.png',
  //   cta: 'https://faraland.io/',
  //   symbol: 'FARA',
  //   votes: 0,
  //   chain: 'BSC',
  //   address: '0xF4Ed363144981D3A65f42e7D0DC54FF9EEf559A1',
  // },
  // {
  //   title: 'Smooth Love Potion',
  //   subtitle: 'Smooth Love Potion - is an ERC-20 token on the',
  //   logo: 'https://dl.airtable.com/.attachments/5c4e89fedbed9bc6f73e77a3fcedb165/5d4978f5/smooth-love-potion-slp-logo.png',
  //   cta: 'https://axieinfinity.com/',
  //   symbol: 'SLP',
  //   votes: 0,
  //   chain: 'ETH',
  //   address: '0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25',
  // },
]

export default games
