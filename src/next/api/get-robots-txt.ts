import { getFullUrl } from '@/next/get-full-url'
import { getUrl } from '@/next/get-url'

type UserAgentSettings = {
  allowedPagePaths?: string[]
  allowedNonPagePaths?: string[]
  disallowedPagePaths?: string[]
  disallowedNonPagePaths?: string[]
  userAgent: string
}

type Params = {
  browserconfigXmlPath?: string
  defaultLocale: string
  domainName: string
  locales: string[]
  ogImageBasePath?: string
  sitemapIndexXmlPath?: string
  sitemapXmlPath?: string
  siteWebmanifestPath?: string
  userAgentCommonSettings?: Omit<UserAgentSettings, 'userAgent'>
  userAgentSettings?: UserAgentSettings[]
}

export function getRobotsTxt(params: Params) {
  const {
    browserconfigXmlPath,
    defaultLocale,
    domainName,
    locales,
    ogImageBasePath,
    sitemapIndexXmlPath,
    sitemapXmlPath,
    siteWebmanifestPath,
    userAgentCommonSettings,
    userAgentSettings,
  } = params

  const data = {
    userAgentSettings: [
      {
        userAgent: '*',
        disallowedNonPagePaths: [
          '/api/',
          '/_next/',
          '/images/',
          '/icons/',
          ...(browserconfigXmlPath ? [browserconfigXmlPath] : []),
          ...(siteWebmanifestPath ? [siteWebmanifestPath] : []),
          ...(ogImageBasePath ? [ogImageBasePath + '*'] : []),
          ...(userAgentCommonSettings?.disallowedNonPagePaths || []),
        ],
        disallowedPagePaths: userAgentCommonSettings?.disallowedPagePaths || [],
        allowedNonPagePaths: userAgentCommonSettings?.allowedNonPagePaths || [],
        allowedPagePaths: [
          ...(
            userAgentCommonSettings?.allowedPagePaths
              ? (
                locales.map((locale) => (
                  userAgentCommonSettings.allowedPagePaths.map((pagePath) => (
                    getUrl(defaultLocale, pagePath, locale)
                  ))
                ))
              )
              : []
          ),
        ].flat(),
      },
      ...(userAgentSettings || []),
    ],
    sitemap: getFullUrl(
      domainName,
      defaultLocale,
      sitemapIndexXmlPath || sitemapXmlPath,
    )
  }

  let content = ''

  data.userAgentSettings.forEach((userAgentSetting) => {
    content += `User-agent: ${userAgentSetting.userAgent}\n`

    const allowedPaths = [
      ...(userAgentSetting.allowedNonPagePaths || []),
      ...(userAgentSetting.allowedPagePaths || []),
    ]

    const disallowedPaths = [
      ...(userAgentSetting.disallowedNonPagePaths || []),
      ...(userAgentSetting.disallowedPagePaths || []),
    ]

    allowedPaths.forEach((path) => {
      content += `Allow: ${path}\n`
    })

    disallowedPaths.forEach((path) => {
      content += `Disallow: ${path}\n`
    })

    content += '\n'
  })

  content += `Sitemap: ${data.sitemap}\n`

  return content
}
