export type LocaleObject = {
  [localeCode: string]: {
    localeCode: string
    name: string
  }
}

export type LocaleConfig = {
  defaultLocale: string
  locales: LocaleObject
  rtlLocales: string[]
}
