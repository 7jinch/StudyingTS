/**
 * Unknown 타입: 모든 타입들의 슈퍼 타입(전체 집합)
 */

function unknownExample() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅은 불가능
  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let nulll: null = unknownVar;
}

/**
 * Never  타입: 모든 타입들의 서브 타입(공집합)
 */

function neverExample() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅
  let num: number = neverFunc();
  let str: string = neverFunc();
  let nulll: null = neverFunc();

  // 다운캐스팅은 불가능
  // let never1: never = 10;
  // let never2: never = 'string'
}

/**
 * Void 타입
 */

function voidExample() {
  function voidFunc(): void {
    console.log('hello');

    // void > undefined이기 때문에 함수의 타입이 void라도 반환값이 undefined라면 괜찮음
    return undefined; // 업캐스팅
  }

  // 업캐스팅
  let coidVar: void = undefined;
}

/**
 * Any 타입: 타입 계층도를 무시하는 치트키 타입
 */

function anyExample() {
  let un: unknown;
  let an: any;
  let und: undefined;

  an = un; // any 타입에서는 다운캐스팅을 받는 것도 가능
  und = an; // 다운캐스팅을 하는 것도 가능

  // never 타입에서는 불가능
  let neverVar: never;
  // neverVar = an; // 불가능
}
