// src/components/Editor.tsx

import { ReactElement, useContext, useState } from 'react';
import { TodoDispatchContext, useTodoDispatch } from '../App';

// props용 객체 타입 정의하기
// 상위 컴포넌트에서 전달해주는 거 그대로 적어주면 됨
interface Props {
  // onClickAdd: (text: string) => void; // onClickAdd 함수를 전달받기 때문에 형태 그대로 프로퍼티를 함수 표현식으로 정의해 줌 // onClickAdd 함수는 props로 공급받는 함수가 아니기 때문에 필요 없음
  // children: ReactElement; // children의 타입으로는 리액트에서 기본으로 제공하는 타입을 활용
}

// props 매개변수에 타입 정의하기
export default function Editor(props: Props) {
  // 그냥 Context로부터 공급받은 dispatch 함수를
  // const dispatch = useContext(TodoDispatchContext);
  // 이렇게 불러오면
  //   const dispatch: {
  //     onClickAdd: (text: string) => void;
  //     onClickDelete: (id: number) => void;
  // } | null
  // -> dispatch는 null일 수도 있음
  const dispatch = useTodoDispatch(); // App.tsx에서 export한 useTodoDispatch 커스텀 훅의 dispatch 함수를 받아서 사용하기

  // const [text, setText] = useState<string>(); // 이렇게 주면 string | undefined의 유니온 타입이 되버림
  const [text, setText] = useState(``); // 이렇게 초기값으로 주기
  // useState: 인수로 전달한 초기값의 타입에 따라서 state 변수와 state 변화 함수의 타입을 자동으로 추론해줌 <- useState는 제네릭 함수임을 알 수 있음
  // useState가 어떻게 구현되어 있지?: function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // 현재 state 변수의 타입: const text: string
  // 현재 state 변화 함수의 타입: const setText: React.Dispatch<React.SetStateAction<string>>
  // 만약 useState에 초기값을 인수로 전달하지 않으면 undefined로 자동 추론됨: function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
  // setText(123); // 이제 string 타입 이외의 타입의 값을 주면 에러: 'number' 형식의 인수는 'SetStateAction<string>' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)

  // onChange 함수의 타입 정의하기
  // const onChangeInput = (e: any) => setText(e.target.value);
  // const onChangeInput = (e: { target: { value: string } }) =>
  //   setText(e.target.value);
  // 위처럼 하면 안 되고 미리 정의된 이벤트 객체의 타입을 가져와서 사용해야 함
  // return 문 안의 onChange={(e) => setText(e.target.value)}의 e에 마우스 커서를 올려보면 타입스크립트에서 제공하는 이벤트 객체의 타입이 나오는데 그걸 복붙하면 됨
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  // 버튼 클릭시 props로 전달받은 onClickBuuton 함수를 호출하면서 text 상태값을 인자로 전달함
  const onClickBuuton = () => {
    // props.onClickAdd(text); // props로 전달받은 onClickAdd 함수를 호출하고 인수로 text 상태값을 넣음

    // 그냥 Context에서 dispatch를 공급받아서 사용하면 null일 수도 있어서 옵셔널 체이닝을 사용해야 함
    // dispatch?.onClickAdd(text);

    dispatch.onClickAdd(text); // 커스텀 훅으로부터 받은 dispatch를 활용하기
    setText(''); // 입력폼 비우기
  };

  return (
    <div>
      <input
        value={text}
        // onChange={(e) => setText(e.target.value)}
        onChange={onChangeInput} // 이벤트 핸들러 등록
      />
      <button onClick={onClickBuuton}>추가</button>
    </div>
  );
}
