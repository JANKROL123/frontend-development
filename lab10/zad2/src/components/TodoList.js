import { connect } from "react-redux";
import { Link } from "react-router-dom";
function TodoList({todoList}) {
    return (
        <div>
            {todoList.map(todo => <div key={todo.id}>
                <Link to={`/${todo.id}`}>{todo.name}</Link>
            </div>)}
        </div>
    )
}
const mapStateToProps = (state) => ({
    todoList: state.todoList
});
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);