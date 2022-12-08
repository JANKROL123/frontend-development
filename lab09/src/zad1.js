const Redux = require("redux");
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        case "ADD":
            return state + action.amount;
        case "SUBTRACT":
            return state - action.amount;
        case "SET":
            return action.value;
        default:
            return state;
    }
}
const {createStore} = Redux;
const store = createStore(counterReducer);
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});
store.dispatch({type: "SUBTRACT", amount: 10});
store.dispatch({type: "SET", value: 20});
console.log(store.getState());
