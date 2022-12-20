import prettier from 'prettier'
import ptft from '../build/prop-types-from-types.js'

const { generatePropTypesFromTypes } = ptft

generatePropTypesFromTypes(
  ['src/next/components/**/types.ts'],
  prettier.resolveConfig.sync('./.prettierrc.json'),
  {
    strict: true,
  },
)
