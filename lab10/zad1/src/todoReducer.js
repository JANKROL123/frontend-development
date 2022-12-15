const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodo = {...action.payload, id: state.length+1}
            return [...state, newTodo];
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id);
        case "UPDATE_TODO":
            const todoUpdate = state.find(todo => todo.id === action.id);
            if (todoUpdate) todoUpdate.title = action.title;
            return state;
        case "FINISH_TODO":
            const todoTitle = state.find(todo => todo.id === action.id);
            if (todoTitle) todoTitle.done = true;
            return state;
        default:
            return state;
    }
};
module.exports = todoReducer;