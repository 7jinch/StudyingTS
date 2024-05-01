/**
 * 함수 타입 표현식(function type expression)
 */
// 함수의 타입을 정의하는 기존의 방법
// const add = (a: number, b: number): number => a + b;

// 함수 타입 표현식이라는 별칭을 활용해서도 함수의 타입을 정의할 수 있음
// 화살표 함수를 만들 때처럼 타입을 정의하면 됨
type Operation = (a: number, b: number) => number;

// 함수 타입 표현식 적용
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 아래처럼 타입 별칭 없이 그냥 바로 사용해도 됨
// const add: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니쳐(콜 시그니쳐)
 */
// 함수 표현식과 비슷하게 정의하는데 얘는 객체처럼 생김(함수도 객체이기 때문)
type Operation2 = {
  (a: number, b: number): number; // 반환 타입은 화살표(=>)가 아니라 콜론(:)으로 해 줌
};

// 호출 시그니쳐 적용
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
