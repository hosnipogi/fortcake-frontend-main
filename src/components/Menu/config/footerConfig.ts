import { FooterLinkType } from 'fortcake-uikit-v2'
import { ContextApi } from 'contexts/Localization/types'
import { FooterLinks } from 'fortcake-config-files/dist'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) =>
  FooterLinks.map(({ label, items }) => ({
    label: t(label),
    items: items.map((subItem) => ({ label: t(subItem.label), href: subItem.href })),
  }))
