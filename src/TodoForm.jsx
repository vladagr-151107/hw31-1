import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "todos/addTodoAsync", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button type="submit" style={{ marginLeft: "0.5rem", padding: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}
