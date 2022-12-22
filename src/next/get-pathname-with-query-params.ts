export function getPathnameWithQueryParams(
  pathname: string,
  ...queryParams: [string, any][]
): string {
  const searchParams = new URLSearchParams()

  queryParams.forEach(([key, value]) => {
    searchParams.set(key, value)
  })

  const searchParamsString = searchParams.toString()

  return (
    searchParamsString
      ? [pathname, searchParamsString].join('?')
      : pathname
  )
}
