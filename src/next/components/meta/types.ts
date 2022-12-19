export type TProps = {
  bgColor: string
  bgColorContrastText: string
  defaultLocale: string
  description?: string
  domainName: string
  includeSearchParamsInOgUrl?: boolean
  locale: string
  safariPinnedTabLogoPath?: string
  robots?: {
    noArchive?: boolean
    noImageIndex?: boolean
  }
  ogImage: {
    height: number
    path: string
    type: string
    width: number
  }
  siteName: string
  title?: string
  twitterUsername?: string
}
