import tseslint from 'typescript-eslint';
import baseConfig from './requiring-type-checking.mjs';

export default tseslint.config(...baseConfig, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
      project: `${import.meta.dirname}/tsconfig.json`,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: `${import.meta.dirname}/tsconfig.json`,
      },
    },
  },
});
