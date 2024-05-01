/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라서 여러가지 버전으로 만드는 문법
 *
 * 예시
 * 하나의 함수: func
 * 모든 매개변수의 타입: number
 * ver.a: 매개변수가 1개 -> 이 매개변수에 20을 곱한 값을 출력
 * ver.b: 매개변수가 3개 -> 이 개배변수들을 더한 값을 출력
 */

// TS에서 함수 오버로딩을 하는 방법
// 1. 매개변수들만 지정하고 구현부는 정의하지 않음 -> 오버로드 시그니쳐
function func(a: number): void; // ver.a
function func(a: number, b: number, c: number): void; // ver.b

// 2. 함수의 실제 구현부를 정의해줌 -> 구현 시그니쳐
// 대신 다른 매개변수들은 선택적 매개변수로 지정해줘야 함
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number')
    return console.log(a + b + c); // ver.a
  return console.log(a * 20); // ver.b
}

// 3. 활용
// 함수가 오버로드 시그니쳐가 있으면 그 함수를 호출할 때
// 함수의 실제 구현(구현 시그니쳐)을 따르지 않고 함수의 오버로드 시그니쳐들 중에 하나의 버전을 따르게 됨
// func(); // 에러
func(1); // ver.a 호출
func(1, 2, 3); // ver.b 호출
