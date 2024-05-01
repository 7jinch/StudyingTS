/**
 * 인터페이스의 확장(상속)
 */

// 타입 별칭으로 타입 정의하기
type Animal = {
  name: string;
};

// 인터페이스로 Dog 인터페이스 정의하고 extends 키워드로 Animal 타입을 가져옴
// (인터페이스는 인터페이스 외에도 타입 별칭처럼 객체 타입이면 다 확장 가능함)
interface Dog extends Animal {
  // name: string; // 상속받았기 때문에 따로 써 줄 필요 없음
  // name: 'inu'; // 상속처럼 부모의 프로퍼티를 수정할 수도 있음(단 재정의할 경우에는 서브타입이어야 함)
  color: string;
}

// 인터페이스로 객체 생성
const dog: Dog = {
  // name: 'inu',
  name: '',
  color: '갈색',
};

interface Cat extends Animal {
  // name: string;
  cute: boolean;
}

interface Chicken extends Animal {
  // name: string;
  taste: boolean;
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: '개냥이',
  color: '흰 색',
  cute: false,
};
