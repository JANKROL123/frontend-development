import UpdateForm from "./UpdateForm";
import deleteTodo from "../redux/actions/deleteTodo";
import doneTodo from "../redux/actions/doneTodo";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
function Todo({todoList, deleteTodo, doneTodo}) {
    const navigate = useNavigate();
    const params = useParams();
    const todo = todoList.find(todo => todo.id === params.id);
    function handleDelete(id) {
        deleteTodo(id);
        navigate("/", {replace: true});
    }
    return (
        <div className="todo">
            <div>
                <h1>{todo.name}</h1>
                <h3>{todo.id}</h3>
                <div>{todo.date}</div>
                <div><strong>Status: </strong>{todo.done.toString()}</div>
                <div>
                    <label htmlFor="done">Mark as done: </label>
                    {!todo.done ? <input 
                        type="checkbox" 
                        name="done" 
                        id="done" 
                        value={false}
                        onChange={() => doneTodo(todo.id)}
                        /> : <input name="done" type="checkbox" disabled />}
                </div>
            </div>
            <UpdateForm id={todo.id} />
            <div>
                <button onClick={() => handleDelete(todo.id)}>Delete todo</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}
const mapDispatchToProps = {
    deleteTodo,
    doneTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
