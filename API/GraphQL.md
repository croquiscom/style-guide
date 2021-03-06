# 크로키닷컴 GraphQL API 스타일 가이드

## 이름

- 어떤 모델(리소스)을 반환하는 query는 모델명의 snake_case를 query명으로 한다.
  - product :o:, getProduct :x:
  - user_account :o:, userAccount :x:
- 모델의 배열을 반환하는 query는 모델명에 \_list를 붙인다.
  - product_list :o:, products :x:
  - user_account_list :o:, user_accounts :x:
- mutation이나 모델을 반환하지 않는 query는 lowerCamelCase를 사용하고 동사로 시작한다.
  - 예) createProduct, getUserFeatureList
    > user_feature_list는 user_id, feature 라는 모델 데이터를 가진 배열을 반환한다면 getUserFeatureList는 다른 형태(이 경우 문자열의 배열)를 반환한다.
- 어떤 모델에 대한 일반적인 query가 아닌 특수 조건에 대한 query 역시 lowerCamelCase를 사용하고 동사로 시작한다.
  - 예) getNewUserAccountList
- 데이터베이스와 1:1 대응하지 않는 데이터(예 집계(aggregation) 데이터)의 경우 lowerCamelCase API로 정의해도 되고, 가상 모델에 대한 query API로 정의해도 된다.
  - 예) user_account_overall_summary (권장), getUserAccountOverallSummary (허용)
- 타입명은 UpperCamelCase(PascalCase)를 사용한다.
- enum 타입의 값들은 UPPER_CASE를 사용한다.
- mutation의 입력 타입명은 Input postfix를 사용한다.
  - 예) CreateProductInput

## query 인자

- query 인자는 기본적으로 optional이다.
  - 요구사항에 따라 필수 인자도 가능하다. (예. order_list의 user_id 인자)
- 주어진 인자는 필터로서 동작한다.
- 두 개 이상의 인자가 주어지는 경우 조건은 AND로 해석한다. (주어진 조건을 모두 만족하는 레코드만 반환)
  - 단일 객체 query의 경우도 AND로 해석한다. 따라서 두 개 인자가 서로 다른 레코드를 가리키는 경우 null을 반환한다.
- OR 조건이 필요한 경우 객체를 만들어 넘긴다. (해당 객체의 필드 중 한 조건이라도 만족하면 반환)
- 인자가 주어지지 않는 경우... (pagination / 순서 관련 인자 제외)
  - 단일 객체 query는 어떤 객체에도 대응하지 않는다.
  - 객체 목록 query는 모든 객체에 대응한다.
- 여러가지 값 중 하나를 가지는 레코드를 찾으려면 \_list 인자에 배열을 준다.
  - 예) `id_list: ['1','4']`, `status_list: [NORMAL, SOLD_OUT]`
- 동일성 검사가 아닌 경우 이름 뒤에 원하는 연산자를 붙인다. (접두사 i는 case-insensitive를 의미)
  - gt, gte, lt, lte: >, >=, <, <=
  - contains: 해당 텍스트를 포함한다. 대소문자를 구분한다.
  - icontains: 해당 텍스트를 포함한다. 대소문자를 구분하지 않는다.
  - startswith: 해당 텍스트로 시작한다. 대소문자를 구분한다.
  - istartswith: 해당 텍스트로 시작한다. 대소문자를 구분하지 않는다.
  - endswith: 해당 텍스트로 끝난다. 대소문자를 구분한다.
  - iendswith: 해당 텍스트로 끝난다. 대소문자를 구분하지 않는다.
  - isnull: 값이 null(true) 또는 not null(false)인지 검사한다.
  - 예) title_contains, date_created_gte, manager_isnull

## mutation 입력 / 결과

- 확장성을 고려해 Input 구조체를 만들어 인자로 받는다.
- 결과는 모델 또는 Boolean을 반환한다.

## nullable

- 값이 항상 있는 필드는 non-null(!)로 설정한다.
- 단일 객체 query의 반환 값은 nullable로 설정한다. (객체를 찾을 수 없어도 오류가 아님)
- Boolean 타입은 특별한 사유가 있지 않는 한 non-null로 설정한다.
- 배열의 내용물은 특별한 사유가 있지 않는 한 non-null로 설정한다.
  - 예) `keyword_list: [String!]`
