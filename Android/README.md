

# Code layout

- kotlin, java 모두 아래와 같은 규약을 따릅니다.
- 코드의 탭, 띄어쓰기, 들여쓰기 등 코드의 레이아웃, 스타일은 Android Studio의 기본 설정을 따릅니다.

## 탭 & 들여쓰기

- 탭은 4개의 space를 사용합니다.
- 들여쓰기는 4개의 space를 사용합니다.

## 띄어쓰기

- `if, for, while, catch, when` 등 제어문, 반복문은 ***한 칸 띄어 괄호를 작성합니다.***

    ```kotlin
    // Bad
    if(true)

    // Good
    if (true)
    ```

- `=, +=, -=` 등 값을 할당하는 연산자는 ***좌, 우로 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    val age: Int=30

    // Good
    val age: Int = 30

    // Bad
    count+=1

    // Good
    count += 1
    ```

- `&&, ||` 등 논리 연산자는 ***좌, 우로 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    if (isValid&& count > 10)

    // Good
    if (isValid && count > 10)
    ```

- `==, !=` 등 동등성 비교 연산자는 ***좌, 우로 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    if (count== 1)

    // Good
    if (count == 1)
    ```

- `>, <, >=` 등 관계 연산자는 ***좌, 우로 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    val isVaild: Boolean = count>=1
    ****
    // Good
    val isVaild: Boolean = count >= 1
    ```

- `+, -, *, /,  %` 의 사칙 연산자는 ***좌, 우로 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    var sum = count+1

    // Good
    var sum = count + 1
    ```

- `!, ++, --` 등 단항 연산자는 띄어 쓰기를 ***사용하지 않습니다.***

    ```kotlin
    // Bad
    if (! isValid)

    // Good
    if (!isVaild)

    // Bad
    count ++

    // Good
    count++
    ```

- `..` 등 범위 연산자는 띄어 쓰기를 ***사용하지 않습니다.***

    ```kotlin
    // Bad
    for (idx in 1 .. 10)

    // Good
    for (idx in 1..10)
    ```

- `,` 의 ***앞은 띄어 쓰기를 사용하지 않으며***,  ***뒤는 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    fun removeMyGoods(origin: String,goodsUrl: String?)

    // Good
    fun removeMyGoods(origin: String, goodsUrl: String?)
    ```

- `:` 가 변수, 함수 선언에 사용될 경우 ***colon 앞은 띄어쓰지 않고***, ***colon 뒤는 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    val bookmark : Boolean

    // Good
    val bookmark: Boolean

    // Bad
    fun removeMyGoods() : String

    // Good
    fun removeMyGoods(): String
    ```

- `→` 를 함수형 타입, 람다식, when 절에서 사용할 경우 ***앞, 뒤를 한 칸 띄어 작성합니다.***

    ```kotlin
    // Bad
    val body : (String)->Unit

    // Good
    val body : (String) -> Unit

    // Bad
    val observer = Observer { name->
    }

    // Good
    val observer = Observer { name ->
    }
    ```

## 줄 바꿈

- 한 줄에 150 자를 넘지 않게 코드를 작성합니다. (hard wrap : ***150***)

### class

- `class` 의 생성자 `parameter` 는 가독성을 판단하여 한 줄 or 줄 바꿈 하여 작성합니다.

```kotlin
// Good : 한 줄 작성이 가독성을 해치지 않음
class Person(id: Long, name: String, surname: String): Human(id, name){
	....
}

// Good : hard wrap 에 걸리지는 않았지만 가독성을 위해 줄바꿈 한 case
class Person(
	id: Long,
	name: String,
	surname: String
): Human(id, name) {
	...
}
```

### interface

- 복수 `interface`는 가독성을 판단하여 한 줄 or 줄 바꿈 하여 작성합니다.

```kotlin
// Good 
class SimilarGoodsViewHolder(binding: ViewDataBinding) : DataBindingViewHolder<SimilarGoodsItemModel>(binding), GoodsViewTracker.IViewHolder {
	...
}

