const updateTodoAction = (id, title) => ({
    type: "DELETE_TODO",
    title,
    id
});
module.exports = updateTodoAction;