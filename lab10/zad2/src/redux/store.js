import { combineReducers, createStore } from "redux";
import todoListReducer from "./reducers/todoListReducer";
import noteListReducer from "./reducers/noteListReducer";
const store = createStore(combineReducers({
    todoList: todoListReducer,
    noteList: noteListReducer
}));
export default store;