/**
 * 인터페이스: 객체의 타입을 다룰 때 주로 사용함
 * (사실 타입 별칭으로도 객체에 타입을 지정할 수 있음)
 */

// 인터페이스 정의: 타입 별칭과 거의 비슷함
interface Umamusume {
  readonly name: string; // 읽기 전용 프로퍼티로 지정
  age?: number; // 선택적 프로퍼티로 지정
  // sayHi: () => void; // 함수 타입 표현식으로 메서드 타입을 지정
  sayHi(): void; // 호출 시그니쳐로 메서드 타입을 지정(일반적인 호출 시그니쳐랑 다르게 소괄호(()) 앞에 메서드의 이름이 붙음)
  sayHi(a: number, b: number): void;
  // 함수 오버로딩하려면 함수 타입 표현식이 아니라 위처럼 호출 시그니쳐를 활용해야 함
  // 아래처럼 함수 타입 표현식을 사용하면 에러 발생함
  // sayHello: () => void; // 'sayHello' 식별자가 중복되었습니다.ts(2300)
  // sayHello: (a: number, b: number) => void; // 'sayHello' 식별자가 중복되었습니다.ts(2300)
}

// 호출 시그니쳐로 함수 타입 정의 예시
// type Func = {
//   (): void; // 매개변수는 없고 반환값은 void 타입
// };
// const func: Func = () => {};

const king: Umamusume = {
  name: 'king',
  age: 1005,
  sayHi: function () {
    console.log(`hello i'm ${this.name}`);
  },
};

// 함수 오버로딩
king.sayHi();
king.sayHi(1, 2);

// 인터페이스는 객체의 타입을 정의하는데에 특화되어 있기 때문에
// 유니온이나 인터섹션 타입을 만들고 싶으면 타입 별칭을 사용하거나
// type Type1 = number | string | Umamusume;
// type Type2 = number & string & Umamusume;

// 타입 주석에 활용해야 함
// const king: Umamusume | number = {
//   name: 'king',
//   age: 1005,
//   sayHi: function () {
//     console.log(`hello i'm ${this.name}`);
//   },
// };
