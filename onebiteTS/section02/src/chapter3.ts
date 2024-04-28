// object
// let user: object = // 이렇게 object라고만 해 주면 안 됨
let user: {
  // 객체 리터럴 타입으로 지정해 줘야 함
  // 프로퍼티 키 뒤에 ? 키워드가 있으면
  // 해당 프로퍼티는 없어도 되는 프로퍼티라는 의미이고
  // 만약 있다면 타입은 number가 와야 함
  id?: number;
  name: string;
} = {
  id: 1,
  name: 'kim',
};

user.id;

user = {
  name: 'lee',
}; // id는 없어도 되는 프로퍼티

let config: {
  // 프로퍼티 키 앞에 readonly를 붙이면 값이 수정되는 것을 막아줌
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

// config.apiKey = 'qwerty'; // 에러 발생(readonly)
