import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => { state.push({ id: Date.now(), text: action.payload, done: false}); },
        toggleTodo: (state, action) => {
            const todo  = state.find(t => t.id === action.payload);
            if(todo) todo.done = !todo.done;
        },
        deleteTodo: (state, action) => { 
            return state.filter(t => t.id !== action.payload);
         },
        setTodos: (state, action) => action.payload,
    }
});

export const { addTodo, toggleTodo, deleteTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;