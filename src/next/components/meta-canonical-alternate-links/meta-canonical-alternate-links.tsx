import type { TProps } from './types'

import { getLangFromLocale } from '@/next/get-lang-from-locale'
import { getFullUrl } from '@/next/get-full-url'
import { getPathnameWithoutLocale } from '@/next/get-pathname-without-locale'

function MetaCanonicalAlternateLinks(props: TProps) {
  const {
    currentLocale,
    defaultLocale,
    domainName,
    locales,
    pathname = '',
  } = props

  return (
    <>
      {[currentLocale]
        .concat(locales.filter((locale) => (locale !== currentLocale)))
        .map((localeItem) => (
          <link
            rel={(localeItem === currentLocale) ? 'canonical' : 'alternate'}
            href={getFullUrl(
              domainName,
              defaultLocale,
              getPathnameWithoutLocale(locales, pathname || '/'),
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
  pathname: PropTypes.string,
}

export default MetaCanonicalAlternateLinks
