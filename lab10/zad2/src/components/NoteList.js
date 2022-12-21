import { connect } from "react-redux";
import { Link } from "react-router-dom";
import addNote from "../redux/actions/addNote";
import NoteForm from "./NoteForm";
function NoteList({noteList}) {
    return (
        <div>
            <NoteForm />
            <div>
                {noteList.map(note => <div key={note.id}>
                    <Link to={`/noteList/${note.id}`}>{note.name}</Link>
                </div>)}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        noteList: state.noteList
    }
}
const mapDispatchToProps = {
    addNote
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteList);