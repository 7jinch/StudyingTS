/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

// 게시글 객체 타입 정의
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string; // 이건 선택적 프로퍼티로 해 둠
}

// 임시 저장한 게시물 객체
// const draft: Post = {
//   title: '제목 나중에 짓기',
//   content: '미완성',
// };

// Partial: 타입변수로 전달한 타입의 모든 프로퍼티를 선택적 프로퍼티로 만들어주는 유틸리티 타입
// const draft: Partial<Post> = {
//   // draft는 const draft: Partial<Post>
//   // Partial는 type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
//   title: '제목 나중에 짓기',
//   content: '미완성',
// };

// 직접 구현해보기: mapped type 활용해서 전달받은 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환하기
type Partial<T> = {
  // keyof: 특정 객체 타입으로부터 모든 키를 유니온 타입으로 추출하는 연산자
  // keyof T: title | tags | content | thumnailURL
  // key in keyof T: key가 keyof T에 하나씩 매핑됨 -> key가 한 번은 title, 한 번은 tags, 한 번은 content, 한 번은 thumbnailURL이 됨
  // T[key]: 인덱스드 엑세스 타입: 특정 객체나 배열로부터 특정 프로퍼티의 밸류를 추출함
  // -> 한 번은 string, 한 번은 string[], 한 번은 string, 한 번은 string
  // ? : 선택적 프로퍼티로 만들기
  [key in keyof T]?: T[key];
}; // -> 모든 프로퍼티를 선택적 프로퍼티로 만들어줌

// 직접 정의한 Partial 타입으로 바뀜
const draft: Partial<Post> = {
  title: '제목 나중에 짓기',
  content: '미완성',
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 유틸리티 타입
 */

type Required<T> = {
  // -?: ?를 빼겠다는 의미
  [key in keyof T]-?: T[key];
};

// Required: 모든 프로퍼티가 필수가 됨
// const withThumbnailPost: Required<Post> = {
//   'thumnailURL' 속성이 '{ title: string; tags: string[]; content: string; }' 형식에 없지만 'Required<Post>' 형식에서 필수입니다.ts(2741)
//   title: '한 입 타스',
//   tags: ['ts'],
//   content: '',
// };
// thumnailURL 프로퍼티가 없기 때문에 이제 에러 발생함

/**
 * Readonly<T>
 * -> 읽기전용 수정불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어 주는 유틸리티 타입
 */

type Readonly<T> = {
  // readonly: 읽기 전용이 됨
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '읽기 전용 게시글임',
  tags: [],
  content: '',
};