- 반환 값에 배열이 있는 경우 non-null로 설정한다. 배열에 내용물이 없을 경우 빈 배열([])을 반환하면 된다.
  - `item_list: [Product!]!` :o:, `item_list: [Product!]` :x:

## 배열 query

- 배열 query는 List 구조체를 반환한다.
- 실제 객체 목록은 item_list 라는 필드에 담겨 반환한다.
- 객체 목록에 대한 메타데이터(전체 레코드 수 등) 필드는 구조체에 포함한다.
  ```graphql
    type UserList {
      total_count: Int!
      item_list: [User!]!
    }
  ```
- 메타데이터는 주어진 query 조건을 모두 반영해서 계산된다. 다만 pagination / 순서 인자는 무시한다.
- limit_count 인자가 주어지지 않은 경우에도 기본적인 제한이 있다. (제한 값은 각 query 별로 다름)

## pagination

- pagination은 개수 방식(limit_count, skip_count 또는 page, page_size)과 커서 방식(limit_count, after, end_cursor)이 있다. 둘다 지원할 수도 있다.
- 개수 방식은 다음 중 하나를 사용한다. (SQL에 가까운 방식 vs Pagination UI에 적합한 방식)
  - limit_count / skip_count
  - page / page_size
    - page는 1부터 시작한다.
    - limit_count = page_size, skip_count = (page-1) * page_size를 쓴 것과 같다.
- 커서 방식은 이전 query에서 반환한 end_cursor를 after 인자로 준다. 개수 제한은 limit_count로 한다.

## 정렬

- 모델 배열에 정렬 조건이 필요한 경우 모델명에 OrderType을 붙인 enum으로 정렬 조건을 정의한다.
- 정렬 조건은 필드명에 ASC 또는 DESC를 붙인다.
- 여러 조건이 합쳐질 수도 있다.
  ```graphql
  enum ProductOrderType {
    ID_ASC
    ID_DESC
    NAME_ASC
    DATE_YMD_PUBLISHED_DESC
    STATUS_ASC_DATE_YMD_PUBLISHED_DESC
  }
  ```

## 날짜/시간

- 날짜/시간 필드는 date_xxx를 사용한다.
  - 예) date_created, date_updated
- YYYYMMDD / YYYYMM 형태의 Int 타입의 날짜는 date_xxx_ymd, date_xxx_ym를 사용한다.
- 날짜/시간 범위로 필터를 할 경우 date_xxx_gte, date_xxx_lt 이름을 사용한다. Int 타입의 날짜 범위로 필터를 할 경우 date_xxx_ymd_gte, date_xxx_ymd_lte 이름을 사용한다.
  > 초기에 만들어진 API는 비교 연산자 대신 from, to를 사용하는 것이 있다.
  > 날짜/시간 범위일 경우 from은 포함, to는 비포함이다. (from: 'PM 1', to: 'PM 2' 조건인 경우 오후 1시는 포함하고, 오후 2시는 제외)
  > Int 타입의 날짜인 경우 from, to 모두 포함이다. (from: 20190501, to: 20190510 조건인 경우 1일과 10일 모두 포함)

## Custom Scalar

https://github.com/croquiscom/graphql-scalar-types 가 제공하는 Scalar를 사용한다.

- 날짜/시간 필드는 CrTimestamp를 사용한다. 값은 모두 Float 으로 주고받는다.
- 객체 필드는 CrJson을 사용한다.

## 오류

- query/mutation 처리 중 발생한 오류는 반환값의 errors 필드에 담겨 반환한다.
- 오류 객체의 message 필드는 사람이 인지하는 문자열을 담아 반환한다.
  - 여러 언어를 지원하는 경우 사용자의 언어로 번역된 문자열을 담는다.
  - 만약 기계를 대상으로 하는 API인 경우 오류 코드(extensions.code)를 message로 사용할 수 있다.
  > 서버에서 문자열을 반환하면 클라이언트가 오류 코드에 대해서 몰라도 사용자에게 적절한 오류 메시지를 표시해줄 수 있다. 다만 서버가 클라이언트의 언어를 알아야 하는 불편함은 있다.
