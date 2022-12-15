const notesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const newNote = {...action.payload, id: state.length+1}
            return [...state, newNote];
        case "DELETE_NOTE":
            return state.filter(note => note.id !== action.id);
        default:
            return state;
    }
};

module.exports = notesReducer;
