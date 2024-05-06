// src/App.tsx

import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useContext,
} from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';

import { Todo } from './types'; // types 파일로부터 Todo 타입을 불러오기

// // todos 상태값의 타입을 객체 타입으로 정의 <- src/types.ts 파일로 옮겨서 거기서 모든 타입을 관리하기
// interface Todo {
//   id: number;
//   content: string;
// }

// Action 객체의 타입 정의하기
type Action =
  | {
      type: 'CREATE';
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: 'DELETE';
      id: number;
    };

// 상태를 실제로 변화시키는 변환기 역할을 해 주는 함수
// useReducer의 dispatch 함수가 호출되면 useReducer의 인수로 전달된 reducer 함수가 호출되고
// 이때 매개변수로는 상태값과 dispatch의 인수로 전달된 액션 객체를 받음
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    // reducer 함수에서 새로운 상태값을 리턴해주면 useReducer가 불러와서 상태값을 변경시켜줌
    case `CREATE`:
      // 새로운 배열을 생성
      return [...state, action.data];
    case `DELETE`:
      // filter 메서드로 매개변수로 받은 id와 todo의 id가 일치하지 않는 todo만 필터링하기
      return state.filter((todo) => todo.id !== action.id);
  }
}

// Todo 상태값을 공급하는 Context 정의
// Context가 공급할 값의 타입을 타입변수를 활용해서 Todo[] 타입과  null 타입의 유니온 타입으로 설정
export const TodoStateContext = React.createContext<Todo[] | null>(null); // const TodoStateContext: React.Context<Todo[] | null>

// 상태변화 함수를 공급하는 Context 정의
// Context가 공급할 값의 타입을 타입변수를 활용해서 객체 타입과 null 타입의 유니온 타입으로 설정
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

// null 타입일 수도 있는 dispatch의 타입을 좁혀주는 커스텀 훅 정의
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  // 현재 dispatch의 타입
  //   const dispatch: {
  //     onClickAdd: (text: string) => void;
  //     onClickDelete: (id: number) => void;
  // } | null
  // -> null 타입일수 있음
  // null일 경우 error 발생시키기
  if (!dispatch) throw Error('TodoDispatchContext에 문제가 있음');
  return dispatch;
  // 이제 dispatch의 타입
  //   const dispatch: {
  //     onClickAdd: (text: string) => void;
  //     onClickDelete: (id: number) => void;
  // }
  // -> 객체 타입으로 잘 좁혀짐
}

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // todos: const todos: Todo[]
  // setTodos: const setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

  // useState를 useReducer로 바꿔보기
  // 첫 번째 매개변수: 상태변화를 직접 처리하는 reducer 함수
  // 두 번째 매개변수: 상태의 초기값
  // 반환값: useState처럼 배열을 반환함(배열의 값으로는 상태값과 상태변화를 요청하는 함수)
  // 그래서 dispatch를 호출하면(상태변화를 요청하면)
  // useReducer가 상태변화를 실제로 처리할 함수(여기서는 인수로 준 reducer 함수)를 호출함
  // 그런데 reducer 함수는 위처럼 App() 함수 밖에서 직접 구현해야 함
  const [todos, dispatch] = useReducer(reducer, []);

  // 리액트에서는 배열 형태로 저장된 요소들을 리스트로 렌더링할 때 모든 요소들은 고유한 키를 가져야하기 때문에 useRef 활용
  const idRef = useRef(0); // 고유한 값 설정
  // idRef: const idRef: React.MutableRefObject<number> -> 레퍼런스 객체는 number 타입의 값을 가짐

  const onClickAdd = (text: string) => {
    // setTodos([
    //   // 배열로 상태값을 갱신하기
    //   ...todos, // 원본 객체를 추가하고
    //   {
    //     id: idRef.current++, // idRef의 현재 값을 가져와서 저장하고 ++
    //     content: text,
    //   },
    // ]);

    // 클릭시 setTodos 대신 dispatch 함수 호출해서 상태변화를 요청함
    // 인수로는 상태값이 어떻게 번화되기를 원하는지 정보를 전달해줘야함(보통 객체를 전달함)
    // 이 객체를 액션 객체라고 부름
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
    // dispatch 함수 호출하면서 액션 객체를 인수로 전달하면
    // useReducer가 요청을 처리할 상태를 변화시킬 reducer 함수를 호출하면서 인수로 전달함
  };

  // todo를 삭제하는 함수
  const onClickDelete = (id: number) =>
    // setTodos(todos.filter((todo) => todo.id !== id)); // filter 메서드로 매개변수로 받은 id와 todo의 id가 일치하지 않는 todo만 필터링하기
    dispatch({
      type: 'DELETE',
      id: id,
    });

  useEffect(() => {
    console.log(todos);
  }, [todos]); // 의존성 배열에 todos를 전달 -> todos가 변할 때마다 리렌더링

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete,
          }}
        >
          <Editor
          // Context로 공급받기 때문에 더이상 props로 전달할 필요 없음
          />
          {/* <Editor
            onClickAdd={onClickAdd}
            // 그냥 onClickAdd 함수를 전달하여고 하면 에러가 발생함
            // '{ onClickAdd: (text: string) => void; }' 형식은 'IntrinsicAttributes' 형식에 할당할 수 없습니다.
            // 'IntrinsicAttributes' 형식에 'onClickAdd' 속성이 없습니다.ts(2322)
            // Editor 컴포넌트에게 전달하려는 props의 타입({ onClickAdd: (text: string) => void; })
            // Editor 컴포넌트의 props에 타입을 지정해주기
          /> */}
          {/* <Editor
        onClickAdd={onClickAdd}
        // 만약 이렇게 children을 전달하려고 한다면 하위 컴포넌트에서 추가로 children의 타입을 ReactElement 타입으로 정의해줘야 함
      >
        <div>child</div>
      </Editor> */}
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
              // onClickDelete 함수 타입이 없다고 에러
              // '{ onClickDelete: (id: number) => void; id: number; content: string; key: number; }' 형식은 'IntrinsicAttributes & Props' 형식에 할당할 수 없습니다.
              // 'IntrinsicAttributes & Props' 형식에 'onClickDelete' 속성이 없습니다.ts(2322)
              // TodoItem 컴포넌트의 Props 객체 타입에 onClickDelete: (id: number) => void; 추가하기

              // 전개연산자 사용 안 하고 아래처럼 해도 됨
              // <TodoItem
              //   key={todo.id}
              //   id={todo.id}
              //    content={todo.content}
              //   onClickDelete={onClickDelete}
              // />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
