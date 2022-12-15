const Redux = require("redux");
const rootReducer = require("./rootReducer");
const {createStore} = Redux;
const addNoteAction = require("./actions/addNoteAction");
const deleteNoteAction = require("./actions/deleteNoteAction");
const finishTodoAction = require("./actions/finishTodoAction");
const updateTodoAction = require("./actions/updateTodoAction");
const addTodoAction = require("./actions/addTodoAction");
const deleteTodoAction = require("./actions/deleteTodoAction");

const store = createStore(rootReducer);


store.dispatch(addTodoAction({title: "washing", done: false}));
console.log(store.getState());


