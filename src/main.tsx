import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// TODO: Sentry 초기화 코드를 작성하세요.
// TODO: Sentry의 DSN을 환경 변수에서 가져와서 사용하세요.
// TODO: Sentry를 프로덕션 환경에서만 활성화하세요.

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
