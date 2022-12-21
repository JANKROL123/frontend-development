const updateTodo = (id, payload) => ({
    type: "TODO_EDIT",
    id,
    payload
});

export default updateTodo;