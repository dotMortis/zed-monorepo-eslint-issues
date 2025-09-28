import type { TSESLint } from '@typescript-eslint/utils';
declare function createConfig(
    tsconfigFile: string,
    ...configs: TSESLint.FlatConfig.Config[]
): TSESLint.FlatConfig.ConfigArray;
export default createConfig;