// Good
class SimilarGoodsViewHolder(binding: ViewDataBinding) :
    DataBindingViewHolder<SimilarGoodsItemModel>(binding), 
	GoodsViewTracker.IViewHolder,
    KoinComponent 
{
	...
}
```

### method

- 복수의  `parameter` 는 가독성을 판단하여 한 줄 or 줄 바꿈 하여 작성합니다.

```kotlin
// Good 
fun sendMessage(name: String, age: Int, id: String, contents: String): Boolean {
	.....
}

// Good
fun sendMessage(
	name: String, 
	age: Int, 
	id: String, 
	contents: String
): Boolean {
	.....
}
```

### 조건문

- 조건문의 조건이 2개 이상인 경우, 가독성을 판단하여 한 줄 or 줄 바꿈 하여 작성합니다.

```kotlin
// Good
if (activeActivity is MainActivity && !activeActivity.isFinishing) {
	...
}

// Good
if (activeActivity is MainActivity 
		&& !activeActivity.isFinishing 
		&& !isFromDeepLink) {
	...
}
```

### Data Class

- `data class` 의 생성자 `property` 가 3개 이상인 경우, 가독성을 판단하여 필요 시 줄 바꿈 합니다.
- 줄 바꿈시  `property`  간에는 개행 하지 않습니다.

```kotlin
// Bad
data class Person(val name: String, val age: Int, address: String)

// Bad
data class Person(

	val name: String,

	val age: Int,

	val address: String

)

