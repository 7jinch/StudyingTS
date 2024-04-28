/**
 * 타입 추론
 */
// 타입스크립트는 점진적 타입 시스템이기 때문에
// 명시적으로 타입을 명시해주지 않아도 초기값을 주면 타입을 추론해서 타입을 지정해 줌
let a = 10; // 초기값을 기준으로 자동으로 number 타입으로 추론함

// 하지만 모든 경우에 타입을 추론할 수 있는 건 아님
// function func(param) {} // 매개변수인 param의 타입을 몰라서 에러 발생

// 타입 추론이 가능한 상황
let c = {
  id: 1,
  name: 'lee',
  profile: {
    nickname: 'king',
  },
};
// 자동으로 아래처럼 추론됨
// let c: {
//   id: number;
//   name: string;
//   profile: {
//       nickname: string;
//   };
// }

// 구조분해할당에서도 잘 추론됨
let {
  name,
  profile: { nickname },
} = c;

// 배열에서도 가능
let [one, two, three] = [1, 'hello', 'true'];

// 함수에서도 가능: 반환값을 기준으로 타입 추론함
// function func(param?: string): string\-
function func(param = 'hello') {
  return 'hello';
}

/**
 * 타입 추론이 바뀌는 상황
 * any type의 진화
 * 초기값을 주지 않으면 암묵적으로 any 타입이 되고
 * 나중에 할당되는 값에 따라 타입이 바뀌는 상황
 * 웬만하면 이렇게 안 하는게 좋음
 */
let d; // let d: any
d = 10; // let d: any <- 이 라인에서는 any
d.toFixed(); // let d: number <- 이 라인에서는 number
d = 'hello'; // let d: any <- 이 라인에서는 any
d.toUpperCase(); // let d: string <- 이 라인에서는 string

/**
 * const로 변수 선언
 */
const num1 = 10; // const num: 10 <- number 리터럴로 타입이 추론됨
let num2 = 10; // let num2: number

/**
 * 배열
 */
let arr = [1, 'hello']; // let arr: (string | number)[]
