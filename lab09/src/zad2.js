const Redux = require("redux");
const lukeState = {
    firstName: "Luke",
    lastName: "Skywalker",
    job : "moisture farmer",
    side : "light",
    weapons: {
        blaster : "DL-42"
    }
}
const jediReducer = (state = lukeState, action) => {
    switch (action.type) {
        case "SET_CURRENT_JEDI": 
            return action.payload;
        case "SET_JOB":
            return {...state, job: action.job};
        case "FINISH_TRAINING":
            return {...state, job: "Jedi Knight", weapons: {lightsaber: "blue"}}
        case "JOIN_DARK_SIDE":
            return {...state, job: "Sith", side: "dark", weapons: {lightsaber: "red"}}
        default:
            return state;    
    }
}
const {createStore} = Redux;
const store = createStore(jediReducer);
store.dispatch({type: "JOIN_DARK_SIDE"});
console.log(store.getState());