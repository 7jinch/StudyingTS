/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지를 판단하는 기준
 * 1. 반환값의 타입이 호환되는지
 * 2. 매개변수의 타입이 호환되는지
 */

/**
 * 1. 반환값의 타입이 호환되는지
 */
type A = () => number; // number 타입을 반환하도록 정의
type B = () => 10; // 10이라는 number 리터럴 타입을 반환하도록 정의

let a: A = () => 10;
let b: B = () => 10;

a = b; // 가능: 업캐스팅
// b = a; // 불가능: 다운캐스팅

/**
 * 2. 매개변수의 타입이 호환되는지
 * 2-1. 매개변수의 개수가 같을 경우
 */
type C = (value: number) => void; // number 타입의 매개변수를 받도록 정의
type D = (value: 10) => void; // 10이라는 number 리터럴 타입의 매개변수를 받도록 정의

let c: C = (value) => {};
let d: D = (value) => {};

// 매개변수를 기준으로 함수의 호환성을 판단할 경우에는 반환값을 기준으로 판단할 경우와 반대임
// 매개변수의 업캐스팅은 불가능, 다운캐스팅을 가능
// c = d; // 불가능: 업캐스팅이라서 불가능
d = c; // 가능: 다운캐스팅이라서 가능

// 매개변수에서는 반대인 이유는 매개변수가 객체타입을 사용하는 예시를 보면 됨
type Animal = {
  // 슈퍼 타입
  name: string;
};
type Dog = {
  // 서브 타입
  name: string;
  color: string;
};
// Animal 타입이 조건(프로퍼티)이 더 적기 때문에 슈퍼 타입인 상태임

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 불가능: 업캐스팅이기 때문

// let testFunc = (animal: Animal) => {
//   console.log(animal.name);
//   console.log(animal.color); // animal 타입에는 color라는 프로퍼니가 없기 때문에 에러가 발생함
// };

// 매개변수의 경우 슈퍼 타입에는 없는 프로퍼티를 호출하려고 할 수도 있기 때문에 업캐스팅은 불가능함(다운캐스팅은 가능)

/**
 * 2-2. 매개변수의 개수가 다를 경우
 */
type Func1 = (a: number, b: number) => void; // 매개변수의 개수가 2개
type Func2 = (a: number) => void; // 매개변수의 개수가 1개

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 가능: 매개변수가 더 적은 타입을 더 많은 타입으로 변환
// func2 = func1; // 불가능: 매개변수가 더 많은 타입을 더 적은 타입으로 변환
// 매개변수의 개수가 더 많은 쪽으로 타입 변환하는 건 가능함(매개변수의 타입이 같을 경우에만 가능)
