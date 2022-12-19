import { getDirectionForLocale } from '@/next/get-direction-for-locale'
import { getUrl } from '@/next/get-url'

type Config = {
  bgColor: string
  defaultLocale: string
  description: string
  locale: string
  rtlLocales: string[]
  shortName: string
  siteName: string
}

export function getSiteWebmanifest(config: Config) {
  const data = {
    name: config.siteName,
    short_name: config.shortName,
    description: config.description,
    icons: [
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    background_color: config.bgColor,
    theme_color: config.bgColor,
    dir: getDirectionForLocale(config.rtlLocales, config.locale),
    lang: config.locale,
    orientation: 'portrait-primary',
    start_url: getUrl(config.defaultLocale, '/', config.locale),
  }

  return data
}
