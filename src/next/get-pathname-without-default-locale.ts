import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'
import {
  extractTextBetweenFirstTwoSlashes,
} from './extract-text-between-first-two-slashes'

export function getPathnameWithoutDefaultLocale<L = any>(
  defaultLocale: L,
  pathname: string,
): string {
  throwIfNoStartingSlashInPathname(pathname)

  const localePartValue = extractTextBetweenFirstTwoSlashes(pathname)

  let pathnameWithoutLocale = pathname

  if (localePartValue === defaultLocale) {
    pathnameWithoutLocale = pathname.replace(`/${localePartValue}`, '')
  }

  return (
    pathnameWithoutLocale.startsWith('/')
      ? pathnameWithoutLocale
      : ('/' + pathnameWithoutLocale)
  )
}
