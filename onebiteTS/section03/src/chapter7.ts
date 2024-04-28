/**
 * 타입 좁히기
 * 조건문 등을 이용해서 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 */

// value가 number라면 toFixed 적용
// value가 string이라면 toUpperCase 적용
function func(value: number | string) {
  value; // value: string | number의 유니온 타입으로 추론됨

  if (typeof value === 'number') {
    console.log(value.toFixed()); // value: number로 추론됨
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // value: string로 추론됨
  }
  // 타입 좁히기: 조건문 내부에서는 타입이 보장되기 때문에 자동으로 타입이 추론되는 기능
  // type guard: typeof, instanceof, in
}

// value가 number라면 toFixed 적용
// value가 string이라면 toUpperCase 적용
// value가 Date 객체이면 getTime 적용
// value가 Person 객체이면
type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | Person) {
  value; // value: string | number | Date의 유니온 타입으로 추론됨

  if (typeof value === 'number') {
    console.log(value.toFixed()); // value: number로 추론됨
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase()); // value: string로 추론됨
  } else if (value instanceof Date) {
    // instanceof: 왼쪽에 있는 객체가 오른쪽에 있는 객체면 true, 아니면 false
    console.log(value.getTime()); // value: Date로 추론됨
  } else if (value && 'age' in value) {
    console.log(value.age);
  }
}
