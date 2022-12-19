import {
  removeDuplicateSlashesFromPathname,
} from './remove-duplicate-slashes-from-pathname'

export function getPagePath<L = any>(
  locale: L,
  defaultLocale: L,
  pathname?: (string | null),
): string {
  const pagePathLocalePart = (locale === defaultLocale) ? '' : ('/' + locale)
  const pagePath = pagePathLocalePart + (pathname || '/')

  return removeDuplicateSlashesFromPathname(pagePath)
}
