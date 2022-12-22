export function getLangFromLocale(locale: string): string {
  if (locale.includes('-')) {
    return [
      locale.split('-')[0].toLowerCase(),
      locale.split('-')[1].toUpperCase(),
    ].join('-')
  }

  return locale.toLowerCase()
}
