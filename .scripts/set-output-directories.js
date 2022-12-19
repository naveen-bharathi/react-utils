const fs = require('fs')
const prettier = require('prettier')

const sourceDirectory = './src'
const packageJson = require('../package.json')
const prettierConfig = prettier.resolveConfig.sync('./.prettierrc.json')
const gitIgnoreContent = fs.readFileSync('./.gitignore', 'utf8')
const gitIgnoreContentStartText = '# start:build-output-directories-to-ignore'
const gitIgnoreContentEndText = '# end:build-output-directories-to-ignore'

function setOutputDirectories() {
  const contentsInSource = fs.readdirSync(sourceDirectory)
  const startIndex = gitIgnoreContent.indexOf(gitIgnoreContentStartText)
  const endIndex = gitIgnoreContent.indexOf(gitIgnoreContentEndText)

  const updatedGitIgnoreContent = (
    gitIgnoreContent.substring(0, startIndex + gitIgnoreContentStartText.length)
    + '\n'
    + contentsInSource.map((content) => `/${content}`).join('\n')
    + '\n'
    + gitIgnoreContent.substring(endIndex)
  )

  fs.writeFileSync('./.gitignore', updatedGitIgnoreContent)

  fs.writeFileSync(
    './.scripts/cleanup.sh',
    `rm -rf ${contentsInSource.join(' ')} *.d.ts`,
  )

  fs.writeFileSync(
    './package.json',
    prettier.format(
      JSON.stringify({
        ...packageJson,
        files: [...contentsInSource, '*.d.ts']
      }),
      {
        ...prettierConfig,
        filepath: './package.json',
      }
    )
  )
}

setOutputDirectories()
