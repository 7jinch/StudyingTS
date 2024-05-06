// src/components/TodoItem.tsx
import { Todo } from '../types'; // types 파일로부터 Todo 타입을 불러오기

// Todo의 타입을 상속받기 -> Props 타입은 기본적으로 Todo의 타입을 가지고 있음
interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  // 버튼 클릭시 props로 전달받은 onClickDelete 함수가 동작하면서 해당 todo.id를 인자로 주고 삭제
  const onClickButton = () => props.onClickDelete(props.id);

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}
