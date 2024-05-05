/**
 * infer(inference, 추론하다, R을 추론해라)
 * 조건부 타입 내에서 특정 타입만 추론해오는 기능
 */

// 함수의 반환값 타입을 가져와보기
/**
 * 1번
 */
// 매개변수는 없고 반환값은 string인 함수 타입을 정의
// type Func = () => string;

// // 타입변수 T에 들어오는 타입이 함수타입의 서브타입이라면 string, 아니면 never
// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<Func>; // type A = string

/**
 * 2번
 */
// type FuncA = () => string; // 매개변수는 없고 반환값은 string인 함수 타입을 정의
// type FuncB = () => number; // 매개변수는 없고 반환값은 number인 함수 타입을 정의

// // 타입변수 T에 들어오는 타입이 함수타입의 서브타입이라면 string, 아니면 never
// type ReturnType<T> = T extends () => string ? string : never;

// type A = ReturnType<FuncA>; // type A = string
// type B = ReturnType<FuncB>; // 서로소 집합임 -> type B = never
// -> 원래 의도는 반환값 타입을 가져오는 거임

/**
 * 3번
 */
type FuncA = () => string;
type FuncB = () => number;

// 타입변수 T에 들어오는 타입이 함수타입의 서브타입이라면 string, 아니면 never
type ReturnType<T> = T extends () => infer R ? R : never;
// 1. infer R -> 일단 R로 보고 진행 -> `() => string`과 `() => R`로 보고 비교
// 2. R의 타입은 `() => string`과 `() => R`을 참으로 만드는 타입으로 자동 추론됨

type A = ReturnType<FuncA>; // 3. type A = string: R이 string으로 추론되서 이렇게 됨
type B = ReturnType<FuncB>; // 4. type B = number: R이 number로 추론되서 이렇게 됨

type C = ReturnType<number>; // 5. type C = never: R이 any를 포함해서 어떤 타입이 되더라도 `() => R`는 number의 슈퍼타입이 될 수 없음

/**
 * 다른 예제
 */

// 요구사항: 타입변수 T에 제공한 Promise 타입에서 Promise의 결과값의 타입을 가져오기
// 1번째: 타입변수 T는 Promise 타입이여야 함
// type PromiseUnpack<T> = T extends Promise<any> ? any : never;
// 2번째: Promise 타입의 결과값의 타입을 반환함
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // type PromiseA = number
// 1. romise<number> 타입이 Promise<infer R> 타입이 되도록 R 타입을 추론함
// 2. R 타입이 number여야 참이 됨 -> PromiseA 타입은 삼항조건식에서 받은 R 타입(number 타입)이 됨

type PromiseB = PromiseUnpack<Promise<string>>; // type PromiseB = string
// 2. R 타입이 string여야 참이 됨 -> PromiseA 타입은 삼항조건식에서 받은 R 타입(string 타입)이 됨
