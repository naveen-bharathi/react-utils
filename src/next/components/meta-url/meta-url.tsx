import type { TProps } from './types'

import { getFullUrl } from '@/next/get-full-url'
import { getPathnameWithoutLocale } from '@/next/get-pathname-without-locale'

function MetaUrl(props: TProps) {
  const {
    currentLocale,
    defaultLocale,
    domainName,
    includeSearchParams = false,
    locales,
    pathname,
    searchParams,
  } = props

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
    currentLocale,
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
  currentLocale: PropTypes.string.isRequired,
  defaultLocale: PropTypes.string.isRequired,
  domainName: PropTypes.string.isRequired,
  includeSearchParams: PropTypes.bool,
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  pathname: PropTypes.string,
  searchParams: PropTypes.string,
}

export default MetaUrl
