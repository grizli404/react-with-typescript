import { ACTIONS, TodoType } from "./UseReducer";

export function Todo({ todo, dispatch }: { todo: TodoType; dispatch: any }) {
  return (
    <>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </>
  );
}
