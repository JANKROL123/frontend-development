import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function Main() {
  return (
    <div>
      <TodoForm />
      <h1>Todo List: </h1>
      <TodoList />
    </div>
  );
}

export default Main;
