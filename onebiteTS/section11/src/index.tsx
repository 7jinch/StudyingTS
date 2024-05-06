import React from 'react'; // default로 export 하는 값이 없어서 오류 발생함 -> tsconfig에 esModuleInterop을 true로 해주면 됨
import ReactDOM from 'react-dom/client'; // default로 export 하는 값이 없어서 오류 발생함 -> tsconfig에 esModuleInterop을 true로 해주면 됨
import './index.css';
import App from './App'; // 타입스크립트 컴파일러는 기본적으로 jsx 문법을 해석할 수 없어서 tsconfig에 "jsx": "react-jsx"를 추가해 주면 해석할 수 있게 됨
import _ from 'lodash';
// 모듈 'lodash'에 대한 선언 파일을 찾을 수 없습니다. '/Users/pfe/workspace/study/ts/StudyingTS/onebiteTS/section11/node_modules/lodash/lodash.js'에는 암시적으로 'any' 형식이 포함됩니다.

// const root = ReactDOM.createRoot(document.getElementById('root')); // document.getElementById 메서드가 null 타입을 반환할 수 있어서 에러
// const root = ReactDOM.createRoot(document.getElementById('root')!); // non null임을 단언해주던가
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // HTMLElement 임을 단언해주기
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
