function makeImageSizeForMediaQuery(mediaQuery, width) {
  return [
    mediaQuery.includes(') ') ? `(${mediaQuery})` : mediaQuery,
    `${width}${(typeof width === 'number') ? 'px' : ''}`,
  ].join(' ')
}

function makeImageSizes(sizes) {
  return (
    sizes
      .map((sizeOrWidth) => {
        if (Array.isArray(sizeOrWidth)) {
          return makeImageSizeForMediaQuery(...sizeOrWidth)
        }

        return `${sizeOrWidth}px`
      })
      .join(', ')
  )
}

module.exports = { makeImageSizes }