// Good
data class Person(
	val name: String,
	val age: Int,
	val address: String
)
```

- 체이닝 메소드의 경우 첫번째 메소드 호출 이후  `.` , `?.` 앞에서 개행합니다.
    - 150자 이상인 경우 첫번째 메소드부터 개행 합니다.
    - 람다를 호출하는 메소드의 경우  `}` 이후 메소드 호출합니다.
    - 람다의 표현이 짧고, 가독성에 문제가 없는 경우, 개행 여부는 개발자의 취향에 따릅니다.

    ```kotlin
    // Bad
    shopService.isRequiredListUpdatedProcessInBrowsedGoods.filter { ..... }.firstOrNull()?.subscribe({}, {})

    // Good
    shopService.isRequiredListUpdatedProcessInBrowsedGoods.filter { 
    		..... 
    	}.firstOrNull()
    	?.subscribe({}, {})

    // Good : 표현식이 짦아 가독성을 해치지 않는 경우
    shopService.isRequiredListUpdatedProcessInBrowsedGoods.filter { it == true }
    ```

- `class` , `method` , `property` 에서 `annotation` 선언 시 개행합니다.

    ```kotlin
    // Bad
    data class MembershipDataResponse(
    	@SerializedName("getMembershipOperationStatus") val isOperationStatus: Boolean,
    	@SerializedName("getUserMembership")  val info: MembershipInfoResponse
    )

    // Good
    data class MembershipDataResponse(
    	@SerializedName("getMembershipOperationStatus") 
    	val isOperationStatus: Boolean,
    	@SerializedName("getUserMembership")  
    	val info: MembershipInfoResponse
    )
    ```

# 네이밍

- Java의 네이밍 방식에 따라 `CamelCase`로 작성합니다.
- 지그재그에서 주로 사용 하는 [지그재그 용어](https://www.notion.so/9d86070a3609459bb54be06b647ad8ec) 를 참고하여 활용합니다.

    

## Package

- 모든 패키지의 이름은 소문자로 작성합니다.
- 두 개 이상의 명사가 결합된 패키지의 경우 `_` 를 사용하여 작성합니다.

    ```kotlin
    // Bad
    com.zigzag.goods.simiargoods

    // Good
    com.zigzag.Goods.similar_goods

    ```

## File

- `.kt` 파일에 한 개의 class 만 존재하는 경우 파일명과 클래스 명이 같아야 합니다.
- `.kt` 파일에 두 개 이상의 class가 존재하는 경우
    - 정의된 class의 도메인 등을 구체적으로 묘사하는 이름으로 작성합니다.
    - 따라서, `Utils` 과 같은 이름은 지양합니다.

## Class & Interface

- `UpperCamelCase`에 따라 이름을 작성합니다.
- 머리 글자 축약어의 대, 소문자는 무시하며 철저히 `CamelCase`를 따릅니다.

    ```kotlin
    // Bad
    class IOExtensions

    // Good
    class IoExtensions
    ```

- 단, presentation layer에서 사용하는 모델의 경우 ***UIModel*** `postfix`를 허용합니다.

    ```kotlin
    // Bad
    class CouponUiModel

    // Good
    class CouponUIModel
    ```

## 함수

- `lowerCamelCase`에 따라 이름을 작성합니다.
- 동사로 시작하며, 기대 동작을 표현하도록 작성합니다.

    ```kotlin
    // Bad
    fun messageSend()

    // Good
    fun sendMessage()
    ```

- return type이 `Boolean` 인 경우 아래의 `prefix`를 사용하여 작성합니다.
    - ***is*** : 일반적인 경우
    - ***can / should*** : 가능 여부
    - ***has*** : 포함 여부

    ```kotlin
    fun isVaild(): Boolean

    fun canScroll(): Boolean

    fun shouldAbort(): Boolean

    fun hasString(param: String): Boolean 
    ```

## 변수

- `lowerCamelCase`에 따라 이름을 작성합니다.
- `collection` 변수는 서버와 컨벤션 통일을 원칙으로 합니다.
    - `list` 형식의 경우 ***<Name> + List*** 의 형식으로 합니다.

    ```kotlin
    // Bad
    val goods = mutableListOf()

    // Goods
    val goodsList = mutableListOf()
    ```

- `Boolean` 변수는 경우 아래의 `prefix`를 사용해 작성합니다.
    - ***is*** : 일반적인 경우
    - ***can / should***: 가능 여부
    - ***has*** : 포함 여부

    ```kotlin
    var isVaild = true

    var canScroll = false

    var shouldAbort = false

    var hasContents: Boolean = false
    	get() = something in items
    ```

- backing property의 경우 `private set` 을 사용합니다.

    ```kotlin
    // Bad
    private val _elements = mutableListOf<Element>()
    val elements: List<Element>
    	get() = _elements

    // Good
    var elements: List<Element>
    	private set
    ```

## 상수

- `UPPER_SNAKE_CASE`에 따라 이름을 작성합니다.

    ```kotlin
    const val MAX_COUNT = 8

    val USER_NAME = "이치탕"
    ```

# Resource

### layout

- 공통 컴포넌트의 경우 ***\<prefix\>_\<where\>*** 형태로 작성합니다.
    - ***\<prefix\>***
        - ***widget_*** : 공통으로 사용하는 CustomView, Widget, View 등을 의미합니다.
        - ***component_*** : Server Driven 형태의 View, Widget  혹은 디자인 시스템 형태의 공통 레이아웃을 의미합니다.

    ```kotlin
    // Bad
    view_ux_item_goods_card

    // Good
    component_goods_card_item
    ```

- 공통 컴포넌트를 제외한 경우 ***\<where\>_\<suffix\>*** 형태로 작성합니다.
    - ***\<suffix\>***
        - _***activity :*** Activity 에서 사용하는 layout
        - _***fragment*** : Fragment에서 사용하는 layout
        - _***dialog*** : Dialog에서 사용하는 layout
        - _***item*** : RecyclerView의 ViewHolder에 사용하는 layout
        - _***view*** : CustomView에서 사용하는 layout
        - _***layout*** : <include> 로 재사용 되는 공통의 layout
        - ***_toolbar***
        - ***_divider***

    ```kotlin
    // Bad
    activity_main.xml

    // Good
    main_activity.xml
    ```

### id

- ***\<prefix\> + \<description\>*** 의 형태로 작성합니다.
- `id`는 kotlin-extension 을 고려하여 `lowerCamelCase`로 작성합니다.
- ***\<prefix\>*** 는 view의 축약어를 사용합니다.
    - ***tv*** : TextView
    - ***bt*** : Button
    - ***ib*** : ImageButton
    - ***et*** : EditText
    - ***iv*** : ImageView
    - ***rv*** : RecyclerView
    - ***cb*** : CheckBox
    - ***pb*** : ProgressBar
    - ***cv*** : CustomView
    - ***layout*** : <include> 로 재사용 되는 공통의 layout or ViewGroup

    ```xml
    // Bad
    <TextView
    	android:id="@+id/toolbar_count" />

    // Good
    <TextView
    	android:id="@+id/tvToolbarCount" />
    ```

### drawable

- 기존에 정의된 디자인 시스템 협업 가이드를 따릅니다.

    [디자인 시스템 협업 가이드](https://www.notion.so/be112ca856034cc4b75e89d8fcbade19)

### string

- ***\<where\>_\<description\>*** 형태로 작성합니다.
- 개행이 필요한 경우 `\n` 을 문장의 뒤에 작성합니다.

    ```xml
    // Bad
    <string name="my_goods_edit_tag_empty_message">폴더를 만들면 쌓여있는 상품들을\n내 맘대로 나누어 보관할 수 있어요.</string>

    // Good
    <string name="my_goods_edit_tag_empty_message">
    			폴더를 만들면 쌓여있는 상품들을\n
    			내 맘대로 나누어 보관할 수 있어요.</string>
    ```

- 공통으로 사용하는 `string` 의 name은 경우 일반적인 형태의 명사 or 동사로 작성합니다.

    ```xml
    // Bad
    <string name="common_done">완료</string>

    // Good
    <string name="done">완료</string>
    ```

- 주석을 사용하여 사용 하는 곳을 구분하여 줍니다.

    ```xml
    <!-- Common -->
    <string name="common_done">완료</string>

    <!-- MyPage -->
    <string name="my_page_information">지그재그는 ...</string
    ```

# 코딩 스타일

## Brace

- 한 줄 처리 가능한 조건문의 경우, 괄호를 작성합니다.

    ```kotlin
    // Bad
    if (variable != null) return "bad"
    else return "not good"

    // Good
    if (variable != null) {
    	return "good"
    } else {
    	return "very good"
    }
    ```

## 타입 추론

- 변수의 선언과 초기화가 동시에  발생하는 경우 Type을 생략 할 수 있습니다.

    ```kotlin
    // Good
    val name = "이치탕"
    var height = 182

    ```

- 함수의 경우 반드시 return type을 표기합니다.

    ```kotlin
    // Bad
    fun methodA() = methodB()

    // Good
    fun methodA(): String = methodB()
    ```

## Model

### Domain Layer Model

- Domain Model 에 종속적인 Model은 nested 형태로 정의합니다.

    ```kotlin
    data class Shop (
    	...
    	shopState: ShopState
    ) {
    	data class ShopState (
    		...
    	)
    }
    ```

- Model 이 general 하게 사용된다면 별도의 파일로 분리합니다.

    ```kotlin
    // Shop.kt
    data class Shop(
    	...
    )

    // ShopState.kt
    data class ShopState(
    	...
    )
    ```

- Model의 종속성이 모호한 경우, Nested 형태로 정의하고 추후 사용처가 늘어나면 분리합니다.

### Presentation Layer Model

- Presentation Layer Model 의 postfix는 `UIModel`로 한다. ***(CamelCase 는 무시합니다.)***

    ```kotlin
    // Bad
    data class CouponItemModel(
    	...
    )

    // Good
    data class CouponUIModel(
    	...
    )
    ```

## Activity

- 일반적으로 `ZigZagBaseActivity` 를 상속합니다.

### ZigZagBaseActivity

- ~~일반적인 `toolbar` + `contents` 형태에는 `base_layout` 을 활용 가능합니다.~~ (deprecated)
    - ~~`ZigZagBaseActivity.useBaseLayout` 의 초기화를 통해 활성화 할 수 있습니다.~~
    - ~~`toolbar` 의 `title` , `count`, `info_icon` 에 대한 처리가 가능합니다.~~
- `rx` 의 `disposable` 을 처리하는 공통 로직을 포함합니다.
    - `CompositeDisposable` 을 통해 `disposable` 을 관리하며 `onDestroy()` 에서 `dispose` 합니다
- 네비게이션 로그를 위한 `NavigationLoggable` 이 구현되어 있습니다.
    - 네비게이션 로그를 작성하려면 자식 `activity` 에서 `getSceneName()` , `getLogParameters()` 를 `override` 하여 작성합니다.
    - 네비게이션 로그는 `onResume()` 마다 전송합니다.

### 정렬

- `property` 선언 및 초기화 구문은 최 상단에 위치합니다.
- `onCreate ~ onDestroy` - `public method` - `private method` 순서로 작성합니다.
    - 사용하지 않는 생명주기 메소드는 생략 가능합니다.
- 변수는 `public method` - `private method` 순으로 작성합니다.
- `ZigZagBaseActivity` 의 `getSceneName()`, `getLogParameters()`는 하단에 위치합니다.
- `companion object` 는 최 상단에 위치합니다.


### 초기화

- `view` 의 초기화 → `observer` 등록 순으로 초기화를 진행합니다.

## Fragment

- 일반적으로 `ZigZagSupportFragment` 를 상속합니다.

### ZigZagSupportFragment

- `rx` 의 `disposable` 을 처리하는 공통 로직을 포함합니다.
    - `CompositeDisposable` 을 통해 `disposable` 을 관리하며 `onDestroy()` 에서 `dispose` 합니다
- 네비게이션 로그를 위한 `NavigationLoggable` 이 구현되어 있습니다.
    - 네비게이션 로그를 작성하려면 자식 `activity` 에서 `getSceneName()` , `getLogParameters()` 를 `override` 하여 작성합니다.
    - 로그는 `onResume()` 마다 전송합니다.

### 정렬

- `property` 선언 및 초기화 구문은 최 상단에 위치합니다.
- `onAttach ~ onDetach` - `public method` - `private method` 순서로 작성합니다.
    - 사용하지 않는 생명주기 메소드는 생략 가능합니다.
- 변수는 `public method` - `private method` 순으로 작성합니다.
- `ZigZagSupportFragment` 의 `getSceneName()`, `getLogParameters()` 는 class 하단에 위치합니다.
- `companion object` 는 최 상단에 위치합니다.

### 생성

- `companion object` 내부의 `factory method` 를 사용하여 Fragment를 생성합니다.
- `java` 에서 사용하는 경우에만 `@JvmStatic` 선언을 추가합니다.

```kotlin
companion object {

	@JvmStatic 
	fun newInstance(tab: Page.Tab) = RecommendFragment()

}
```

### 초기화

- `view` 의 초기화 → `observer` 등록 순으로 초기화를 진행합니다.

## ViewModel

- 일반적으로 `ViewModel` 을 상속하여 구현합니다.
- `Rx` 를 활용하는 경우 `DisposableViewModel` 을 상속하여 구현합니다.
- `extra` 로 전달되는 데이터가 불변한다면  `ViewModel` 의 생성자 parameter로 초기화 합니다.
- `extra` 로 전달되는 데이터가 변한다면 ViewModel이 아닌 View에서 초기화 합니다.

```kotlin
// SimilarGoodsViewModel.kt
class SimilarGoodsViewModel(private val originGoods: SearchedGoods?): ViewModel()

