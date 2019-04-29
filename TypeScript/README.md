# 크로키닷컴 TypeScript 스타일 가이드

## Lint

기본적으로는 [tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)의
설정을 따르지만, 몇가지 예외를 가지고 있습니다.
예외적인 설정에 대해서는 [index.js](index.js)를 참고하면 됩니다.

모듈 설치 대신 설정을 복사해서 사용할 수 있도록 [tslint.json](tslint.json)도 동일한 내용을 포함하고 있습니다.

## 네이밍

* 함수/메소드 이름은 lowerCamelCase를 사용합니다.
* 변수명은 snake_case가 기본입니다. 하지만 lowerCamelCase도 허용합니다.
* 상수에 가까운 변수인 경우 UPPER_CASE를 사용합니다.
* PascalCase는 기본적으로 허용하지 않습니다만, 클래스에 가까운 변수인 경우(예, React의 HOC) 사용할 수 있습니다.

### 기타

* 함수의 인자 개수는 가급적 5개 이하로 유지합니다. 그 이상이 필요하면 객체를 만들어 넘깁니다.

## 라이브러리

* 여러 선택지가 있는 경우 TypeScript 친화적인 라이브러리를 사용합니다.
* 유틸리티 라이브러리 (lodash, underscore, ramda 등)
  * ES5/ES6로 작성 가능한 경우에도 가독성을 위해 유틸리티 라이브러리를 사용할 수 있습니다. (선택사항)
  * 여러 라이브러리중 lodash를 사용합니다.
  * 클라이언트에서는 tree shaking이 되는 lodash-es를 사용합니다.
* 시간 라이브러리 (moment, date-fns, dayjs 등)
  * 서버에서는 moment, 클라이언트에서는 date-fns를 사용합니다.
* Promise 라이브러리 (native, Bluebird, q 등)
  * 가능하면 native Promise를 사용합니다.
  * 고급기능(예, map의 concurrency)이 필요하면 bluebird를 사용해도 됩니다.

## Compiler Options (tsconfig.json)

* esModuleInterop - true
* noImplicitAny - 가급적 true로 하지만, 레거시 코드가 많은 경우 false도 가능합니다.
* noImplicitThis - true
* strictNullChecks - true

## Rules ([tslint.json](tslint.json) / [index.js](index.js))

### no-var-keyword:true

* 변수 선언에 `var` 대신 `let` 키워드를 사용합니다.

```typescript
// bad
var my_var: number;
my_var = 1;

// good
let my_var: number;
my_var = 1;
```

### prefer-const:true

* 값이 재할당되지 않는 변수에는 `const` 키워드를 사용합니다.

```typescript
// bad
let my_const = 1;

// good
const my_const = 1;
```

### indent:[spaces, 2]

* 들여쓰기는 공백 2칸을 사용합니다.

```typescript
// bad
{
    const my_const = 1;
}

// good
{
  const my_const = 1;
}
```

### interface-name:never-prefix

* 인터페이스에서 `I` 접두사를 붙이지 않습니다.

```typescript
// bad
interface IMyInterface {
}

// good
interface MyInterface {
}
```

### quotemark:single

* 문자열은 작은 따옴표를 사용합니다.

```typescript
// bad
const my_str = "hello";

// good
const my_str = 'hello';
```

### trailing-comma:multiline-always

* 여러 줄로 이루어진 객체 정의, import등에서 마지막 줄에 항상 콤마를 사용합니다.
* 버전 관리 시스템 친화적인 코드가 됩니다.

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

* 변수 이름은 lowerCamelCased, UPPER_CASED, PascalCase, snake_case가 허용됩니다.
* 몇 가지 TypeScript keyword들을 변수나 파라미터 이름으로 사용할 수 없습니다.
* `_`로 시작하거나 끝나는 것을 허용하지는 않습니다.

```typescript
// bad
const SomeValue = 1;

// best
const some_value = 1;

// allow
const someValue = 1;
```
