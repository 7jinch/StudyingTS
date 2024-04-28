/**
 * 대수 타입
 * 여러 개의 타입을 합성해서 새롭게 만든 타입
 * 합집합 타입과, 교집합 타입이 있음
 */

/**
 * 합집합 타입(Union Type)
 * union 타입으로는 다 가능(객체, null, undefined도 가능)
 */
let a: string | number; // string number union 타입이라고 부름
a = 1;
a = 'hello';

let arr: (number | string)[] = [1, '2'];

// 객체 타입으로 union 타입 만들어보기
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

// 합집합 객체 타입 선언
type Union1 = Dog | Person;

// Dog 타입 객체 생성
let union1: Union1 = {
  name: '',
  color: '',
};

// Person 타입 객체 생성
let union2: Union1 = {
  name: '',
  language: '',
};

// Dog, Person 타입 객체 생성
let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// 두 타입의 공통 프로퍼티인 name만 가진 객체는 불가능함
// let union4: Union1 = {
//   name: '',
// };

/**
 * 교집합 타입(Intersection Type)
 */
let variable: number & string; // let variable: never
// 기본 타입에서 사용하면 결국 never 타입이 되서 보통 교집합 타입은 객체 타입에서 사용함

// 교집합 객체 타입 선언
type Intersection = Dog & Person;

// 교집합이기 때문에 하나의 프로퍼티만 없어도 오류 발생함
let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};