// SimilarGoodsActivity.kt
private val viewModel: SimilarGoodsViewModel by viewModel {
	val originGoods = intent.getSerializableExtra(EXTRA_SEARCHED_GODDS) as? SearchedGoods
	parametersOf(originGoods)
}
```

- `ViewModel` 에 정의된 `property` 에 직접 접근하는 것은 지양합니다.
    - `private set` 을 활용하여, 직접 접근을 ***지양*** 합니다.

```kotlin
// Bad
class SampleViewModel: ViewModel() {
	var isChecked = false
}

// Good
class SampleViewModel: ViewModel() {
	var isChecked = false
		private set
}
```

- `ViewModel` 이 단독으로 사용 되는 경우 변수 명을 `viewModel` 로 합니다.
- `DataBinding` 에서 `ViewModel` 이 단독으로 사용 되는 경우 변수 명을 `vm` 으로 합니다.

## LiveData

- `LiveData` 변수 명은 `suffix` 없이 일반적이 변수의 형태로 명명합니다.
- `LiveData`는 `backing property` 의 형식으로 작성합니다.
- `set` 을 위한 `LiveData` 는 `private` 으로 선언하며 변수명 앞에 `_` 을 붙여 구분합니다.
- `get` 을 위한 `LiveData` 는 `: LiveData<Type>` 로 타입을 명시하며 `_` 을 제외하고 `set` 과 같은 이름을 사용합니다.

```kotlin
// Bad
private val goodsItems = MutableLiveData<List<>>()
val liveData = goodsItems

