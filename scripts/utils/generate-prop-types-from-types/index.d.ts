import type { Config as PrettierConfig } from 'prettier'
import type { CompilerOptions } from 'typescript'

export function generatePropTypesFromTypes(
  componentDirectories: string[],
  prettierConfig: PrettierConfig,
  tsCompilerOptions: CompilerOptions,
): void
