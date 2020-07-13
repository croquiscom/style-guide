# eslint-config-www

This package includes the shareable ESLint configuration used by [Zigzag-www](https://github.com/croquiscom/zigzag-www).

## Installation

```sh
npm install --save-dev @croquiscom/eslint-config-www @typescript-eslint/eslint-plugin@3.x @typescript-eslint/parser@3.x eslint@7.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x
```

## Usage in www Projects

```json
{
  "extends": [
    "@croquiscom/eslint-config-www",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  "overrides": [
    ...custom overrides
  ],
  "rules": {
    ...custom rules
  }
}
```

You can override the settings from `eslint-config-www` by editing the `.eslintrc.json` file. Learn more about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.
