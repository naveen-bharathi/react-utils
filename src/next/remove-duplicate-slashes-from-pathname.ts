import {
  throwIfNoStartingSlashInPathname,
} from './errors/pathname/no-starting-slash'

export function removeDuplicateSlashesFromPathname(pathname: string): string {
  throwIfNoStartingSlashInPathname(pathname)

  return pathname.replace(new RegExp('\/{2,}', 'g'), '/')
}
