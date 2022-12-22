const prettier = require('prettier')
const {
  setOutputLocations,
} = require('@naveen-bharathi/scripts/package/set-output-locations')

setOutputLocations({
  gitIgnorePath: './.gitignore',
  packageJsonPath: './package.json',
  sourceDirectory: './src',
  cleanupShellFilePath: './.scripts/cleanup.sh',
  prettierConfig: prettier.resolveConfig.sync('./.prettierrc.json'),
})
