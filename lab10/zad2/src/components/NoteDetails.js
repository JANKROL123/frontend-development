import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import deleteNote from "../redux/actions/deleteNote";
import updateNote from "../redux/actions/updateNote";
function NoteDetails({noteList, deleteNote, updateNote}) {
    const params = useParams();
    const navigate = useNavigate();
    const note = noteList.find(note => note.id === params.noteId);
    function handleDelete(id) {
        deleteNote(id);
        navigate("/noteList", {replace: true});
    }
    const formik = useFormik({
        initialValues: {
            name: "",
            description: ""
        },
        onSubmit: (values, {resetForm}) => {
            updateNote(note.id, values);
            resetForm();
        }
    });
    return (
        <div>
            <h1>{note.name}</h1>
            <h3>{note.id}</h3>
            <div>
                {note.description}
            </div>
            <div>
                <button onClick={() => handleDelete(note.id)}>Delete note</button>
            </div>
            <h3>Update note</h3>
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
                    <label htmlFor="name">Name: </label>
                    <textarea 
                        type="text" 
                        name="description"
                        id="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                </div>
                <div>
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
    noteList: state.noteList
});
const mapDispatchToProps = {
    deleteNote,
    updateNote
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteDetails);