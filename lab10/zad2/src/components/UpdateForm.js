import { useFormik } from "formik";
import updateTodo from "../redux/actions/updateTodo";
import { connect } from "react-redux";
function UpdateForm({updateTodo, id}) {
    const formik = useFormik({
        initialValues: {
            name: "",
            date: ""
        },
        onSubmit: (values, {resetForm}) => {
            updateTodo(id, values)
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
                <button type="submit">Update todo</button>
            </form>
        </div>
    )
}
const mapStateToProps = _state => {
    return {};
}
const mapDispatchToProps = {
    updateTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);