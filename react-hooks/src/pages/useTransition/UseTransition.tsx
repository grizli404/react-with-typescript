import { useRef, useState, useTransition } from "react";

export function UseTransition() {
  const [isPending, startTransition] = useTransition();
  const input = useRef<HTMLInputElement>(null);
  const [list, setList] = useState([] as string[]);

  const LIST_SIZE = 20_000;

  function handleChange(e: any) {
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(input.current!!.value as string);
      }
      setList(l);
    });
  }

  return (
    <>
      <input type="text" ref={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}
