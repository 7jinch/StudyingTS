/**
 * 제네릭이 필요한 이유
 */

// // 매개변수를 string으로만 하면
// function func(value: string) {
//   return value;
// }
// let str = func('string'); // 이렇게만 가능함
// let num = func(10);
// let bool = func(true);

// // 매개변수를 치트키 타입인 any 타입으로 하면
// function func(value: any) {
//   return value; // value 그대로 반환하기 때문에 반환값도 any로 추론됨
// }
// let str = func('string'); // 매개변수가 전부 any 타입으로 추론됨
// let num = func(10); // 매개변수가 전부 any 타입으로 추론됨
// let bool = func(true); // 전매개변수가 부 any 타입으로 추론됨
// bool.toUpperCase(); // any 타입이라서 원래 boolean 타입의 값인데 이런 문자열 메서드를 사용해도 에러가 발생되지 않음
// // -> 반환값의 타입이 확실한데도 any 타입으로 추론하면 사용불가능해야 한 메서드를 사용해도 에러가 발생되지 않음

// // 매개변수를 unknown 타입으로 하면
// function func(value: unknown) {
//   return value; // value 그대로 반환하기 때문에 반환값도 unknown으로 추론됨
// }
// let str = func('string'); // 매개변수가 전부 unknown 타입으로 추론됨
// let num = func(10); // 매개변수가 전부 unknown 타입으로 추론됨
// let bool = func(true); // 매개변수가 전부 unknown 타입으로 추론됨
// bool.toUpperCase(); // boolean 타입에 toUpperCase 메서드를 못 쓰게 에러가 발생하는건 좋음
// str.toUpperCase(); // 하지만 string 타입이라서 사용가능한 메서드인 toUpperCase를 사용 못 함
// num.toFixed(); // number 타입이라서 사용가능한 메서드인 toFixed도 못 씀
// // -> unknown 타입으로 추론하면 사용가능한 메서드도 죄다 에러가 발생해서 타입 좁히기를 사용해야 함
// if (typeof num === 'number') {
//   num.toFixed();
// }

/**
 * 제네릭: 일반적인, 포괄적인
 * 제네릭 함수: 모든 타입에 포괄적으로 사용할 수 있는 함수
 * 제네릭 함수로 만들어 주면 함수의 인수에 따라서 반환값의 타입을 가변적으로 정해줄 수 있음
 */

// T: 타입 변수라고 부르며 인수의 타입에 따라서 타입 변수에 저장되는 타입도 달라짐
// 부르는 방법: 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
function func<T>(value: T): T {
  return value;
}
let str = func('string'); // T에 string 타입이 들어감 -> value가 string, 반환값이 string으로 추론됨
let num = func(10); // T에 number 타입이 들어감 -> value가 number, 반환값이 number 추론됨
let bool = func(true); // T에 boolean 타입이 들어감 -> value가 boolean, 반환값이 boolean 추론됨

// let arr = func([1, 2, 3]); // T에 number[] 타입이 들어감 -> value가 number[], 반환값이 number[] 추론됨

// 타입이 추론되게 하지 않고 아래처럼 타입을 튜플 타입으로 추론되도록 타입 단언을 사용해도 됨
// let arr = func([1, 2, 3] as [number, number, number]);

// 이렇게 해도 튜플 타입으로 잘 추론됨
let arr = func<[number, number, number]>([1, 2, 3]);
