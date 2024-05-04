/**
 * Promise & Generic
 */

// 자바스크립트의 Promise
// Promise는 자바스크립트 내장 클래스
// Promise 객체를 생성할 때는 콜백함수를 인자로 전달해야 함
// 이 함수(실행자 함수)는 비동기 처리를 실제로 처리하는 함수임
// resolve, reject를 인자로 전달해줘야 함
// resolve에 전달한 값은 비동기 작업의 결과값, reject에 전달하는 값는 실패 이유임
// 성공하는 then, 실패하면 catch
// resolve의 매개변수로 전달한 값을 then의 콜백함수에서 인수로 전달받음
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 1000);
// });

// promise.then((respone) => {
//   console.log(respone); // 20
//   // console.log(respone * 10); // 에러: 'respone'은(는) 'unknown' 형식입니다.ts(18046)
// });

// Promise에 Generic을 활용
// Promise는 제레릭 클래스를 기반으로 선언되어 있어서 타입 변수로 비동기처리의 성공(resolv)의 결과값의 타입은 처리해 줄 수 있지만
// 실패했을 때(reject)의 타입은 정해줄 수 없음
// 만약 타입변수를 지정해주지 않으면 unknown 타입으로 추론됨
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20); -> 타입변수로 number으로 해놔서 자동으로 number이 됨
    reject('~~때문에 실패함');
  }, 1000);
});

// promise.then((respone) => {
//   console.log(respone * 10); // -> number 타입
// });

// 이때의 error 매개변수의 타입은 무조건 any라서 타입좁히기를 사용해야 함
promise.catch((error) => {
  if (typeof error === `string`) {
    console.log(error);
  }
});

/**
 * Promise를 반환하는 함수의 타입을 정의해보기
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

// 1번 방법: fetchPost 함수의 반환값을 Promise<Post>으로 명시하기
function fetchPost(): Promise<Post> {
  // 2번 방법: 아래처럼 Promise에 타입 변수 할당해도 됨
  // return new Promise<Post>((resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '임시 제목',
        content: '임시 내용',
      });
    }, 1000);
  });
}

const postRequest = fetchPost(); // postRequest에는 fetchPost가 반환한 Promise 객체가 저장되어 있음

postRequest.then((post) => {
  post.id; // (property) Post.id: number
});
