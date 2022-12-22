import xml from 'xml'
import dayJs from 'dayjs'
import { getFullUrl } from '@/next/get-full-url'

type Params = {
  defaultLocale: string
  domainName: string
  locale: string
  pages: Array<{
    lastmod: string
    path: string
  }>
}

export function getSitemapXml(params: Params) {
  return xml({
    urlset: [
      {
        _attr: {
          xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
        },
      },
      ...params.pages.map((page) => ({
        url: [
          {
            loc: getFullUrl(
              params.domainName,
              params.defaultLocale,
              page.path,
              params.locale,
            ),
          },
          {
            lastmod: dayJs(page.lastmod).format('YYYY-MM-DD'),
          },
        ],
      })),
    ],
  }, { declaration: true })
}
