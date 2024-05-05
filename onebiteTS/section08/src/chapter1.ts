/**
 * 인덱스드 엑세스 타입
 * 인덱스를 이용해서 다른 타입 내의 특정 프로퍼티의 타입을 추출하는 것
 * 객체, 배열, 튜블에 모두 사용할 수 있음
 */

/**
 * 객체 타입 사례
 */
// 객체 타입 정의
// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

// author 정보를 출력하는 함수 정의
// function printAuthorInfo(author: { id: number; name: string; age: number }) { // 이렇게 타입을 정의하면 계속 길어질 수 있고 나중에 타입이 변경되면 해당 타입을 사용하면 곳을 전부 수정해줘야 함
// 아래처럼 인덱스드 엑세스 타입으로 필요한 타입만 가져올 수 있고 가져올 때는 객체의 프로퍼티에 접근할 때처럼 해 주면 됨
// function printAuthorInfo(author: Post[`author`]) {
//   // 현재 author의 타입
//   //   (property) Post.author: {
//   //     id: number;
//   //     name: string;
//   //     age: number;
//   // }
//   console.log(`${author.name}-${author.id}`);
// }

// 주의
// 참고로 Post[`author`]의 대괄호 안에 있는 것은 타입임
// const key = `author`; // 이렇게 `author` 문자열을 변수에 저장해서
// function printAuthorInfo(author: Post[key]) { // 자바스크립트에서 하던 방식으로 인덱스에 접근하는 건 불가능
//   console.log(`${author.name}-${author.id}`);
// }

// 팁
// 중첩으로 대괄호를 사용해서도 프로퍼티의 타입에 접근할 수 있음
// function printAuthorInfo(name: Post[`author`][`name`]) {
//   console.log(`${name}`);
// }

// 객체 타입을 갖는 객체 생성
// const post: Post = {
//   title: '게시글 제목',
//   content: '게시글 내용',
//   author: {
//     id: 1,
//     name: '이정환',
//     age: 27,
//   },
// };

/**
 * 배열 타입 사례
 */
// 타입 별칭 정의
// (인터페이스는 객체 타입 정의에 특화되어 있어서 배열 타입은 불편해서 타입 별칭으로 하기)
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[]; // 배열 타입이라서 [] 붙여주기

// number 타입을 넣어 주면 배열 타입으로부터 하나의 요소의 타입만 가져옴
// function printAuthorInfo(author: PostList[number]['author']) {
// number 타입 말고 어떤 숫자를 넣어도 괜찮음(number 리터럴 타입)
function printAuthorInfo(author: PostList[0]['author']) {
  console.log(`${author.name}-${author.id}`);
}

// const post: PostList[number] = { // number 타입을 넣어 주면 배열 타입으로부터 하나의 요소의 타입만 가져옴
// 현재 post의 타입
// const post: {
//   title: string;
//   content: string;
//   author: {
//       id: number;
//       name: string;
//       age: number;
//   };
// }
// number 타입 말고 어떤 숫자를 넣어도 괜찮음(number 리터럴 타입)
// 대괄호 안에 넣는 건 타입이기 때문에 숫자값을 담은 변수를 대신 넣는 건 불가능
const post: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '이정환',
    age: 27,
  },
};

/**
 * 튜플 타입 사례
 */
type Tup = [number, string, boolean];

// 인덱싱으로 타입 가져오기
type Tup0 = Tup[0]; // type Tup0 = number
type Tup1 = Tup[1]; // type Tup1 = string
type Tup2 = Tup[2]; // type Tup2 = boolean

// 배열 타입처럼 number 타입을 명시해주면 해당 튜플이 가진 타입을 최적의 타입으로 가져옴
type TupNum0 = Tup[number]; // type TupNum = string | number | boolean
