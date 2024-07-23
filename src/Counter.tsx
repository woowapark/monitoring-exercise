import { useState } from "react";
import { logEvent } from "./logger";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    logEvent("click", "button", "count_increment", count + 1);
  };

  // Sentry 확인을 위한 임의의 에러 발생 코드
  if (count > 10) {
    throw new Error("This is an error");
  }

  return (
    <div className="card">
      <button onClick={handleClick}>count is {count}</button>
    </div>
  );
}

export default Counter;
