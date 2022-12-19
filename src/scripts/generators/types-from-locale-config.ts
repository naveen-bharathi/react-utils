import type { Config as PrettierConfig } from 'prettier'

import fs from 'fs'
import prettier from 'prettier'

type LocaleConfig = {
  defaultLocale: string
  locales: Array<{
    localeCode: string
    name: string
    rtl?: boolean
  }>
}

function writeFileSync(
  filepath: string,
  content: string,
  prettierConfig: PrettierConfig,
) {
  fs.writeFileSync(
    filepath,
    prettier.format(content, {
      ...prettierConfig,
      filepath,
    }),
  )
}

export function generateTypesFromLocaleConfig(
  typeDefFilePath: string,
  localeConfig: LocaleConfig,
  prettierConfig: PrettierConfig,
) {
  const { defaultLocale, locales } = localeConfig
  const rtlLocales = (
    locales.filter(({ rtl }) => rtl).map(({ localeCode }) => localeCode)
  )
  const allLocales = locales.map(({ localeCode }) => localeCode)
  const localeObject = Object.fromEntries(allLocales.map((locale) => [
    locale,
    locale,
  ]))
  const RTL_LOCALES = (
    rtlLocales
      .map((locale) => `LOCALES['${locale}']`)
      .join(', ')
  )
  const typeDefFileContent = `
    export type TLocale = ${Object.values(localeObject).map((locale) => `'${locale}'`).join(' | ')}

    export const LOCALES: { [key: string]: TLocale } = ${JSON.stringify(localeObject, null, 2)}

    export const RTL_LOCALES: Array<TLocale> = [${RTL_LOCALES}]

    export const LOCALE_DEFAULT = LOCALES['${defaultLocale}']\n
  `

  writeFileSync(typeDefFilePath, typeDefFileContent, prettierConfig)
}
