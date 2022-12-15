const Redux = require("redux");
const todoReducer = require("./todoReducer");
const notesReducer = require("./notesReducer");
const {combineReducers} = Redux;
const rootReducer = combineReducers({
    todo: todoReducer,
    notes: notesReducer
});
module.exports = rootReducer;