// Good
private val _goodsItemsLiveData = MutableLiveData<List<>>()
val goodsItemsLiveData: LiveData<List<>> = _goodsItemsLiveData
```

- `LiveData` 의 변수 명은 구체적으로 작성합니다.
    - 단,  ViewModel 에서 `itemModelList`  ← 단독인 경우만 사용하자!

```kotlin
// Bad, AvailableCouponsViewModel
val liveData: LiveData<StateResult<List<CouponsItemModel>>> = couponsResult

// Good
val couponItemModels: LiveData<StateResult<List<CouponsItemModel>>> = couponsResult
```

### SingleLiveEvent

- 일회성 구독이 필요한 경우 `SingleLiveEvent` 를 사용합니다.

```kotlin
// Bad
val _toastMessageLiveData = MutableLiveData<String>()

// Good
val _toastMessageLiveData = SingleLiveEvent<String>()
```

- `SingleLiveEvent` 의 타입이 `Unit` 인 경우 `call()` 을 사용합니다.

```kotlin
val _toggleButtonLiveData = SingleLiveEvent<Unit>()

// Bad
_toggleButtonLiveData.value = Unit

// Good
_toggleButtonLiveData.call()
```

### StateLiveData

- 비동기 동작의 성공, 실패, 로딩 여부가 필요한 경우 사용합니다.
    - 주로 api 호출, paging 처리에 활용 중 입니다.
- 기본적으로 fetch 및 fetchMore  Dispatcher를 io로 설정하고 있기  때문에 별도의 Dispatcher 설정 없이 사용 가능합니다.

## Extensions

- `view` 와 관련된 `extension`은 `com.croquis.zigzag.presentation.extension` 에 위치합니다.
- 그 외 `extension`은 `com.croquis.zigzag.extension` 에 위치합니다.
- `extension` 파일의 이름은 ***<Origin Class Name> + Extensions*** 로 합니다

```kotlin
IntExtensions.kt

