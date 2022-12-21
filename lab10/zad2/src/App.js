import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Todo from "./components/Todo";
import NoteList from "./components/NoteList";
import NoteDetails from "./components/NoteDetails";
import "./style.scss";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Todo List</Link>
        <Link to="/noteList">Note List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Todo />} />
        <Route path="/noteList" element={<NoteList />} />
        <Route path="/noteList/:noteId" element={<NoteDetails />} />
      </Routes>
    </div>
  );
}

export default App;
