/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 유틸리티 타입
 */

// 게시글 객체 타입 정의
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string; // 이건 선택적 프로퍼티로 해 둠
}

// 옛날에 생성한 포스트라서 tag나 썸네일이 없다고 가정
// const legacyPost: Post = { // tags 프로퍼티가 없다고 에러
//   title: '옛날 글',
//   content: '옛날 내용',
// };

// K extends keyof T: K는 T 객체 타입의 키를 추출한 유니온 타입의 서브타입만 받도록 함
// -> K extends `title` | `tags` | `content` | `thumbnailURL`
// -> `title` | `content` extends `title` | `tags` | `content` | `thumbnailURL`
// 이렇게 하지 않으면 K에는 함수 타입이나 never 타입 등 이상한 값이 들어갈 수 있어서 에러가 발생함
type Pick<T, K extends keyof T> = {
  // T에는 Post같은 객체 타입이 들어감
  // K에는 프로퍼티를 나열한 유니온 타입이 들어감
  // 새로 만들어지는 프로퍼티의 키는 title, content가 됨
  // 새로 만들어지는 프로퍼티의 밸류의 타입은 원본 타입인 string, string이 됨
  [key in K]: T[key];
};

// Post 타입으로부터 title, content 프로퍼티만 골라서 새로운 타입을 정의해 줌
const legacyPost: Pick<Post, `title` | `content`> = {
  title: '옛날 글',
  content: '옛날 내용',
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 유틸리티 타입
 */

// 제목이 없는 게시글
// const noTitlePost: Pick<Post, `content` | `tags`> = { // 이렇게 Pick을 쓰면 나중에 프로퍼티가 많아지면 너무 길어짐
//   content: '',
//   tags: [],
// };

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T: Post 객체, K: `title` string 리터럴 타입
// Pick<Post, Exclude<keyof Post, `title`>>
// -> keyof Post: title` | `content` | `tags` | `thumbnailURL` 유니온 타입
// -> Exclude<keyof Post, `title`>: 첫 번째 인수로 전달한 타입으로부터 두 번째 인수로 전달한 문자열 타입을 제거한 타입을 반환함 -> `content` | `tags` | `thumbnailURL`
// -> Pick<Post, `content` | `tags` | `thumbnailURL`>: Post 객체 타입으로부터 두 번째 인수로 전달한 유니온 타입에 해당하는 프로퍼티들만 골라서 새로운 타입을 정의해 줌

// Omit: Post 타입으로부터 `title` 프로퍼티만 제거해서 새로운 타입을 정의함
const noTitlePost: Omit<Post, `title`> = {
  content: '',
  tags: [],
};

/**
 * Record<K, V>
 * 객체 타입을 생성해주는 유틸리티 타입
 */

// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
//   watch: {
//     url: string;
//   };
// };

// K extends keyof any: 무슨 객체인지는 모르겠는데 아무튼 어떤 객체의 key 타입임
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

// 첫 번째 타입변수: 객체의 프로퍼티 키를 유니온 타입으로 받음
// 두 번째 타입변수: 키들의 밸류 타입을 받음
type Thumbnail = Record<
  `large` | `medium` | `small` | `watch`,
  { url: string }
>;
// -> large: { url: string }, medium: { url: string } ... 이런식으로 생성됨
// 키나 밸류가 추가할 때도 편함
