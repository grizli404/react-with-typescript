import { useState } from "react";
import { List } from "./List";

export function UseDeferredValue() {
  const [input, setInput] = useState("");

  function handleChange(e: any) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input}></List>
    </>
  );
}
