# 크로키닷컴 TypeScript 스타일 가이드

## Lint

기본적으로는 [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)의
설정을 따르지만, 몇가지 예외를 가지고 있습니다.
예외적인 설정에 대해서는 [index.js](index.js)를 참고하면 됩니다.

모듈 설치 대신 설정을 복사해서 사용할 수 있도록 [tslint.json](tslint.json)도 동일한 내용을 포함하고 있습니다.

## 라이브러리

* 여러 선택지가 있는 경우 TypeScript 친화적인 라이브러리를 사용합니다.
* 유틸리티: lodash, underscore, ramda
  * ES5/ES6로 작성한 경우에도 가독성을 위해 유틸리티 라이브러리를 사용할 수 있습니다. (선택사항)
  * 여러 라이브러리중 lodash를 사용합니다.
  * 클라이언트에서는 tree shaking이 되는 lodash-es를 사용합니다.
* 시간: moment, date-fns, dayjs
  * 서버에서는 moment, 클라이언트에서는 date-fns를 사용합니다.
* Promise
  * 가능하면 native Promise를 사용합니다.
  * 고급기능이 필요하면 bluebird를 사용해도 됩니다.
