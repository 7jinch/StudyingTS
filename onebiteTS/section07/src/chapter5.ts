/**
 * 제네릭 클래스
 */

// 일반 클래스
class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.print(); // [ 1, 2 ]
// -> 만약 string 배열을 받게 하려면?

// 제네릭 클래스
// 코드 해석
// <>: 얘는 제네릭이다고 알려줌
// list의 타입은 T 배열임
// 인수로 전달된 배열을 보고 타입변수 T는 number가 됨
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([9, 8, 7]);
numberList2.pop();
numberList2.print(); // [ 9, 8 ]

// 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 클래스의 생성자를 호출할 때 전달한 인수로 전달한 타입을 추론해줘서
// const numberList2 = new List<number>([9, 8, 7]); // 이렇게 타입을 명시해주지 않아도 됨

const numberList3 = new List(['a', 'b', 'c']);
numberList3.pop();
numberList3.print(); // [ 'a', 'b' ]
