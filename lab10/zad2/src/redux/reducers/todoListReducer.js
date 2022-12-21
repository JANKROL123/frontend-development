const todoListReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "TODO_EDIT":
            const updatingTodo = state.find(todo => todo.id === action.id);
            if (updatingTodo) {
                const {name, date} = action.payload;
                updatingTodo.name = name || updatingTodo.name;
                updatingTodo.date = date || updatingTodo.date;
                return [
                    ...state.filter(todo => todo.id !== action.id),
                    updatingTodo
                ]
            } else return state;
        case "TODO_DONE":
            const updatingObj = state.find(todo => todo.id === action.id);
            if (updatingObj) {
                const objUpdated = {...updatingObj, done: true};
                return [
                    ...state.filter(todo => todo.id !== action.id),
                    objUpdated
                ];
            } else return state;
        case "TODO_DELETE":
            const deletingTodo = state.find(todo => todo.id === action.id);
            if (deletingTodo) return state.filter(todo => todo.id !== action.id);
            else return state;
        default:
            return state;
    }
}
export default todoListReducer;