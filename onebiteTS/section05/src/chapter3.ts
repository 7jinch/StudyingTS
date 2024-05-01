/**
 * 선언 합침(Declaration Merging)
 */

// 타입 별칭을 동일한 이름의 타입을 정의 못 함
// type Umamusume = {
//   name: string;
// };
// type Umamusume = {
//   age: number;
// };

// 인터페이스는 동일한 이름의 인터페이스를 정의할 수 있음(나중에 동일한 이름의 인터페이스는 합쳐짐)
interface Umamusume {
  name: string;
}

interface Umamusume {
  // name: number; // 단 프로퍼티의 타입을 동일하도록 맞춰줘야 함
  // name: 'king'; // 선언 합침은 확장과는 다르게 서브타입도 불가능함
  name: string; // 무조건 타입을 맞춰줘야 함
  age: number;
}

interface King extends Umamusume {
  name: 'king'; // 확장에서는 프로퍼티의 타입이 서브타입이면 가능함
}

/**
 * 모듈 모강
 *
 * 보통 선언 합침은 라이브러리의 타입이 부실할 때 사용함
 */

// 예시 라이브러리의 인터페이스
interface Lib {
  a: number;
  b: number;
}

// 추가 프로퍼티의 타입을 지정해 줄 때 선언 합침을 활용할 수 있음
interface Lib {
  c: string;
}

// 라이브러리를 활용해서 객체 생성
const lib: Lib = {
  a: 1, // 기존 라이브러리로 가능
  b: 2, // 기존 라이브러리로 가능
  c: 'hello', // 기존 라이브러리에는 없는 프로퍼티의 타입은?
};
