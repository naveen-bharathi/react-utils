import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'

export function addTrailingSlashToPathname(pathname: string) {
  throwIfNoStartingSlashInPathname(pathname)

  if (pathname.includes('?')) {
    const [pathnameWithoutQuery, query] = pathname.split('?')

    return (
      [
        pathnameWithoutQuery + (pathnameWithoutQuery.endsWith('/') ? '' : '/'),
        (query || ''),
      ].join('?')
    )
  }

  return (pathname + (pathname.endsWith('/') ? '' : '/'))
}
