'use client'

import type { TProps } from './types'

import { usePathname } from 'next/navigation'
import { getLangFromLocale } from '@/next/get-lang-from-locale'
import { getFullUrl } from '@/next/get-full-url'
import {
  getPathnameWithoutDefaultLocale,
} from '@/next/get-pathname-without-default-locale'

function MetaCanonicalAlternateLinks({
  currentLocale,
  defaultLocale,
  domainName,
  locales,
}: TProps) {
  const pathname = usePathname()

  return (
    <>
      {
        [
          currentLocale,
          ...locales.filter((locale) => (locale !== currentLocale))
        ].map((localeItem) => (
          <link
            rel={(localeItem === currentLocale) ? 'canonical' : 'alternate'}
            href={getFullUrl(
              domainName,
              defaultLocale,
              getPathnameWithoutDefaultLocale(defaultLocale, pathname || '/'),
              localeItem,
            )}
            hrefLang={getLangFromLocale(localeItem)}
            key={localeItem}
          />
        ))
      }
    </>
  )
}

// prop-types are auto-generated. do not manually edit below this line.
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

MetaCanonicalAlternateLinks.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  defaultLocale: PropTypes.string.isRequired,
  domainName: PropTypes.string.isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MetaCanonicalAlternateLinks
