import path from 'path';
import url from 'url';
import tseslint from 'typescript-eslint';
import baseConfig from './requiring-type-checking.mjs';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default tseslint.config(...baseConfig, {
  languageOptions: {
    parserOptions: {
      projectService: true,
      tsconfigRootDir: dirname,
    },
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: `${dirname}/tsconfig.json`,
      },
    },
  },
});
