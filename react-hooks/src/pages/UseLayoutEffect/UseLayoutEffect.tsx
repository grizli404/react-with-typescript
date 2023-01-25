import { useLayoutEffect, useState } from "react";
import { ModalExample } from "./ModalExample";

export function UseLayoutEffect() {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <ModalExample></ModalExample>
    </>
  );
}
