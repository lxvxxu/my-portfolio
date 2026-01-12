import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * React Application의 렌더링 시작점입니다.
 * StrictMode는 개발 단계에서 잠재적인 문제를 감지하기 위한 도구입니다.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 웹 성능 측정을 위한 함수 호출
reportWebVitals();
