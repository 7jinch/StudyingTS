// 배열: 2가지 방법이 있음
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'world!'];

let boolArr: Array<boolean> = [true, false, true]; // <>: 제네릭 방식이라고 함

// 배열에 들어가는 요소들의 타입이 다양할 경우
let nultiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하기
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플: 자바스크립트에는 없고 타입스크립트에만 있는 타입임
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];

// 튜플을 사용하는 경우
const users: [string, number][] = [
  ['kim', 1],
  ['lee', 2],
  ['park', 3],
  ['choi', 4],
  // [5, 'choi'], // 오류 발생
];
