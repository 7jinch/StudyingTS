/**
 * 분산적인 조건부 타입
 * 조건부 타입을 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작하도록 업그레이드
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 일반적인 조건부 타입
let a: StringNumberSwitch<number>; // let a: string
let b: StringNumberSwitch<string>; // let b: number

// 분산적인 조건부 타입
let c: StringNumberSwitch<number | string>; // let c: string | number
// number | string 유니온 타입은 합집합이라서 number 타입의 슈퍼타입임 -> 삼항연산자에서는 거짓임 -> number가 나와야 하는데 실제 결과는 유니온 타입이 나옴
// 조건부 타입에서 타입변수로 유니온 타입을 할당하면 일반적으로 동작하지 않고 분산적인 조건부타입으로 업그레이드됨
// StringNumberSwitch<number>;
// StringNumberSwitch<string>;
// 이런 식으로 한 번은 number, 한 번은 string으로 모든 유니온 타입이 분리되서 전달되고 결과도 유니온으로 묶여서 나옴

let d: StringNumberSwitch<boolean | number | string>; // let d: string | number
// 1단계: 분리됨
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// StringNumberSwitch<boolean> -> number |
// StringNumberSwitch<number> -> string |
// StringNumberSwitch<string> -> number

// 3단계
// number | string (string | number)

/**
 * 실용적인 예제
 */

// 타입변수 T가 타입변수 U의 서브타입이라면 never, 아니면 T 그대로 반환
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // type A = number | boolean
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// Exclude<number, string> -> 타입변수 T -> number |
// Exclude<string, string> -> never |
// Exclude<boolean, string> -> 타입변수 T -> boolean

// 3단계
// number | never | boolean (합집합으로 만드는데 never는 공집이라서 사라짐)
// -> number | boolean

// -> 특정 유니온 타입으로부터 특정 타입만 제거할 수 있음

/**
 * 실용적인 예제 2
 * 이번에는 위 예제와 반대로 동작하도록 해 보기
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; // type B = string

// 1단게
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// Extract<number, string>  -> never |
// Extract<string, string> -> string |
// Extract<boolean, string> -> never

// 3단계
// never | string | never -> type B = string

/**
 * 만약 분산적인 조건부 타입으로 동작하지 않게 하려면 대괄호를 씌워주면 됨
 */
type strNumSwitch<T> = [T] extends [number] ? string : number;

let e: strNumSwitch<boolean | number | string>; // let e: number
