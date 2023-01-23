import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(() => {
    console.log("run func");
    return 0;
  });
  const [theme, setTheme] = useState(() => {
    return "blue";
  });
  function decrementCount() {
    setCount((prevCount) => (prevCount >= 1 ? prevCount - 1 : prevCount));
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>
        {count}
        {theme}
      </span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
