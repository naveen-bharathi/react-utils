import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'
import {
  extractTextBetweenFirstTwoSlashes,
} from './extract-text-between-first-two-slashes'

export function getLocaleFromPathname<L = any>(
  locales: L[],
  defaultLocale: L,
  pathname: string,
): L {
  throwIfNoStartingSlashInPathname(pathname)

  const localePartValue = extractTextBetweenFirstTwoSlashes(pathname) as L

  if (locales.includes(localePartValue)) {
    return localePartValue
  }

  return defaultLocale
}
