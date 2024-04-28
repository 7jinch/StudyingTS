/**
 * 타입 단언
 */
type Person = {
  name: string;
};

// 일단 빈 객체로 생성하고 나중에 값을 추가하고 싶은데 그냥 이렇게만 하면 에러가 발생함
// let person: Person = {}; // '{}' 형식에 'Person' 형식의 name, age 속성이 없습니다.ts(2739)

// 그럴 때 사용
let person = {} as Person;
person.name = 'lee';

type Dog = {
  name: string;
};

// let dog: Dog = {
//   name: 'lee',
//   breed: 'kim', // 타입 단언을 하지 않으면 초과 프로퍼티 검사로 에러가 발생함
// };

let dog = {
  name: 'lee',
  breed: 'kim',
} as Dog; // 타입 추론

/**
 * 타입 단언의 규칙
 * 타입단언식: 값 as 단언(A as B)
 * A가 B의 슈퍼 타입이거나
 * A가 B의 서브타이이어야 함
 */
let num1 = 10 as never; // number는 never의 슈퍼 타입이라서 타입 단언이 됨
let num2 = 10 as unknown; // number는 unknowndml 서브 타입이라서 타입 단언이 됨

// let num3 = 10 as string; // 안 됨
// let num3 = 10 as never as string; // 다중 단언을 하면 되긴 하는데 쓰지말자

/**
 * const 단언
 */
let num4 = 10 as const;
// num4 = 11; // 수정 불가능

let cat = {
  name: '야옹이',
} as const;
// cat.name = '냥이'; // readonly처럼 수정 불가능

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글 1',
  author: 'lee',
};

// ?.: null이나 undefined일 경우 null, undefined을 반환하는 연산자(옵셔널 체이닝)
// const len: number = post.author?.length; // 옵셔널 체이닝이라서 null, undefined일 수도 있어서 에러 발생

// !.: null이나 undefined이 아니고 값이 있다고 단언(Non Null 연산자)
const len: number = post.author!.length;
