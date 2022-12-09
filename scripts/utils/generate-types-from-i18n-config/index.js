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

function getLocaleCode(locale) {
  return locale.replace(/-/g, '_').toUpperCase()
}

function generateTypesFromI18nConfig(...params) {
  const [typeDefFilePath, localeConfig, prettierConfig] = params
  const { defaultLocale, locales, rtlLocales } = localeConfig
  const allLocales = Object.keys(locales || [])
  const DEFAULT_SITE_LOCALE = `SITE_LOCALE.${getLocaleCode(defaultLocale)}`
  const localeObject = Object.fromEntries(allLocales.map((locale) => [
    getLocaleCode(locale),
    locale,
  ]))
  const RTL_LOCALES = (
    rtlLocales
      .map((locale) => `SITE_LOCALE.${getLocaleCode(locale)}`)
      .join(', ')
  )
  const typeDefFileContent = `
    export const SITE_LOCALE = ${JSON.stringify(localeObject, null, 2)}

    export const RTL_LOCALES: Array<keyof typeof SITE_LOCALE> = [${RTL_LOCALES}]

    export const DEFAULT_SITE_LOCALE = ${DEFAULT_SITE_LOCALE}\n
  `

  writeFileSync(typeDefFilePath, typeDefFileContent, prettierConfig)
}

module.exports = {
  generateTypesFromI18nConfig
}
