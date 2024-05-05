/**
 * keyof 연산자
 * keyof operator
 * 특정 객체의 타입으로부터 프로퍼티의 키들을 string 유니온 타입으로 추출함
 */

// 객체 타입 정의
// interface Person {
//   name: string;
//   age: number;
// }

// key 매개변수의 타입을 string으로 하면
// function getPropertyKey(person: Person, key: string) {
//   return person[key]; // 여기서 에러가 발생함
// }
// 모든 문자열값이 Person 객체의 키라고 볼 수는 없기 때문
// 예를들어 `name2`를 매개변수로 전달하면 key의 타입은 string이라서 문제가 발생하지 않지만 Person 객체 타입에는 `name2`라는 프로퍼티가 없기 때문에 이것을 허용해주면 문제 발생함

// key 매개변수의 타입을 유니온 타입으로 하면
// function getPropertyKey(person: Person, key: 'name' | 'age') { // 객체의 프로퍼티가 많아지면 너무 길어짐
//   return person[key];
// }

// keyof 연산자 활용하기
// Person 객체 타입으로부터 모든 프로퍼티의 키를 유니온 타입으로 추출해줌
// function getPropertyKey(person: Person, key: keyof Person) {
//   // (parameter) key: keyof Person -> `name` | `age` -> 나중에 다른 프로퍼티가 추가되더라도 문제 X
//   return person[key];
// }

// const person: Person = {
//   name: '이정환',
//   age: 27,
// };

// getPropertyKey(person, 'name'); // 이정환

/**
 * keyof 연산자는 typeof 연산자와도 사용할 수 있음
 *
 * typeof 연산자는 특정 변수의 타입을 문자열로 반환하는 연산자이지만
 * TS에서 타입을 정의할 때 사용하면 다르게 동작함
 */

// 타입 별칭
type Person = typeof person;
// TS가 person 객체를 보고 타입을 추론해줌
// 현재 Person 타입
// type Person = {
//   name: string;
//   age: number;
// };

// function getPropertyKey(person: Person, key: keyof Person) { // 이렇게 할 수도 있고
// 이렇게 할 수도 있음
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '이정환',
  age: 27,
};

getPropertyKey(person, 'name'); // 이정환
