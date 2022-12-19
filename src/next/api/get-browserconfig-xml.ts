import xml from 'xml'
import { getFullUrl } from '@/next/get-full-url'

type Params = {
  bgColor: string
  domainName: string
  logoPathSquare150x150?: string
  logoPathSquare310x310?: string
  logoPathSquare70x70?: string
  logoPathWide310x150?: string
}

export function getBrowserconfigXml(params: Params) {
  const {
    bgColor,
    domainName,
    logoPathSquare150x150,
    logoPathSquare310x310,
    logoPathSquare70x70,
    logoPathWide310x150,
  } = params

  return xml({
    browserconfig: [
      {
        msapplication: [
          {
            tile: [
              {
                ...logoPathSquare150x150 && {
                  square150x150logo: [
                    {
                      _attr: {
                        src: getFullUrl(
                          domainName,
                          null,
                          logoPathSquare150x150,
                        ),
                      },
                    }
                  ],
                },
                ...logoPathSquare310x310 && {
                  square310x310logo: [
                    {
                      _attr: {
                        src: getFullUrl(
                          domainName,
                          null,
                          logoPathSquare310x310,
                        ),
                      },
                    }
                  ],
                },
                ...logoPathSquare70x70 && {
                  square70x70logo: [
                    {
                      _attr: {
                        src: getFullUrl(
                          domainName,
                          null,
                          logoPathSquare70x70,
                        ),
                      },
                    }
                  ],
                },
                ...logoPathWide310x150 && {
                  wide310x150logo: [
                    {
                      _attr: {
                        src: getFullUrl(
                          domainName,
                          null,
                          logoPathWide310x150,
                        ),
                      },
                    }
                  ],
                },
              },
              {
                TileColor: [
                  bgColor
                ],
              },
            ],
          },
        ],
      },
    ],
  }, { declaration: true })
}
