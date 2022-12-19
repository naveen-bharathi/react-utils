export function throwIfNoStartingSlashInPathname(pathname: string, log?: string) {
  if (!pathname?.startsWith('/')) {
    if (log) {
      console.log({ log })
    }

    console.log({ pathname })

    throw new Error('Pathname must start with a slash')
  }
}
