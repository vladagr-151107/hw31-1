import { put, takeEvery, delay } from "redux-saga/effects";
import { setTodos, addTodo } from "./todoSlice";

function* loadTodos() {
  yield delay(500);
  yield put(setTodos([]));
}

function* addTodoAsync(action) {
  yield delay(300);
  yield put(addTodo(action.payload));
}

export default function* rootSaga() {
  yield takeEvery("todos/loadTodos", loadTodos);
  yield takeEvery("todos/addTodoAsync", addTodoAsync);
}