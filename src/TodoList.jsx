import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "./todoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!todos.length) {
    return <p>No todos yet!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              flex: 1,
              textDecoration: todo.done ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            style={{ marginLeft: "0.5rem" }}
          >
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}
