/**
 * 제네릭 인터페이스
 */

// 제네릭 함수 만들 때랑 비슷함
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 제네릭 함수와는 다르게 타입으로 변수를 정의할 때는 반드시 <>를 사용해서 타입변수에 타입을 직접 할당해 줘야 함
// 타입변수 K는 string, V에는 number가 할당됨 -> key는 K(string), value는 V(number) 타입이 됨
let keypair: KeyPair<string, number> = {
  key: 'key',
  value: 1,
};

// 타입변수 K는 boolean, V에는 string 배열이 할당됨 -> key는 K(boolean), value는 V(string 배열) 타입이 됨
let keypair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1'],
};

/**
 * 인덱스 시그니쳐: 키와 밸류의 규칙만 만족하면 어떠한 객체든 허용하는 유연한 인터페이스
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 1,
  // key3: '2', // 타입이 number이기만하면 다 가능
};

// 인터페이스와 제네릭을 함께 사용하면 훨신 더 유연해짐
interface Map<V> {
  [key: string]: V; // 밸류의 타입을 바꿔서 쓸 수 있는 시그니쳐 타입 완성
}

let stringMap: Map<string> = {
  key: '1',
  key2: 'hello',
};

let booleanMap: Map<boolean> = {
  key: true,
  key2: false,
};

/**
 * 제네릭 타입 별칭
 */

// 인터페이스 이외에도 타입 별칭에도 제네릭을 활용할 수 있음
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: 'hello',
};

/**
 * 제네릭 인터페이스 활용: <유저 관리 프로그램>
 * 유저 구분: 학생 유저와 개발자 유저
 */

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}
// Student와 Developer는 교집합이 없기 때문에 서로소 집합입

// interface User {
//   name: string;
//   profile: Student | Developer;
// }

// 제네릭을 활용해서 더 깔끔하게 만들기
interface User<T> {
  name: string;
  profile: T;
}

// function goToSchool(user: User) {
//   if (user.profile.type !== 'student') {
//     console.log('학생이 아닙니다');
//     return;
//   }

//   const school = user.profile.school;
//   console.log(`${school}로 등교 완료`);
// }

// 제네릭 인터페이스를 활용해서 더 깔끔하게 만들기: 변수에 타입을 정의함과 동시에 타입변수에 할당할 타입을 명시해줘야 함
function goToSchool(user: User<Student>) {
  // if (user.profile.type !== 'student') {
  //   console.log('학생이 아닙니다');
  //   return;
  // }
  // User의 타입이 Student이기 때문에 이제 타입좁히기를 사용할 필요 없음

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

// const developerUser: User = {
//   name: '이정환',
//   profile: {
//     type: 'developer',
//     skill: 'ts',
//   },
// };

// 제네릭을 활용해서 더 깔끔하게 만들기
const developerUser: User<Developer> = {
  name: '이정환',
  profile: {
    type: 'developer',
    skill: 'ts',
  },
};

// const studentUser: User = {
//   name: '홍길동',
//   profile: {
//     type: 'student',
//     school: '가톨릭대학교',
//   },
// };

// 제네릭을 활용해서 더 깔끔하게 만들기
const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '가톨릭대학교',
  },
};
