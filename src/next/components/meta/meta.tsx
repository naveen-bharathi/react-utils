import type { TProps } from './types'

import { getFullUrl } from '@/next/get-full-url'
import { getUrl } from '@/next/get-url'

function Meta(props: TProps) {
  const {
    bgColor,
    bgColorContrastText,
    currentLocale,
    defaultLocale,
    description,
    domainName,
    ogImage,
    robots = {
      noArchive: true,
      noImageIndex: false,
    },
    safariPinnedTabLogoPath,
    siteName,
    title: titleProp,
    twitterUsername,
  } = props
  const ogImageUrl = getFullUrl(
    domainName,
    defaultLocale,
    ogImage.path,
    currentLocale,
  )
  const title = (
    titleProp ? `${titleProp} - ${siteName}` : siteName
  )

  return (
    <>
      {safariPinnedTabLogoPath && (
        <link
          color={bgColorContrastText}
          href={getUrl(defaultLocale, safariPinnedTabLogoPath, currentLocale)}
          rel="mask-icon"
        />
      )}

      <meta
        name="theme-color"
        content={bgColor}
      />
      <meta
        name="msapplication-TileColor"
        content={bgColor}
      />
      {robots.noArchive && (
        <meta
          name="robots"
          content="noarchive"
        />
      )}
      {robots?.noImageIndex && (
        <meta
          name="robots"
          content="noimageindex"
        />
      )}

      {/* HTML Meta Tags */}
      <title>
        {title}
      </title>
      <meta
        name="description"
        content={description}
      />
      {/* End HTML Meta Tags */}

      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={ogImageUrl}
      />
      <meta
        property="og:image:secure_url"
        content={ogImageUrl}
      />
      <meta
        property="og:image:type"
        content={ogImageUrl}
      />
      <meta
        property="og:image:width"
        content={ogImage.width.toString()}
      />
      <meta
        property="og:image:height"
        content={ogImage.height.toString()}
      />
      <meta
        property="og:image:alt"
        content={title}
      />
      <meta
        property="og:site_name"
        content={siteName}
      />
      {/* End Facebook Meta Tags */}


      {/* Twitter Meta Tags */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={ogImageUrl}
      />
      {twitterUsername && (
        <meta
          name="twitter:creator"
          content={twitterUsername}
        />
      )}
      {/* End Twitter Meta Tags */}
    </>
  )
}

// prop-types are auto-generated. do not manually edit below this line.
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'

Meta.propTypes = {
  bgColor: PropTypes.string.isRequired,
  bgColorContrastText: PropTypes.string.isRequired,
  currentLocale: PropTypes.string.isRequired,
  defaultLocale: PropTypes.string.isRequired,
  description: PropTypes.string,
  domainName: PropTypes.string.isRequired,
  ogImage: PropTypes.shape({
    height: PropTypes.number.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  robots: PropTypes.shape({
    noArchive: PropTypes.bool,
    noImageIndex: PropTypes.bool,
  }),
  safariPinnedTabLogoPath: PropTypes.string,
  siteName: PropTypes.string.isRequired,
  title: PropTypes.string,
  twitterUsername: PropTypes.string,
}

export default Meta