ActivityExtensions.kt
```

## Data Class

- ***areItemsTheSame***
    - `unique value` 의 비교를 ***지향*** 하며, 객체 단위 비교는 ***지양*** 합니다.

    ```kotlin
    if (this is TextTitleItemModel && other is TextTitleItemModel) {
              this.data.title == other.data.title

    } else if (this is GoodsCardItemModel && other is GoodsCardItemModel) {
              this.data.productUrl == other.data.productUrl
    }
    ```

    - `unique value` 값이 존재하지 않는 경우, `itemPosition`으로 비교한다.

    ```kotlin
    if (other is RecommendItemModel) {
        this.itemPosition == other.itemPosition
    }
    ```

- ***areContentsTheSame***
    - 객체 단위의 동일성 여부를 판단합니다.
    - 객체의 변경 가능성이 있는 필드의 비교를 ***지향*** 합니다.

    ```kotlin
    // Bad
    fun areContentsTheSame(old: PurchaseAgeUIModel, new: PurchaseAgeUIModel): Boolean {
       return old == new
    }

    // Good
    fun areContentsTheSame(old: PurchaseAgeUIModel, new: PurchaseAgeUIModel): Boolean {
       return old.name == new.name
    				&& old.count == new.count
    				&& old.isSelected == new.isSelected
    }
    ```

## Response Model

- ResponseModel 의 이름은 ***<ModelName> + DataResponse*** 로 합니다.
- ResponseModel 에 종속적인 Model은 nested 형태로 정의합니다.

```kotlin
// good
class ShopDataResponse {
		@SerializeName("shops")
		val shops: Shops
		@SerializeName("has_filter")
		val shops: HasFilter

