
# 크로키닷컴 SCSS 스타일 가이드

## Lint

linter는 [stlyelint](https://stylelint.io/)를 사용합니다. 기본 설정은 [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended)을 사용하고, 몇가지 추가적인 설정을 적용합니다. 예외적인 설정에 대해서는 [index.js](index.js)를 참고합니다.
```
  npm install --save-dev stylelint stylelint-scss stylelint-config-recommended
```

config 설정은 [.stylelintrc](.stylelintrc)를 사용합니다.

### selector

* class selector, id selector는 snake_case를 권장합니다. (kebob-case도 사용가능합니다.)
  - snake_case를 사용하는 이유는 css module의 사용을 용이하게 하기 위함입니다. (class cat과도 궁합이 좋습니다.)
  - 크로키닷컴의 경우 JavaScript도 snake_case를 사용하기 때문에 궁합이 더 좋을 것으로 생각됩니다.
* SCSS 변수명도 마찬가지로 snake_case로 작성합니다.

``` scss
// bad
.postItem {
  // style
}

// not bad
.post-item {
  // style
}

// good
.post_item {
  // style
}

```

### nesting

* 3개 이상 중첩하지 않습니다.
  - 깊은 중첩은 가독성도 좋지않고, 퍼포먼스도 좋지 않습니다.
  - 깊은 중첩은 모듈화를 방해 합니다.

``` scss
// bad
.wrap {
  >.content{
    // style
    >.post-list{
      >.item {
        >.title {
          // style
        }
      }
    }
  }
}

// good
.wrap {
  >.content{
    // style
  }
}

.post-list{
  >.item {
    >.title {
      //style
    }
  }
}
```
