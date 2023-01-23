import { useState, useEffect } from "react";

export function UseEffect() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     console.log("cleanup");
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
        console.log("fetching");
      });

    return () => {
      console.log("cleanup");
    };
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
  // return <div>{windowWidth}</div>;
}
