// 타입 별칭
// JS로 컴파일하면 다 사라짐
type User = {
  id: number;
  name: string;
  nationality: string;
};

// 객체 리터럴을 직접 입력하는 대신 타입 별칭을 사용하면 됨
let user: User = {
  id: 1,
  name: 'lee',
  nationality: 'korea',
};

// 인덱스 시그니처
type CountryCodes = {
  // Korea: string;
  // US: string;
  // UK: string;
  // key와 value의 타입을 한 번에 지정하기
  [key: string]: string; // key - string, value - string
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  US: 'us',
  UK: 'uk',
};

type CountryNumberCondes = {
  [key: string]: number; // 이 규칙을 위반하지만 않으면 객체 내에 프로퍼티는 없어도 됨
  korea: number; // korea라는 프로퍼티는 무조건 있어야 함
};

let countryNumberCodes: CountryNumberCondes = {
  korea: 410,
};
