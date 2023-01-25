import { useMemo, useDeferredValue, useEffect } from "react";
import { defer } from "react-router-dom";

export function List({ input }: { input: string }) {
  const LIST_SIZE = 20_000;
  const deferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return <div>{l}</div>;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input: ${input}\nDeferred: ${deferredInput}`);
  }, [input, deferredInput]);

  return list;
}
