import { MenuItemsType } from 'fortcake-uikit-v2'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

export const baseUrl = process.env.REACT_APP_BASE_URL

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    icon: 'Home',
    href: `/`,
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Swap'),
    icon: 'Swap',
    href: `${baseUrl}bsc`,
    showItemsOnMobile: false,
    items: [],
  },
  {
    label: t('Play'),
    href: `/play`,
    icon: 'Nft',
    items: [],
  },
  {
    label: t('FAQ'),
    href: 'https://fortcake.gitbook.io/fortcake/10.-faq',
    icon: 'Resources',
    items: [],
  },
  {
    label: t('Community'),
    href: 'https://www.reddit.com/r/fortcake/',
    icon: 'Groups',
    items: [],
  },
  {
    label: t('Blog'),
    href: 'https://fortcake.medium.com/',
    icon: 'Proposal',
    items: [],
  },
  // {
  //   label: t('Developers'),
  //   href: 'https://github.com/fortcake',
  //   icon: 'Trophy',
  //   items: [],
  // },
  // {
  //   label: t('Governance'),
  //   href: 'https://snapshot.org/#/fortcake.eth/about',
  //   icon: 'Nft',
  //   items: [],
  // },
]

export default config

export const Socials = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/fortcake',
  },
  {
    label: 'Discord',
    href: 'https://discord.com/invite/FAqUbJXzN9',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fortcake_official/',
  },
  {
    label: 'Medium',
    href: 'https://fortcake.medium.com/',
  },
  {
    label: 'BscScan',
    href: 'https://bscscan.com/token/0xe2396e7c39b1ca1990b0e3bd5d44ebc19225ad58',
  },
  {
    label: 'PancakeSwap',
    href: 'https://pancakeswap.finance/',
  },
  {
    label: 'CoinGecko',
    href: 'https://www.coingecko.com/',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/joinchat/iPHYn9_M_cxiMTMx',
  },
]
