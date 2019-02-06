const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()));

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const addFiveButton = document.getElementById('addFive');
addFiveButton.addEventListener('click', e => dispatch({ type: "ADD_FIVE" }));

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const subFiveButton = document.getElementById('subFive');
subFiveButton.addEventListener('click', e => dispatch({ type: "SUB_FIVE" }));

//Dispatch the "COLOR" action every time the user selects a color
const selectMenu = document.getElementById("color");
let changeColor = color => console.log(color);
selectMenu.addEventListener('change', changeColor(selectMenu.value));