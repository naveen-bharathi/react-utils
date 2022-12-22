const prettier = require('prettier')
const {
  generatePropTypesFromTypes,
} = require('@naveen-bharathi/scripts/react/prop-types-from-types')

generatePropTypesFromTypes({
  componentDirectories: ['src/next/components/**/types.ts'],
  prettierConfig: prettier.resolveConfig.sync('./.prettierrc.json'),
  tsCompilerOptions: {
    strict: true,
  },
})
