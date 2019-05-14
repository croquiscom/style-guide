# 크로키닷컴 Swift 스타일 가이드
*[Swift API Design Guidelines](https://swift.org/documentation/api-design-guidelines/)를 참고합니다.*

## Lint

[SwiftLint](https://github.com/realm/SwiftLint)를 사용해 Lint를 한다.
설정은 [.swiftlint.yml](.swiftlint.yml)를 참고한다.

## 1. 코드 레이아웃

- 들여쓰기에는 4개의 space를 사용합니다.

- 줄바꿈

  - 배열 혹은 딕셔너리의 경우 아래와 같이 줄바꿈합니다.

    ```swift
    let array: [String] = [
    	  "hello",
    	  "world"
    ]
    let dict: [String: String] = [
    	  "dictKey1": "value1",
    	  "dictKey2": "value2"
    ]
    ```

  - 함수를 호출하는 코드에서 파라미터가 두 개 이상인 경우에는 파라미터를 기준으로 줄바꿈합니다.

    ```swift
    someFunctionWithManyArguments(
        firstArgument: "Hello, I am a string",
        secondArgument: resultFromSomeFunction(),
        thirdArgument: someOtherLocalProperty)
    ```

  - `if-let` 구문, `guard-let` 구문은 아래와 같이 줄바꿈하고 한 칸 들여씁니다.

    ```swift
    if let user = self.veryLongFunctionNameWhichReturnsOptionalUser(), 
    	let name = user.veryLongFunctionNameWhichReturnsOptionalName(), 
    	user.gender == .female { 
      // ... 
    }
    ```

  - 종료 할 때의 `guard` 구문은 아래와 같이 줄바꿈합니다.

    ```swift
    guard let error = error else { return }
    ```

- 콜론(:)은 오른쪽에만 공백을 둡니다. (예외: 빈 딕셔너리`[:] `)

  ```swift
  // 좋은 예
  var dict1: [String: String] = [:] 
  var dict2: [String: String] = [
  	  "A": "1",
  	  "B": "2"
  ]
  class PirateViewController: UIViewController { /* ... */ }
  
  // 나쁜 예
  var dict1: [String : String] = [: ] 
  var dict2 :[String:String] = [
  	  "A" : "1",
  	  "B" :"2" 
  ]
  class PirateViewController : UIViewController { /* ... */ }
  ```

- 모듈 임포트는 알파벳 순으로 정렬합니다. 내장 프레임워크를 먼저 임포트하고, 빈 줄로 구분하여 서드파티 프레임워크를 임포트합니다.

  ```swift
  import UIKit
  
  import FLAnimatedImage
  import RxSwift
  import ObjectMapper
  ```

  

## 2. 네이밍

- 파일 명은 `PascalCase` 를 사용합니다.

- 폴더 명은 `snake_case` 를 사용하고, 단수형을 사용합니다.

- 타입은 `PascalCase` 를 사용합니다. (e.g. `struct`, `enum`, `class`, `typedef`)

- 변수, 상수, 함수, enum의 각 case의 이름은 `camelCase` 를 사용합니다.

  - 약어로 시작하는 경우에는 소문자로 표기하고, 그 외의 경우에는 항상 대문자로 표기합니다.

    ```swift
    // 좋은 예
    var imageURL: String = ""
    var shopID: String = ""
    var id: String = ""
    
    // 나쁜 예
    var imageUrl: String = ""
    var shopId: String = ""
    let ID: String = ""
    ```

  - 변수의 이름을 줄여쓰는 것은 지양합니다.

    ```swift
    // 좋은 예
    let position = gestureRecognizer.location(in: goodsCollectionView)
    
    // 나쁜 예
    let p = gestureRecognizer.location(in: mGoodsCollectionView)
    ```

- 의미가 불분명한 이름을 사용하는 것은 지양합니다.

  ```swift
  // 좋은 예
  class RoundAnimatingButton: UIButton { /* ... */ }
  
  // 나쁜 예
  class CustomButton: UIButton { /* ... */ }
  ```

- `Outlet` 변수들은 이름 마지막에 타입 명을 명시해줍니다.

  ```swift
  // 좋은 예
  @IBOutlet weak var submitButton: UIButton!
  @IBOutlet weak var emailTextField: UITextField!
  
  // 나쁜 예
  @IBOutlet weak var submit: UIButton!
  @IBOutlet weak var emailTF: UITextField!
  ```

- `UICollectionViewCell`, `UITableViewCell`의 클래스 이름에서 TableView, CollectionView는 생략합니다.

  ```swift
  // 나쁜 예
  class ConnectionTableViewCell: UITableViewCell { /* ... */ }
  
  // 좋은 예
  class ConnectionCell: UITableViewCell { /* ... */ }
  ```

- 프로토콜

  - 가능성(capability)를 설명하는 프로토콜은 `able` 로 끝나야합니다.

  - 속성을 가지는 프로토콜은 명사 + Type 을 사용합니다.

    ```swift
    // here, the protocol is a capability, and we name it appropriately
    protocol Loggable {
        func logCurrentState()
        /* ... */
    }
    
    protocol ModelType {
        var id: Int { get }
    }
    ```



## 3. 코딩 스타일

### General

- 클래스와 구조체 내부에서 `self.` 는 필수가 아닌 이상 붙이지 않습니다.

- 클로저 내부에서 `self` 는 아래와 같이 사용합니다.

  ```swift
  // 좋은 예
  myFunctionWithEscapingClosure() { [weak self] error -> Void in
      guard let self = self else { return }
      // 한줄 띄기
      self.doSomething()
  }
  
  // 나쁜 예
  myFunctionWithEscapingClosure() { [weak self] error -> Void in
      self?.doSomething()
  }
  ```

- 열거형은 가능한 생략합니다.

  ```swift
  // 좋은 예
  imageView.backgroundColor = .white
  
  // 나쁜 예
  imageView.backgroundColor = UIColor.white
  ```

### 프로토콜

- 프로토콜은 별도의 `Extension` 으로 적용하는 것을 지향합니다.

  ```swift
  // 좋은 예
  class MyViewController: UIViewController {
    // class stuff here
  }
  
  // MARK: - UITableViewDataSource
  extension MyViewController: UITableViewDataSource {
    // table view data source methods
  }
  
  // MARK: - UIScrollViewDelegate
  extension MyViewController: UIScrollViewDelegate {
    // scroll view delegate methods
  }
  
  // 나쁜 예
  class MyViewController: UIViewController, UITableViewDataSource, UIScrollViewDelegate {
    // all methods
  }
  ```

### 클로저

- 파라미터와 리턴 타입이 없는 클로저 정의시에는 `() -> ()` 를 사용합니다.

- 클로저 정의시 파라미터에는 괄호를 사용하지 않습니다.

  ```swift
  // 좋은 예
  { operaion, responseObject in
    // doSomething()
  }
  
  // 나쁜 예
  { (operaion, responseObject) in
    // doSomething()
  }
  ```

-  클로저 정의시 타입 정의는 생략합니다.

  ```swift
  // 좋은 예
  ..., 
  completion: { finished in
    // doSomething()
  }
  
  // 나쁜 예
  ...,
  completion: { (finished: Bool) -> Void in
    // doSomething()
  }
  ```

- 클로저 호출시 또 다른 유일한 클로저를 마지막 파라미터로 받는 경우, 파라미터 이름을 생략합니다.

  ```swift
  // 좋은 예
  UIView.animate(withDuration: 0.5) {
    // doSomething()
  }
  
  // 나쁜 예
  UIView.animate(withDuration: 0.5, animations: { () -> Void in
    // doSomething()
  })
  ```

### 타입

- 타입은 되도록이면 명시합니다.

  ```swift
  // 좋은 예
  var str: String = ""
  var messages: [String] = []
  
  // 나쁜 예
  var str = ""
  var messages = []
  ```

- `Array<T>`와`Dictionary<T: U>` 보다는 `[T]`, `[T: U]`를 사용합니다.

  ```swift
  // 좋은 예
  var messages: [String]?
  var names: [Int: String]?
  
  // 나쁜 예
  var messages: Array<String>?
  var names: Dictionary<Int, String>?
  ```

- 빈 배열과 딕셔너리의 경우, 타입 주석(annotation)을 사용합니다.

  ```swift
  // 좋은 예
  var names: [String] = [] 
  var lookup: [String: Int] = [:]
  
  // 나쁜 예
  var names = [String]()
  var lookup = [String: Int]()
  ```

### 옵셔널

- `viewDidLoad`에서 초기화되는 인스턴스 변수들은 `!` 으로 암시적으로 언래핑된 타입을 사용합니다.

  ```swift
  // 괜찮은 예
  let view = Bundle(for: BrowserCouponCodeBar.self).loadNibNamed(BrowserCouponCodeBar.xibName, owner: self, options: nil)!.first as! UIView
  ```

- 옵셔널 체크는 `if-let` 구문을 사용합니다.

  ```swift
  // 좋은 예
  if let _ = error {
      fatalError()
  }
  
  // 나쁜 예
  if error != nil {
      fatalError()
  }
  ```

  

## 4. 주석

- 주석 사용의 제한은 없으나 불명확한 의도를 가진 주석의 사용은 지양합니다.

  