/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * (교집합이 없는 합집합을 서로소 집합이라고 합)
 * ex) string, number로 만든 합집합
 */

import { kill } from 'process';

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};
type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};
type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴함
// Member -> {name}님 현재까지 {point}pt 모음
// Guest -> {name}님 현재까지 {visitCount} 방문함
// function login(user: User) {
//   if ('kickCount' in user) {
//     // admin 타입
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴함`);
//   } else if ('point' in user) {
//     // member 타입
//     console.log(`${user.name}님 현재까지 ${user.point}pt 모음`);
//   } else if ('visitCount' in user) {
//     // guest 타입
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문함`);
//   }
// }

function login(user: User) {
  // tag라는 프로퍼티에 string 리터럴로 값을 줘서 조금 직관적임
  // if (user.tag === 'ADMIN') {
  //   // admin 타입
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴함`);
  // } else if (user.tag === 'MEMBER') {
  //   // member 타입
  //   console.log(`${user.name}님 현재까지 ${user.point}pt 모음`);
  // } else if (user.tag === 'GUEST') {
  //   // guest 타입
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문함`);
  // }
  // 더 직관적임
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴함`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}pt 모음`);
      break;
    }
    case 'GUEST': {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문함`);
      break;
    }
  }
}

/**
 * 예시 하나 더
 */
// 비동기 작업의 결과를 처리하는 객체
// const loading: AsyncTask = {
//   state: 'LOADING',
// };

// const failed: AsyncTask = {
//   state: 'FAILED',
//   error: {
//     message: '오류 발생 원인은 ~~~임',
//   },
// };

// const success: AsyncTask = {
//   state: 'SUCCESS',
//   response: {
//     data: '데이터임',
//   },
// };

// 객체 타입 정의
// type AsyncTask  = {
//   state: 'LOADING' | 'FAILED' | 'SUCCESS';
//   // ? 키워드를 넣어서 선택적 프로퍼티로 지정해 줌
//   error?: {
//     message: '오류 발생 원인은 ~~~임';
//   };
//   response?: {
//     data: '데이터임';
//   };
// };

// 서로소 유니온 타입으로 만들기
type LoadingTask = {
  state: 'LOADING';
};
type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

// 객체 타입 정의
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩중 -> 로딩중 출력
// 실패 -> 실패: 에러 메시지 출력
// 성공 -> 성공: 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩중');
      break;
    }
    case 'FAILED': {
      // console.log(`실패: ${task.error?.message}`); // 원래의 방법으로 하면 error는 선택적 프로퍼티이기 때문에 있는지 없는지 몰라서 에러 발생해서 옵셔널 체이닝을 해야 함
      console.log(`실패: ${task.error.message}`); // 서로소 유니온 타입으로 타입을 만들어서 지정하면 에러 발생 안 함
      break;
    }
    case 'SUCCESS': {
      // console.log(`성공: ${task.response?.data}`); // 원래의 방법으로 하면 error는 선택적 프로퍼티이기 때문에 있는지 없는지 몰라서 에러 발생해서 옵셔널 체이닝을 해야 함
      console.log(`성공: ${task.response.data}`); // 서로소 유니온 타입으로 타입을 만들어서 지정하면 에러 발생 안 함
      break;
    }
  }
}
