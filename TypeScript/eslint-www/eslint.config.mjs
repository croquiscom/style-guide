import tseslint from 'typescript-eslint';
import baseConfig from './requiring-type-checking.mjs';

export default tseslint.config(...baseConfig, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
  },
});
