export function extractTextBetweenFirstTwoSlashes(text: string) {
  const firstSlashIndex = text.indexOf('/')

  if (firstSlashIndex === -1) {
    return ''
  }

  const secondSlashIndex = text.indexOf('/', firstSlashIndex + 1)

  if (secondSlashIndex === -1) {
    return text.replace('/', '')
  }

  return text.substring(firstSlashIndex + 1, secondSlashIndex)
}
