import { defineConfig } from 'tsup';
import glob from 'glob';

export const tsup = defineConfig({
  dts: true,
  ...(
    (process.env.GENERATE_PROP_TYPES_FROM_TYPES === 'true')
      ? {
        entry: {
          'build/prop-types-from-types': 'src/scripts/prop-types-from-types.ts',
        },
      }
      : {
        entry: glob.sync('src/**/!(types)/!(types).ts'),
      }
  ),
  external: [
    'dayjs',
    'fs',
    'glob',
    'next',
    'path',
    'prettier',
    'prop-types',
    'react',
    'typescript-to-proptypes',
    'xml',
  ],
  minify: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: true,
  outDir: '.',
  platform: 'neutral',
  sourcemap: false,
});
