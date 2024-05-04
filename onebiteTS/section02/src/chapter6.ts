// any: 특정 변수의 타입을 확실히 모를 경우

// let anyVar = 10;
// anyVar = 'hello'; // 오류 발생

let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = () => {}; // 함수도 가능

// 함수인데 문자열 메서드를 사용하려고 해서 나중에 컴파일하면 여기서 에러 발생함
// anyVar.toUpperCase();

let num: number = 10;
num = anyVar; // 함수지만 number 타입의 변수에 대입하는 것도 가능
// any 타입은타입 검사를 다 통과하는 치트키같은 타입이기 때문에 가능하면 사용하지 않는 것이 좋음

// unknown 타입: 특정 변수의 타입을 확실히 모를 경우
let unknownVar: unknown;
unknownVar = 'hello';
unknownVar = () => {};

// unknownVar.toUpperCase(); // any 타입과는 다르게 사용 불가

// num = unknownVar; // 이것도 안 됨

// 아래처럼 타입을 정제해 주었을 경우에만 값 대입 가능함(타입 정제, 타입 좁히기)
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

// any 타입과 unknown 타입의 공통점: 모든 타입의 값을 할당받을 수 있음
// 차이점: any 타입의 변수를 다른 타입의 변수에 할당하는 것은 가능하지만
// unknown 타입의 변수는 다른 타입의 변수에 할당하지 못 함
