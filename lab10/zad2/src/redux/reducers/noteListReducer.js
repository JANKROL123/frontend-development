import { v4 } from "uuid";
const noteListReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_NOTE":
            const {name, description} = action.payload;
            const newNote = {
                id: v4(),
                name,
                description
            }
            return [...state, newNote];
        case "UPDATE_NOTE":
            const noteToUpdate = state.find(note => note.id === action.id);
            if (noteToUpdate) {
                const updatedNote = {
                    id: noteToUpdate.id,
                    name: action.payload.name || noteToUpdate.name,
                    description: action.payload.description || noteToUpdate.description
                };
                return [
                    ...state.filter(note => note.id !== action.id),
                    updatedNote
                ];
            } else return state;
            
        case "DELETE_NOTE":
            const noteToDelete = state.find(note => note.id === action.id);
            if (noteToDelete) return state.filter(note => note.id !== action.id);
            else return state;
        default:
            return state;
    }
}
export default noteListReducer;