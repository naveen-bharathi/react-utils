import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'
import {
  removeDuplicateSlashesFromPathname,
} from './remove-duplicate-slashes-from-pathname'

export function getUrl<L = any>(
  defaultLocale: L,
  pathname?: (string | null),
  locale?: L,
) {
  throwIfNoStartingSlashInPathname(pathname)

  return removeDuplicateSlashesFromPathname(
    '/'
    + (locale ? ((locale === defaultLocale) ? '' : (locale + '/')) : '')
    + (pathname || '')
  )
}