		class Shops {
				...
		}

		class HasFilter {
				...
		}
}
```

## DataBinding

- 특정 feature 에서 사용하는 `BindingAdpater` 의 경우, feature 별로 개별의 file에 BindingAdapter를 작성합니다.
- file의 이름은 ***Binding + \<featureName\> + Adapter*** 의 형태로 작성합니다.

## Collection

### List

- `List` 불변성 여부에 따라 `mutableListOf()` , `listOf()` 등 을 사용합니다.
- `index` 로 특정 요소에 접근 할 때는 `get()` 대신 `[]` 을 사용합니다.

```kotlin
// Bad
val goodsItems = ArrayList<Goods>()

// Good
val goodsItems = listOf<Goods>()
```

```kotlin
// Bad
val goods = goodsItems.get(idx)

// Good
val goods = goodsItems[idx]
```


### Map

- `Map` 불변성 여부에 따라 `mutableMapOf()` , `mapOf()` 등 을 사용합니다.
- `to` 중위 호출을 사용하여 `Pair` 의 사용을 대체 합니다. (Map 에서의 사용에 한정)

```kotlin
// Bad
val goodsMap = mapOf(Pair(1, "상협"), Pair(2, "이치탕"))

// Good
val goodsMap = mapOf(1 to "상협", 2 to "이치탕")
```

### Set

- Set 불변성 여부에 따라 `mutableSetOf()` , `mapOf()` 등 을 사용합니다.
- `union` , `intersect` , `subtract` 등의 중위 표현을 활용합니다.

```kotlin
val numbers = setOf("one", "two", "three")

println(numbers union setOf("four", "five"))
// result = [one, two, three, four, five]

println(numbers intersect setOf("two", "one"))
// result = [one, two]

println(numbers subtract setOf("three", "four"))
// result = [one, two]
```

## 코루틴

- 코루틴의 최상위 루트를 Main Dispatcher를 활용해야 순차적인 코드 흐름을 볼 수 있어서 가독성이 높다.

       (Context swithching이 여러번 일어남. 물론 코루틴은 Context switching처럼 무겁지 않음)

```kotlin
//Bad 
val scope = CoroutineScope(Dispatcher.IO) 

fun loadShops() = scope.launch {
	 withContext(Dispatcher.Main) { loadingStart() // 로딩뷰 시작}
	 apiShops() // background operation........
   withContext(Dispatch.Main) { loadingEnd() // 로딩뷰 완료}	 
}

//Good 
val scope = CorountineScope(Dispatcher.Main)

fun loadShops() = scope.launch {
		loadingStart() // 로딩뷰 시작
		withContext(Dispatcher.IO) { apiShops()}
		loadingEnd() // 로딩뷰 완료
}
```

- Suspend Function 생성 시 Dispatcher를 MainDispatcher로 지정하자.(한정된 Dispatcher에서 동작 X)
1. 최상위 루트를 Main Dispatcher로 지정했기 때문에 Suspend Function 내부에서 별도의 Dispatcher를 지정해서 사용하도록 합니다.
2. 만약 MainDispatcher가 아닐 경우 호출하는 Dispatcherd에 맞게 지정해야 하나 다른 스코프에서 호출 시 에러가 발생될 소지가 높습니다.

```kotlin
//Bad (호출한 Dispatcher가 메인쓰레드가 아닌 경우 에러발생!)
suspend fun shopList(): StateResult {
	 	loadingStart() // 로딩뷰 시작
	  val value = withContext(Dispatcher.IO) { apiShops()}
		loadingEnd() // 로딩뷰 완료

	  return value
}

//Good 
suspend fun shopList(): StateResult = withContext(Dispatcher.Main){
	 	loadingStart() // 로딩뷰 시작
	  val value = withContext(Dispatcher.IO) { apiShops()}
		loadingEnd() // 로딩뷰 완료

		return value
}

```