/**
 * 접근 제어자(access modifier)
 *
 * public: 기본값
 * private: 메서드로만 접근 가능, 상속(파생) 클래스에서도 접근 못 함
 * protected: private과 같지만 상속(파생) 클래스에서는 접근 가능
 */

// 클래스 정의
class Umamusume {
  // 필드
  private name: string;
  public grade: number;

  // 생성자
  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }

  // 만약 생성자의 매개변수에 접근 제어자를 추가하면 필드의 접근제어자는 생략해줘야 함
  // 그리고 생성자의 매개변수에 접근 제어자를 추가하면 접근제어자가 있는 매개변수는 자동으로 필드를 정의하기 때문에 멤버변수는 써주지 않아도 되고 추가로 필드의 초기화도 해 줌
  // constructor(private name: string, private grade: number) {}

  // 메서드
  training() {
    console.log('트레이닝 중...');
  }
}

const king = new Umamusume('킹 헤일로', 1);
// king.name = "킹쨩" // name 필드가 private일 경우: 'name' 속성은 private이며 'Umamusume' 클래스 내에서만 액세스할 수 있습니다.ts(2341)
