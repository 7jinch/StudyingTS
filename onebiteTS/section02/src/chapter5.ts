// enum 타입
// 여러가지 값들에 이름을 부여해 열거해두고 사용하는 타입
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
  // ADMIN, // 숫자를 직접 할당하지 않아도 자동으로 0번부터 할당됨
  // USER,
  // GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: 'kim',
  // role: 0, // 0은 관리자
  role: Role.ADMIN,
  language: Language.english,
};

const user2 = {
  name: 'lee',
  // role: 1, // 일반유저
  role: Role.USER,
};

const user3 = {
  name: 'park',
  // role: 2,
  role: Role.GUEST,
};

// enum은 컴파일해도 사라지지 않고 자바스크립트의 객체로 변환됨
