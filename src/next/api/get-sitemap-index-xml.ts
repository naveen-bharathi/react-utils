import xml from 'xml'
import dayJs from 'dayjs'
import { getFullUrl } from '@/next/get-full-url'

type Params = {
  defaultLocale: string
  domainName: string
  locales: string[]
  pages: Array<{
    lastmod: string
  }>
}

export function getSitemapIndexXml(params: Params) {
  return xml({
    sitemapindex: [
      {
        _attr: {
          xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        },
      },
      ...params.locales.map((locale) => {
        const lastmod = (
          params.pages.sort((a, b) => (
            dayJs(b.lastmod).valueOf() - dayJs(a.lastmod).valueOf()
          ))[0].lastmod
        )

        return {
          sitemap: [
            {
              loc: getFullUrl(
                params.domainName,
                params.defaultLocale,
                '/sitemap.xml',
                locale,
              ),
            },
            {
              lastmod: dayJs(lastmod).format('YYYY-MM-DD'),
            },
          ],
        }
      }),
    ],
  }, { declaration: true })
}
