export function getLocaleFromString<L = any>(
  locales: { [key: string]: L },
  defaultLocale: L,
  localeString: string,
): L {
  const locale = localeString.toLowerCase() as L

  return (locales[locale as any] || defaultLocale) as L
}
