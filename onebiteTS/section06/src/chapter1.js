/**
 * 자바스크립트의 클래스
 */

// 객체 리터럴로 객체 생성
let king = {
  name: '킹',
  grade: 1,
  training() {
    console.log('트레이닝 중...');
  },
  introduce() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

// 클래스 정의해보기
// 클래스명은 파스칼 표기법(첫글자를 대문자로)으로 정의함
class Umamusume {
  // 필드 정의
  name;
  grade;

  // 생성자: 실제로 객체를 생성하는 메서드
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  // 메서드: 그냥 객체에 메서드를 추가할 때처럼 해주면 됨
  training() {
    console.log('트레이닝 중...');
  }

  introduce() {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  }
}
// 객체에서는 프로퍼티로 취급하기 때문에 콤마(,)로 구분해줘야 하지만
// 클래스에서는 콤마를 사용하지 않음

// 생성자를 호출해서 객체를 생성하고 urara라는 변수에 할당함
// 클래스를 이용해서 생성한 객체를 인스턴스라고 부름(Umamusume 인스턴스)
let urara = new Umamusume('우라라', 0);
console.log(urara); // Umamusume { name: '우라라', grade: 0 }

urara.training(); // 트레이닝 중...
urara.introduce(); // 안녕하세요 저는 우라라입니다.

// 인터페이스처럼 상속을 활용해서 클래스를 정의하기
class UmamusumeSprinter extends Umamusume {
  // name; // 상속을 받았기 때문에 안 써줘도 됨
  // grade; // 상속을 받았기 때문에 안 써줘도 됨
  leg_quality_suitability;

  constructor(name, grade, leg_quality_suitability) {
    // this.name = name; // 상속을 받았기 때문에 안 써줘도 됨
    // this.grade = grade; // 상속을 받았기 때문에 안 써줘도 됨
    super(name, grade); // super로 부모의 생성자를 호출하기
    this.leg_quality_suitability = leg_quality_suitability;
  }

  // 상속을 받았기 때문에 안 써줘도 됨
  // training() {
  //   console.log('트레이닝 중...');
  // }

  // introduce() {
  //   console.log(`안녕하세요 저는 ${this.name}입니다.`);
  // }

  strategy() {
    console.log(`이번 레이스의 작전은 ${this.leg_quality_suitability}입니다.`);
  }
}

const bakushinO = new UmamusumeSprinter('사쿠라 바쿠신 오', 5, '도주');
console.log(bakushinO);
// UmamusumeSprinter {
//   name: '사쿠라 바쿠신 오',
//   grade: 5,
//   leg_quality_suitability: '도주'
// }
bakushinO.strategy(); // 이번 레이스의 작전은 도주입니다.
