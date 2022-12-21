import { useFormik } from "formik";
import addNote from "../redux/actions/addNote";
import { connect } from "react-redux";
function NoteForm({addNote}) {
    const validate = (values) => {
        const errors = {};
        if (!values.name) errors.name = "Name required!";
        if (!values.description) errors.description = "Description required!";
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            description: ""
        },
        validate,
        onSubmit: (values, {resetForm}) => {
            addNote(values);
            resetForm();
        }
    })
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
                        <label htmlFor="description">Name: </label>
                        <textarea 
                            type="text" 
                            name="description"
                            id="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                        />
                    </div>
                    {formik.errors.description ? <div className="error">{formik.errors.description}</div> : null}
                    <div>
                        <button type="sudmit">Add Note</button>
                    </div>
                </form>
            </div>
    )
}
const mapStateToProps = state => {
    return {};
}
const mapDispatchToProps = {
    addNote
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);