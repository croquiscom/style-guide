# eslint-config-www

This package includes the shareable ESLint configuration used by [Zigzag-www](https://github.com/croquiscom/zigzag-www).

## Installation

```sh
npm install --save-dev @croquiscom/eslint-config-www @typescript-eslint/eslint-plugin@^3.6.0 @typescript-eslint/parser@^3.6.0 eslint@^7.4.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.7
```

## Usage in www Projects

```json
{
  "extends": [
    "@croquiscom/eslint-config-www"
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
