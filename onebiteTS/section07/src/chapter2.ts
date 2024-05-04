/**
 * 첫 번째 사례
 */

// 매개변수 2개를 받아서 서로 스왑해서 반환하는 함수 정의
// function swap<T>(a: T, b: T) {
//   return [b, a];
// }
// const [a, b] = swap(1, 2); // 여기선 괜찮은데
// const [a, b] = swap('1', 2); // 여기서 오류 발생함: 'number' 형식의 인수는 'string' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
// 첫 번째 인수가 string 타입이라서 swap 함수의 타입변수 T가 string 타입이 됐기 때문에 ts에서는 두 번째 인수도 string으로 들어올 것이라고 예상했지만 number 타입이라서 에러 발생함

function swap<T, U>(a: T, b: U) {
  return [b, a];
}
const [a, b] = swap('1', 2); // 타입변수 T는 string, U는 number

/**
 * 두 번째 사례
 */

// 배열을 받아서 첫 번째 인덱스의 값을 반환하는 함수
// function returnFirstValue<T>(data: T) {
//   return data[0]; // 함수 내부에서는 아직 T의 타입을 모르기 때문에 에러 발생함: '0' 형식의 식을 'unknown' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식이 있습니다.  'unknown' 형식에 '0' 속성이 없습니다.ts(7053)
// }

// T가 어떤 타입인지 몰라서 일단 unknown 타입이지만 배열은 배열이라서 인덱스 접근은 가능해서 에러가 사라짐(튜플이나 객체도 가능)
// function returnFirstValue<T>(data: T[]) {
//   return data[0];
// }

// let arr = returnFirstValue(['1', 2, true]);
// arr은 string | number | boolean의 유니온 타입이 됨
// T도 string | number | boolean의 유니온 타입이 됨
// data 매개변수도 string | number | boolean의 배열 타입이 됨
// 반환값(data[0])도 string | number | boolean의 유니온 타입이 됨

// -> 각 매개변수마다 유니온 타입이 아니라 맞는 타입으로 하려면?
// 저 이상한 문법 해석
// 1. 일단 data의 타입이 튜플([])임
// 2. 첫 번째 요소의 타입은 T임
// 3. 첫 번째 요소 이후 그 다음부터 들어올 요소들의 타입을 알 필요는 없고 몇 개가 들어오는 지도 알 필요 없어서 rest parameter를 쓰듯이 ...unknown[]으로 unknown 타입의 배열이 올 것이라고 알려줌
// 배열의 첫번째 요소의 타입은 T이고 나머지 요소의 타입은 unknown으로 정의한다는 뜻
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let arr = returnFirstValue(['1', 2, true]); // let arr: string

// 배열의 첫번째 요소의 타입은 T이고 나머지 요소의 타입은 U로 정의한다는 뜻
function returnFirstValue2<T, U>(data: [T, ...U[]]) {
  return data[2];
}

// 챗gpt 설명
// 타입스크립트는 함수를 읽을 때 다음과 같은 순서로 작동합니다.
// 매개변수와 반환값 살펴보기: 먼저 함수의 매개변수와 반환값을 살펴봅니다. 여기서는 data라는 하나의 매개변수가 있고, 반환값은 data[2]입니다.
// 매개변수의 타입 분석: data 매개변수의 타입을 분석합니다. 이 함수에서는 튜플 타입인데, 튜플의 첫 번째 요소의 타입이 T이고, 나머지 요소들은 U[]로 나타납니다.
// 제네릭 타입 유추: 함수의 매개변수와 반환값을 통해 제네릭 타입을 유추합니다. 여기서는 T는 튜플의 첫 번째 요소 타입을, U는 나머지 요소들의 타입을 나타냅니다.
// 따라서 함수를 호출할 때 제네릭 타입 매개변수를 명시적으로 지정하지 않아도 TypeScript는 매개변수와 반환값의 타입을 분석하여 제네릭 타입을 유추합니다.

let arr2 = returnFirstValue2(['1', 2, true]); // let arr2: number | boolean
// 두 번째, 세 번째 요소의 타입을 모두 만족하기 위해 최적의 공통 타입인 string | boolean 유니온 타입으로 자동으로 추론함
// (let arr = [1, "2", true]이런 배열은 타입스크립트는 변수 arr의 타입을 (number | string | boolean)[]로 추론함)

/**
 * 세 번째 사례
 */

// 타입변수에 length(타입은 number)라는 프로퍼티를 가진 객체를 상속 -> T라는 타입은 무조건 length 프로퍼티를 가지고 있음
function getLength<T extends { length: number }>(data: T) {
  return data.length; // 그냥 data: T로 하면 'T' 형식에 'length' 속성이 없습니다.ts(2339)면서 에러
}

let var1 = getLength([1, 2, 3]); // data: T[]로 하면 밑의 코드는 배열이 아니라서 에러
let var2 = getLength('12345');
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); // number 타입의 값은 length 프로퍼티가 없기 때문에 잘 막아줌
