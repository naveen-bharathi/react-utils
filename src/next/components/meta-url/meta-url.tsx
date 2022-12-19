import type { TProps } from './types'

import { getFullUrl } from '@/next/get-full-url'
import { getPathnameWithoutLocale } from '@/next/get-pathname-without-locale'

function MetaUrl({
  defaultLocale,
  domainName,
  includeSearchParams = false,
  locale,
  locales,
  pathname,
  searchParams,
}: TProps) {
  const currentUrl = getFullUrl(
    domainName,
    defaultLocale,
    (
      getPathnameWithoutLocale(locales, pathname || '/')
      + (
        !!(includeSearchParams && searchParams)
          ? ('?' + searchParams)
          : ''
      )
    ),
    locale,
  )

  return (
    <>
      <meta
        property="og:url"
        content={currentUrl}
      />
      <meta
        property="twitter:url"
        content={currentUrl}
      />
    </>
  )
}

// prop-types are auto-generated. do not manually edit below this line.
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

MetaUrl.propTypes = {
  defaultLocale: PropTypes.string.isRequired,
  domainName: PropTypes.string.isRequired,
  includeSearchParams: PropTypes.bool,
  locale: PropTypes.string.isRequired,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  pathname: PropTypes.string,
  searchParams: PropTypes.string,
}

export default MetaUrl
