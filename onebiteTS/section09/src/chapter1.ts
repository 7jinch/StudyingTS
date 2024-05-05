/**
 * 조건부 타입
 * 삼항연산자를 활용해서 조건에 따라서 타입을 결정하는 문법
 */

// number 타입이 string 타입을 확장받고 있으면 string, 아니면 number 타입이 됨
type A = number extends string ? string : number; // -> type A는 number 타입이 됨

// 객체 타입으로 연습
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};
// ObjA는 슈퍼타입, ObjB는 서브타입

type B = ObjB extends ObjA ? number : string; // type B는 number 타입이 됨

/**
 * 조건부 타입 사례
 * 조건부 타입은 보통 제네릭이랑 같이 사용함
 */

// 만약 타입변수 T가 number 타입을 상속받는 타입이라면(T가 number의 서브타입이라면) string 타입, 아니면 number 타입이 됨
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // -> string 타입이 됨
let varB: StringNumberSwitch<string>; // -> number 타입이 됨

/**
 * 그나마 더 실용적인 사례
 */

// 방법 1
// function removeSpaces(text: string | undefined | null) {
//   if (typeof text === 'string') return text.replaceAll(' ', '');
//   // 첫 번째 인수의 문자열을 두 번째 인수의 문자열로 바꿈
//   else return undefined;
// }

// let result = removeSpaces("hi i'm winterlood") as string; // 타입 단언 사용하기
// result.toUpperCase();

// 방법 2
// function removeSpaces<T>(text: T): T extends string ? string : undefined {
//   if (typeof text === 'string') return text.replaceAll(' ', '') as any;
//   else return undefined as any;
// }

// let result = removeSpaces("hi i'm winterlood"); // let result: string
// result.toUpperCase();

// let result2 = removeSpaces(undefined); // let result2: undefined

// 방법 3: 함수 오버로딩
function removeSpaces<T>(text: T): T extends string ? string : undefined; // 오버로드 시그니쳐

// 어차피 오버로드 시그니쳐를 따르기 때문에 타입 변수도 다 지워도 됨
function removeSpaces(text: any) {
  // 이제 구현 시그니쳐 내부에서 조건부 타입의 결과를 추론할수 있게 됨
  if (typeof text === 'string')
    // return null; // string을 반환하지 않으면 에러 방생
    return text.replaceAll(' ', ''); // TS에서 string 반환하는 것을 알게 됨
  else return undefined;
}

let result = removeSpaces("hi i'm winterlood"); // let result: string
result.toUpperCase();

let result2 = removeSpaces(undefined); // let result2: undefined
