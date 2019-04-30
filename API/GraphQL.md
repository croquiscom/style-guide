# 크로키닷컴 GraphQL API 스타일 가이드

## 이름

- 어떤 모델(리소스)을 반환하는 query는 모델명의 snake_case를 query명으로 한다.
  - 예) product, user
- 모델의 배열을 반환하는 query는 모델명에 _list를 붙인다.
  - 예) product_list, user_list
- mutation이나 모델을 반환하지 않는 query는 lowerCamelCase를 사용하고 동사로 시작한다.
  - 예) createProduct, getUserFeatureList
- pagination 필드는 limit_count, skip_count 또는 limit_count, after, end_cursor 사용한다
- 타입명은 UpperCamelCase(PascalCase)를 사용한다.
- mutation의 입력 타입명은 Input postfix를 사용한다.
  - 예) CreateProductInput

## query 인자

- query 인자는 기본적으로 optional이다
- 주어진 인자는 필터로서 동작한다.
- 두개 이상의 인자가 주어지는 경우 조건은 AND로 해석한다. (두개 조건을 모두 만족하는 레코드만 반환)
  - 단일 객체 query의 경우도 AND로 해석한다. 따라서 두개 인자가 서로 다른 레코드를 가리키는 경우 null을 반환한다.
- 인자가 주어지지 않는 경우... (pagination / 순서 관련 인자 제외)
  - 단일 객체 query는 어떤 객체에도 대응하지 않는다.
  - 객체 목록 query는 모든 객체에 대응한다.

## mutation 입력 / 결과

- 확장성을 고려해 Input 구조체를 만들어 인자로 받는다.
- 결과는 모델 또는 Boolean을 반환한다.

## nullable

- 값이 항상 있는 필드는 non-null(!)로 설정한다.
- 단일 객체 query의 반환값은 nullable로 설정한다. (객체를 찾을 수 없어도 에러가 아님)
- Boolean 타입은 특별한 사유가 있지 않는한 non-null로 설정한다.
- 배열의 내용물은 특별한 사유가 있지 않는한 non-null로 설정한다.
  - 예) `keyword_list: [String!]`
- 반환 값에 배열이 있는 경우 non-null로 설정한다. 배열에 내용물이 없을 경우 빈 배열([])을 반환하면 된다.
  - 예) (o) `item_list: [Product!]!`, (x) `item_list: [Product!]`

## 배열 query

- 배열 query는 List 구조체를 반환한다.
- 실제 객체 목록은 item_list 라는 필드에 담겨 반환한다.
- 객체 목록에 대한 메타데이터(전체 레코드 수등) 필드는 구조체에 포함한다.
  ```graphql
    type UserList {
      total_count: Int!
      item_list: [User!]!
    }
  ```
- 메타데이터는 주어진 query 조건을 모두 반영해서 계산된다. 다만 pagination / 순서 인자는 무시한다.
- limit_count 인자가 주어지지 않은 경우에도 기본적인 제한이 있다. (제한값은 각 query 별로 다름)

## pagination

- pagination은 개수 방식과 커서 방식이 있다. 둘다 지원할 수도 있다.
- 개수 방식은 limit_count / skip_count로 조절한다.
- 커서 방식은 이전 query에서 반환한 end_cursor를 after 인자로 준다. 개수 제한은 limit_count로 한다.

## 오류

- query/mutation 처리 중 발생한 오류는 반환값의 errors 필드에 담겨 반환한다.
- 오류 객체의 message 필드는 사람이 인지하는 문자열을 담아 반환한다.
  - 여러 언어를 지원하는 경우 사용자의 언어로 번역된 문자열을 담는다.
- 프로그램이 오류를 처리할 수 있게 하는 오류 코드는 extensions.code에 담는다.

## 예제

