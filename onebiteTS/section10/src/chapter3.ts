/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 유틸리티 타입
 */

// Exclude 유틸리티 타입 만들어보기: 분산적인 조건부 타입을 활용함
type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// Exclude<string, boolean> -> string |
// Exclude<boolean, boolean> -> never

// 3단계
// string | never -> string

type A = Exclude<string | boolean, boolean>; // type A = string

/**
 * Extract<T, U>
 * -> T에서  U를 추출하는 타입
 */

// Extract 유틸리티 타입 만들어보기: 분산적인 조건부 타입을 활용함
type Extract<T, U> = T extends U ? T : never;
// 1단계
// Extract<string, boolean> |
// Extract<boolean, boolean>

// 2단계
// Extract<string, boolean> -> never |
// Extract<boolean, boolean> -> boolean

// 3단계
// never | boolean -> boolean

type B = Extract<string | boolean, boolean>; // type B = boolean

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

function funcA() {
  return 'hello';
}

function funcB() {
  return 10;
}

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
// typeof funcA의 타입을 추론해서 타입변수 T에 전달(() => string으로 전달됨)
// () => string과 (...args: any) => infer R이 참이 되는 R을 추론(매개변수는 고려하지 않음)
// R은 string이 됨

type ReturnA = ReturnType<typeof funcA>; // type ReturnA = string
type ReturnB = ReturnType<typeof funcB>; // type ReturnB = number
