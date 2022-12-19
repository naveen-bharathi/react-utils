import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'
import {
  removeDuplicateSlashesFromPathname,
} from './remove-duplicate-slashes-from-pathname'
import {
  addTrailingSlashToPathname,
} from './add-trailing-slash-to-pathname'

export function getFullUrl<L = any>(
  domainName: string,
  defaultLocale?: (L | null),
  pathname?: (string | null),
  locale?: L,
) {
  if (pathname) {
    throwIfNoStartingSlashInPathname(pathname)
  }

  const urlString = (
    domainName
    + removeDuplicateSlashesFromPathname(
      (
        locale
          ? ((locale === defaultLocale) ? '' : ('/' + locale))
          : ''
      )
      + addTrailingSlashToPathname(pathname || '/')
    )
  )

  return urlString
}
