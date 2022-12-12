const fs = require('fs')
const prettier = require('prettier')

function writeFileSync(filepath, content, prettierConfig) {
  fs.writeFileSync(
    filepath,
    prettier.format(content, {
      ...prettierConfig,
      filepath,
    }),
  )
}

function generateTypesFromLocaleConfig(...params) {
  const [typeDefFilePath, localeConfig, prettierConfig] = params
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
    export const LOCALES = ${JSON.stringify(localeObject, null, 2)}

    export const RTL_LOCALES: Array<
    (typeof LOCALES)[keyof typeof LOCALES]
    > = [${RTL_LOCALES}]

    export const LOCALE_DEFAULT = LOCALES['${defaultLocale}']\n
  `

  writeFileSync(typeDefFilePath, typeDefFileContent, prettierConfig)
}

module.exports = {
  generateTypesFromLocaleConfig
}
