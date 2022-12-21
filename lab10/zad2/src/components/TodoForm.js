import { useFormik } from "formik";
import { v4 } from "uuid";
import { connect } from "react-redux";
import addTodo from "../redux/actions/addTodo";
function TodoForm({todoList, addTodo}) {
    const validate = values => {
        const errors = {};
        if (!values.name) errors.name = "Name required!";
        if (!values.date) errors.date = "Date required!";
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            date: "",
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            const newObj = {
                id: v4(),
                ...values,
                done: false
            }
            addTodo(newObj);
            resetForm();
        }
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                {formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
                <div>
                    <label htmlFor="date">Date: </label>
                    <input 
                        type="date" 
                        name="date"
                        id="date"
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />
                </div>
                {formik.errors.date ? <div className="error">{formik.errors.date}</div> : null}
                <div><button type="submit">Add todo</button></div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}
const mapDispatchToProps = {
    addTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);