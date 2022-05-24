# eslint-config-www

This package includes the shareable ESLint configuration used by [Zigzag-www](https://github.com/croquiscom/zigzag-www).

## Installation

```sh
npm install --save-dev @croquiscom/eslint-config-www eslint typescript
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

## publish

1. Request permission of npm account from @sixmen
2. Specifies module version

```sh
npm version {version}
```

3. publish

```sh
npm publish
```
