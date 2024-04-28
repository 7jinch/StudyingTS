// number
let num1: number = 123; // type annotation(타입 주석)
let num2: number = Infinity;
let num3: number = NaN;

// num1 = 'hello world'; // 오류 발생
// num1.toUpperCase()와 같은 문자열에만 적용할 수 있는 메서드도 사용 불가능

// string
let str1: string = 'hello';

// str1 = 123; // 오류 발생
// str1.toFixed()와 같은 숫자에만 사용할 수 있는 메서드도 사용 불가능

// boolean
let bool1: boolean = true;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입: 리터럴은 값이라는 의미
let numA: 10 = 10; // 10이라는 값만 허용하겠다는 타입임
let strA: 'hello' = 'hello'; // hello라는 값만 허용
