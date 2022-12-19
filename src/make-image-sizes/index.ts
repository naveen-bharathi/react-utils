function makeImageSizeForMediaQuery(query: string, width: string | number) {
  return [
    query.includes(') ') ? `(${query})` : query,
    `${width}${(typeof width === 'number') ? 'px' : ''}`,
  ].join(' ')
}

export function makeImageSizes(sizes: (number | [string, string | number])[]) {
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
