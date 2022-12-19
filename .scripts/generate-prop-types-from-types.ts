import prettier from 'prettier'
import { generatePropTypesFromTypes } from
  '../src/scripts/generators/prop-types-from-types'

generatePropTypesFromTypes(
  ['src/next/components/**/types.ts'],
  prettier.resolveConfig.sync('./.prettierrc.json') as any,
  {
    strict: true,
  },
)
