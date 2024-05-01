/**
 * 사용자 정의 타입가드
 */

// 서로소 유니온 타입을 사용할 수 없는 경우라고 가정하고 진행함
type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isCute: boolean;
};

type Animal = Dog | Cat;

// 어떤 값이 어떤 객체에 포함되는지 검사하는 함수 구현
// 아래처럼 반환타입에 is Type을 추가하면 -> 반환값이 true일 경우 매개변수(여기서는 animal)로 전달한 값이 Dog 타입이라고 판단함(TS의 독특한 문법)
// (is Type을 추가하지 않으면 아래의 warning 함수의 if문에서 타입 추론을 못 함)
function isDog(animal: Animal): animal is Dog {
  // return animal.isBark !== undefined; // 에러: Animal' 형식에 'isBark' 속성이 없습니다. 'Cat' 형식에 'isBark' 속성이 없습니다.
  return (animal as Dog).isBark !== undefined; // animal 매개변수가 Dog 타입이라고 단언하고 isBark가 있는지 검사하기
}
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCute !== undefined;
}

function warning(animal: Animal) {
  // 아래처럼 하면 나중에 기존의 type이 수정되면 정상 동작 안 함
  // if ('isBark' in animal) {
  // } else if ('isCute' in animal) {
  // }

  if (isDog(animal)) {
    // 강이지일 경우
  } else if (isCat(animal)) {
    // 고양이일 경우
  }
}