- 프로그램이 오류를 처리할 수 있게 하는 오류 코드는 extensions.code에 담는다.
  - 오류 코드는 snake_case 문자열로 한다.
- 해당 오류에 추가 데이터가 있다면 extensions에 담는다.
  - 예) 오류가 발생한 레코드 ID, 외부 API에서 반환한 오류 코드
- 사용자에게 단순 메시지 외에 풍부한 오류창을 보여주고 싶은 경우 extensions.contents를 사용한다.
  - type: 아이콘 타입, warning, error, info
  - title: 창 제목
  - body: 창 내용
  - link_title: 링크 제목
  - link_url: 링크 주소

```json
{
  "errors": [
    {
      "message": "쿠폰코드를 다시 한 번 확인해주세요",
      "path": [
        "issueCoupon"
      ],
      "extensions": {
        "code": "invalid_coupon_code",
        "contents": {
          "type": "warning",
          "title": "유효하지 않은 쿠폰이에요",
          "body": "쿠폰코드를 다시 한 번 확인해주세요",
          "link_title": "쿠폰 확인",
          "link_url": "https://example.com/check-coupon"
        }
      }
    }
  ],
  "data": null
}
```

## GraphQL over HTTP

- GraphQL을 HTTP 프로토콜을 통해 주고받을 경우 HTTP 상태 코드는 무조건 200을 사용한다.
  > 404 Not Found / 500 Internal Server Error 같은 경우 프록시등에서 형태가 정해지지 않은 자체 오류를 반환한다.
  > 반면 GraphQL 오류는 JSON 데이터를 해석해야 한다.
  > 따라서 GraphQL 호출 자체는 성공(200)한 것으로 보고, 반환 값을 해석해서 오류 처리를 하는 편이 자연스럽다.

## 기타

Query/Mutation 타입이 비어서 오류가 나는 경우 다음 코드를 사용한다.

```graphql
type Query {
  _placeholder: Boolean
}
```

## 예제

```graphql
"""상품"""
type Product {
  """기본 키"""
  id: ID!

  """상품명"""
  name: String

  """판매가"""
  price: Int

  """생성 일자"""
  date_created: CrTimestamp!

  """출시 일자"""
  date_ymd_published: Int

  """진열상태"""
  hidden: Boolean!
}

"""상품 목록 및 요약 데이터"""
type ProductList {
  """총목록 수"""
  total_count: Int!

  """상품 목록"""
  item_list: [Product!]!
}

"""정렬 타입"""
enum ProductOrderType {
  ID_ASC
  ID_DESC
  NAME_ASC
  NAME_DESC
  DATE_YMD_PUBLISHED_ASC
  DATE_YMD_PUBLISHED_DESC
}

type Query {
  """
  주어진 조건 모두에 일치하는 상품을 받는다.
  조건에 맞는 상품이 없으면 null을 반환한다.
  조건을 주지 않으면 null을 반환한다.
  """
  product(
    """주어진 기본 키를 가지는 상품"""
    id: ID
  ): Product

  """
  주어진 조건 모두에 일치하는 상품 목록을 받는다.
  조건을 주지 않으면 모든 상품을 반환한다.
  """
  product_list(
    """주어진 기본 키를 가지는 상품"""
    id_list: [ID!]

    """주어진 문자열을 상품명에 포함한 상품"""
    name_icontains: String

    """skip 개수"""
    skip_count: Int

    """limit 개수 (default: 10)"""
    limit_count: Int

    """정렬 조건"""
    order: ProductOrderType
  ): ProductList!
}

"""createProductList의 건별 입력"""
input CreateProductInput {
  """상품명"""
  name: String!

  """판매가"""
  price: Int!
}

"""createProductList의 입력"""
input CreateProductListInput {
  item_list: [CreateProductInput!]!
}

"""publishProduct의 입력"""
input PublishProductInput {
  """상품 ID"""
  id: ID!
}

type Mutation {
  """상품목록을 생성한다"""
  createProductList(input: CreateProductListInput!): ProductList!

  """
  상품을 출시한다
  [error_code]
  - product_not_found: 출시할 상품이 없습니다
  """
  publishProduct(input: PublishProductInput!): Boolean!
}
```
