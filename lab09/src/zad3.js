const Redux = require("redux");
const users = [
    {
        username : "mmiotk", 
        firstName : "Mateusz", 
        lastName : "Miotk", 
        favoriteColor : "red"
    }
];
const reducer = (state = users, action) => {
    switch(action.type) {
        case "ADD_USER":
            return [...state, action.user];
        case "REMOVE_USER":
            return state.filter(user => user.username !== action.username);
        case "UPDATE_USER":
            const userToUpdate = state.find(user => user.username === action.username);
            return [
                ...state.filter(user => user.username !== action.username),
                {
                    ...userToUpdate,
                    ...action.updatedUser
                }
            ];
        default:
            return state;
    }
}
const {createStore} = Redux;
const store = createStore(reducer);
const newUser = {
    username : "jkrol", 
    firstName : "Jan", 
    lastName : "Król", 
    favoriteColor : "blue" 
}
console.log("ADD_USER")
store.dispatch({type: "ADD_USER", user: newUser});
console.log(store.getState());
console.log("UPDATE_USER");
store.dispatch({type: "UPDATE_USER", username: "jkrol", updatedUser: {username: "janek", favoriteColor: "orange"}});
console.log(store.getState());
console.log("REMOVE_USER");
store.dispatch({type: "REMOVE_USER", username: "janek"});
console.log(store.getState());
