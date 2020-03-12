# 크로키닷컴 TypeScript 스타일 가이드

## Lint

### ESLint
[eslint](eslint) 디렉토리를 참고한다.

### TSLint

기본적으로는 [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)의
설정을 따르지만, 몇가지 예외를 가진다.
예외적인 설정에 대해서는 [index.js](tslint/index.js)를 참고한다.

모듈 설치 대신 설정을 복사해서 사용할 수 있도록 [tslint.json](tslint/tslint.json)도 같은 내용을 나타낸다.

### 네이밍

* 함수/메소드 이름은 lowerCamelCase를 사용한다.
* 변수명은 snake_case가 기본이지만 lowerCamelCase도 허용한다.
* 상수에 가까운 변수인 경우 UPPER_CASE를 사용한다.
* PascalCase는 기본적으로 허용하지 않지만, 클래스에 가까운 변수인 경우(예, React의 HOC) 사용할 수 있다.
* 함수/변수 이름은 _(underscore)로 시작하지 않는다.

### 기타

* 버전 관리 시스템 친화적인 코드를 위해 여러 줄로 이루어진 객체 정의, import등에서 마지막 줄에 항상 콤마를 사용한다.
* 클래스 멤버 순서나 객체 리터럴 필드 순서를 강제하면 버전 관리 시스템에는 좋지만, 코드를 볼 때 힘들기 때문에 강제하지 않는다.
* 함수의 인자 개수는 가급적 5개 이하로 유지한다. 그 이상이 필요하면 객체를 만들어 넘긴다.

## 라이브러리

* 여러 선택지가 있는 경우 TypeScript 친화적인 라이브러리를 사용한다.
* 유틸리티 라이브러리 (lodash, underscore, ramda 등)
  * ES5/ES6로 작성 가능한 경우에도 가독성을 위해 유틸리티 라이브러리를 사용할 수 있다. (선택사항)
  * 여러 라이브러리중 lodash를 사용한다.
  * 클라이언트에서는 tree shaking이 되는 lodash-es를 사용한다.
* 시간 라이브러리 (moment, date-fns, dayjs 등)
  * 서버에서는 moment, 클라이언트에서는 date-fns를 사용한다.
* Promise 라이브러리 (native, Bluebird, q 등)
  * 가능하면 native Promise를 사용한다.
  * 고급기능(예, map의 concurrency)이 필요하면 bluebird를 사용해도 된다.

## 타입

* Generic Type으로 대체 가능한 경우 `as`를 사용하지 않는다.
  * 좋은 예시 : `arr.reduce<T>(reducer, [])`
  * 나쁜 예시 : `arr.reduce(reducer, [] as T[])`

## Compiler Options (tsconfig.json)

* esModuleInterop - true
* noImplicitAny - 가급적 true로 하지만, 레거시 코드가 많은 경우 false도 가능하다.
* noImplicitThis - true
* strictNullChecks - true

## 예제

### no-var
```typescript
// bad
var my_var: number;
my_var = 1;

// good
let my_var: number;
my_var = 1;
```

### prefer-const
```typescript
// bad
let my_const = 1;

// good
const my_const = 1;
```

### quotes:single
```typescript
// bad
const my_str = "hello";

// good
const my_str = 'hello';
```

### comma-dangle:always-multiline
```typescript
// bad
const my_obj = {
  a: 1,
  b: 2
};

// good
const my_obj = {
  a: 1,
  b: 2,
};
```

### variable-name
```typescript
// bad
const SomeValue = 1;
const _some_value = 1;

// best
const some_value = 1;

// allow
const someValue = 1;
```
