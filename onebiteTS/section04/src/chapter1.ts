/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 어떤 타입의 매개변수를 받는지, 어떤 타입의 결과값을 반환하는지
// 반환값의 타입은 반환갑을 기준으로 자동으로 추론하기 때문에 타입을 명시하지 않아도 됨
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입 정의하기
 */
// 반환값의 타입은 반환갑을 기준으로 자동으로 추론하기 때문에 타입을 명시하지 않아도 됨
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
// 초기값을 주면 자동 추론되기 때문에 타입을 명시하지 않아도 됨
// 선택적 매개변수로 해주고 싶다면 ?를 붙이기
// 선택적 매개변수는 필수 매개변수보다 뒤에 선언해 줘야 함
function introduce(name: string = 'king', height?: number) {
  console.log(`name: ${name}`);
  // console.log(`height: ${height + 10}`); // 에러 발생: height는 number 타입과 undefined 타입의 유니온 타입이라서 height의 값은 undefined일 수도 있기 때문에 연산 불가능
  // (parameter) height: number | undefined
  if (typeof height == 'number') {
    console.log(`height: ${height + 10}`); // 타입 가드하면 됨
  }
}

introduce('spe');
introduce('el', 100);

/**
 * rest parameter
 */
// 자바스크립트의 문법인 rest parameter를 활용해서 매개변수를 줄 때는 배열을 활용
function getSum(...rest: number[]) {
  // function getSum(...rest: number[number, number, number]) { // 만약 개수를 고정하고 싶다면 배열 타입 대신 튜플 타입으로 만들면 됨
  let sum = 0;
  rest.forEach((n) => (sum += n));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
