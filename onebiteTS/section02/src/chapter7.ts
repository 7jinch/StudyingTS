// void: 아무것도 없음을 의미하는 타입

// string을 반환하는 함수
function func1(): string {
  return 'hello';
}

// 자바의 void 메서드같은 거임
function func2(): void {
  console.log('hello');
}

// 변수에도 void 타입 가능
let a: void;
// a = 1; // 변수 타입이 void이면 값 대입이 불가능함(config에서 엄격한 null 검사 옵션을 끄면 대입이 되긴 함)
a = undefined; // undefined은 가능
// a = null; // null은 안 됨

// never: 존재하지 않는, 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// 아무런 값도 담을 수 없는 변수 생성
// config에서 엄격한 null 검사 옵션을 꺼도 값을 못 담음
let b: never;
// b = 1;
// b = undefined;
// b = null;

let anyVar: any;
// b = anyVar; // any 타입도 대입 불가능함
