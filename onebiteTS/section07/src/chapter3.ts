/**
 * map 메서드
 */

// JS에서의 map 메서드
const arr = [1, 2, 3];
// const newArr = arr.map((a) => a * 2);
// 메서드 보기: command를 누른 채로 메서드 클릭

/**
 * map 메서드의 타입을 직접 구현해보기
 */
// 배열의 map 메서드의 타입은 이미 선언되어 있기 때문에 따로 map 메서드를 정의해 줘야 함
// 2개의 매개변수를 받음
// 콜백함수의 타입은 함수 타입 표현식으로 unknown을 반환하는 타입으로 정의
// 29번 라인의 코드로 설명
// 1. arr에는 string 배열 타입임
// 2. 인수로 준 콜백 함수의 반환값은 parseInt()메서드 때문에 number map 메서드의 매개변수의 콜백함수의 반환값의 타입변수 U도 number 타입이 됨
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

console.log(map(arr, (item) => item * 2)); // [ 2, 4, 6 ]
console.log(map(['hi', 'hello'], (item) => item.toUpperCase())); // [ 'HI', 'HELLO' ]
console.log(map(['hi', 'hello'], (item) => parseInt(item))); // [ NaN, NaN ]

/**
 * forEach 메서드
 */
const arr2 = [1, 2, 3];
// arr.forEach((item) => console.log(item));
// forEach메서드는 반환값은 없음

// 콜백함수의 반환값은 void(forEach메서드에서는 반환값이 없기 때문에)
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (item) => {
  console.log(item.toFixed());
});

// forEach(['1', 2, true], (item) => {
//   console.log(item.toFixed());
//   // 'string | number | boolean' 형식에 'toFixed' 속성이 없습니다.
//   // 'string' 형식에 'toFixed' 속성이 없습니다.ts(2339)
// });

forEach(['1', 2, true], (item) => {
  console.log(item);
});
