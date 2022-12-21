const updateNote = (id, payload) => ({
    type: "UPDATE_NOTE",
    id,
    payload
});
export default updateNote;