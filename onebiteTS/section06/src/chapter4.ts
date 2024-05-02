/**
 * 인터페이스와 클래스
 */

interface UmamusumeInterface {
  name: string;
  runSpeed: number;
  run(): void;
}

// 설계도(interface)를 가지고 클래스를 정의(근데 이렇게는 거의 안 함)
class Umamusume implements UmamusumeInterface {
  // name: string;
  // runSpeed: number;

  // 생성자의 매개변수에 접근제어자(여기서는 public)를 붙이면 필드는 생략해도 됨
  constructor(public name: string, public runSpeed: number) {
    this.name = name;
    this.runSpeed = runSpeed;
  }

  run(): void {
    console.log(`${this.runSpeed}의 속도로 달림`);
  }
}
