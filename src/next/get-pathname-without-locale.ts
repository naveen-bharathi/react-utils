import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'
import {
  extractTextBetweenFirstTwoSlashes,
} from './extract-text-between-first-two-slashes'

export function getPathnameWithoutLocale<L = any>(
  locales: L[],
  pathname: string,
): string {
  throwIfNoStartingSlashInPathname(pathname)

  const localePartValue = extractTextBetweenFirstTwoSlashes(pathname) as L

  let pathnameWithoutLocale = pathname

  if (locales.includes(localePartValue)) {
    pathnameWithoutLocale = pathname.replace(`/${localePartValue}`, '')
  }

  return (
    pathnameWithoutLocale.startsWith('/')
      ? pathnameWithoutLocale
      : ('/' + pathnameWithoutLocale)
  )
}
