/**
 * 기본 타입 간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 가능

/**
 * 객체 타입 간의 호환성
 * 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은지
 */
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: '노란색',
};

let dog: Dog = {
  name: '개',
  color: '갈색',
  breed: '삽살개',
};

animal = dog; // 업캐스팅은 가능
// dog = animal; // 다운캐스팅은 불가
// -> animal 타입은 슈퍼 타입, dog 타입은 서브 타입
// 객체 타입은 프로퍼티를 기준으로 슈퍼, 서브 타입이 결정됨

type Book = {
  name: string;
  price: number;
};

type ProgramminBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgramminBook = {
  name: '리액트 책',
  price: 10000,
  skill: 'react',
};

book = programmingBook; // 업캐스팅
// programmingBook = book; // 다운캐스팅

/**
 * 초과 프로퍼티 검사
 * 객체 리터럴을 사용해서 객체를 생성할 때 동작하는 검사임
 */
let book2: Book = {
  name: 'next.js 책',
  price: 20000,
  // skill: 'next.js',
};

// 이런 식으로 하면 초과 프로퍼티 검사가 발동되지 않음
let book3: Book = programmingBook;

// 함수의 매개변수에서도 초과 프로퍼티 검사가 발동됨
function func(book: Book) {}
func({
  name: 'next.js 책',
  price: 20000,
  // skill: 'next.js',
});

func(programmingBook); // 이렇게 해주면 발동 안 함
