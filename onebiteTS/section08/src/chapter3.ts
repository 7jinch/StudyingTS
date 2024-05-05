/**
 * 맵드 타입
 * 기존의 객체 타입을 기반으로 새로운 객체 타입을 생성
 */

// // 객체 타입 정의
// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// // 선택적 프로퍼티를 가진 객체 타입을 생성
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// // 한 명의 유저 정보를 불러오는 기능
// function fetchUser(): User {
//   return {
//     id: 1,
//     name: '이정환',
//     age: 27,
//   };
// }

// // 한 명의 유저 정보를 수정하는 기능
// function updateUser(user: PartialUser) {}

// // 수정할 유저의 정보 객체를 인수로 받음
// updateUser({
//   // id: 1,
//   // name: '이정환',
//   age: 25,
// });
// 이렇게 굳이 똑같이 생긴 User, PartialUser 객체 타입 2개를 만들어 줘야 함?

/**
 * 맵드 타입 활용
 */
type User = {
  id: number;
  name: string;
  age: number;
};

type PartialUser = {
  // 키를 정의: key가 id, name, age일 수 있다는 의미
  // 밸류를 정의: 인덱스드 엑세스 타입처럼
  // key가 id임 -> User[`id`]가 됨 -> number 타입
  // key가 name임 -> User[`name`]가 됨-> string 타입
  // key가 age임 -> User[`age`]가 됨-> number 타입
  // {
  //   id:User[`id`]
  //   name:User[`name`]
  //   age:User[`age`]
  // }
  // 이런 식으로
  [key in 'id' | 'name' | 'age']?: User[key];
  // [key in keyof User]?: User[key]; // keyof 연산자 활용
};
// 현재 PartialUser의 타입
// type PartialUser = {
//   id?: number | undefined;
//   name?: string | undefined;
//   age?: number | undefined;
// }

// 연습 1
type BooleanUser = {
  // [key in `id` | `name` | `age`]: boolean;
  [key in keyof User]: boolean; // keyof 연산자 활용
};
// type BooleanUser = {
//   id: boolean;
//   name: boolean;
//   age: boolean;
// }

// 연습 2
type ReadonlyUser = {
  readonly [key in keyof User]: User[key]; // 읽기 전용으로 타입 정의하기
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: '이정환',
    age: 27,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

// 수정할 유저의 정보 객체를 인수로 받음
updateUser({
  // id: 1,
  // name: '이정환',
  age: 25,
});
