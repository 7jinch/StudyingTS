/**
 * 타입스크립트의 클래스
 */

// 객체
// const king = {
//   name: '킹',
//   grade: 1,
//   training() {
//     console.log('트레이닝 중...');
//   },
// };

// 클래스 정의
class Umamusume {
  // 필드
  name: string;
  grade: number;

  // 생성자
  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }

  // 메서드
  training() {
    console.log('트레이닝 중...');
  }
}

const king = new Umamusume('킹 헤일로', 1);
// const king: Umamusume <- Umamusume 타입으로 추론됨
// -> 타입스크립트에서 클래스는 타입으로도 활용됨을 알 수 있음

// 실습: 클래스는 타입으로도 활용됨
// 타입스크립트는 구조적으로 타입이 결정되는 구조적 타입시스템을 따름
// 클래스의 필드와 메서드를 보고 이런 구조면 Umamusume 타입이라고 하자고 판단함
const urara: Umamusume = {
  name: '하루 우라라',
  grade: 0,
  training() {
    console.log(`${this.name} 트레이닝 중!`);
  },
};

// 타입스크립트의 클래스의 상속
class UmamusumeSprinter extends Umamusume {
  leg_quality_suitability: string;

  constructor(name: string, grade: number, leg_quality_suitability: string) {
    super(name, grade); // JS에서는 super를 안 써도 되지만 TS에서는 꼭 써줘야 함
    this.leg_quality_suitability = leg_quality_suitability;
  }

  strategy() {
    console.log(`이번 레이스의 작전은 ${this.leg_quality_suitability}입니다.`);
  }
}
