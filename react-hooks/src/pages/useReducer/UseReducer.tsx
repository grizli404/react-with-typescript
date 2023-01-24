import { useReducer, useState } from "react";
import { Todo } from "./Todo";

export enum ACTIONS {
  ADD_TODO = "add_todo",
  TOGGLE_TODO = "toggle_todo",
  DELETE_TODO = "delete_todo",
}

export interface TodoType {
  id: number;
  name: string;
  complete: boolean;
}

interface ActionType {
  type: ACTIONS;
  payload: { name?: string; id?: number };
}

function reducer(todos: TodoType[], action: ActionType): TodoType[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name!!)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name: string) {
  return { id: Date.now(), name: name, complete: false };
}

export function UseReducer() {
  const [todos, dispatch] = useReducer(reducer, [] as TodoType[]);
  const [name, setName] = useState("");
  console.log(todos);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return (
          <>
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
            <br />
          </>
        );
      })}
    </>
  );
}
