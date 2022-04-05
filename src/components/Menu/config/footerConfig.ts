import { FooterLinkType } from 'fortcake-uikit-v2'
import { ContextApi } from 'contexts/Localization/types'
// import { baseUrl } from './config'
import { Links } from 'fortcake-config-files/dist'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Ecosystem'),
    items: [
      {
        label: t('Play'),
        href: Links.games,
      },
      {
        label: t('Swap'),
        href: Links.bnb,
      },
      {
        label: t('Governance'),
        href: 'https://snapshot.org/#/fortcake.eth/about',
      },
      {
        label: t('Documentation'),
        href: 'https://fortcake.gitbook.io/fortcake/3.-core-features',
      },
    ],
  },
  {
    label: t('Token'),
    items: [
      {
        label: t('Whitepaper'),
        href: 'https://fortcake.gitbook.io/fortcake/',
      },
      {
        label: t('Blog'),
        href: 'https://fortcake.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://www.reddit.com/r/fortcake/',
      },
      {
        label: t('BSC Scan'),
        href: 'https://bscscan.com/token/0x2f477a472f4657f7917126a663b5affe94d5a2b6',
      },
    ],
  },
  {
    label: t('Social'),
    items: [
      {
        label: 'Twitter',
        href: 'https://twitter.com/fortcake',
      },
      {
        label: t('Telegram'),
        href: 'https://t.me/joinchat/iPHYn9_M_cxiMTMx',
      },
      {
        label: t('Instagram'),
        href: 'https://www.instagram.com/fortcake_official/',
      },
      {
        label: t('Discord'),
        href: 'https://discord.com/invite/FAqUbJXzN9',
      },
    ],
  },
]
