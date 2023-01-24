import { useEffect, useState } from "react";
type ListProps = {
  getItems: (increment: number) => number[];
};
export function List({ getItems }: ListProps) {
  const [items, setItems] = useState([] as number[]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Updating items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
