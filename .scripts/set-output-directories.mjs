import fs from 'fs'
import prettier from 'prettier'
import packageJson from '../package.json' assert { type: 'json' }

const sourceDirectory = './src'
const prettierConfig = prettier.resolveConfig.sync('./.prettierrc.json')
const gitIgnoreContent = fs.readFileSync('./.gitignore', 'utf8')
const gitIgnoreContentStartText = '# start:build-output-to-ignore'
const gitIgnoreContentEndText = '# end:build-output-to-ignore'

function setOutputDirectories() {
  const contentsInSource = fs.readdirSync(sourceDirectory)
  const startIndex = gitIgnoreContent.indexOf(gitIgnoreContentStartText)
  const endIndex = gitIgnoreContent.indexOf(gitIgnoreContentEndText)

  contentsInSource.push('build')
  contentsInSource.push('*.d.ts')

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
    `rm -rf ${contentsInSource.join(' ')}`,
  )

  fs.writeFileSync(
    './package.json',
    prettier.format(
      JSON.stringify({
        ...packageJson,
        files: contentsInSource,
      }),
      {
        ...prettierConfig,
        filepath: './package.json',
      }
    )
  )
}

setOutputDirectories()
