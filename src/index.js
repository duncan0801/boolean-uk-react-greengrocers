import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

/**Description
We're going to recreate our greengrocers stand from scratch, using React! We'll reuse here an exercise that you already know, so you can focus on practice React and fully understand the fundamentals. Don't let your guard down still, as there's always challenges lying ahead!


Deliverables
- A user can view a selection of items in the store
- From the store, a user can add an item to their cart
- From the cart, a user can view and adjust the number of items in their cart
    - If an item's quantity equals zero it is removed from the cart
- A user can view the current total in their cart

Instructions
- Use this template as a starting point => https://codesandbox.io/s/greengrocers-react-version-starter-template-hx5xj
- Create all the components you need, using the templates as a reference
- Create all the pieces of the state you need, using the example provided
- Add all the event listeners you need to make the page reactive

Tips
- Try to figure out what your component hierarchy should be before starting to code
- You should aim to keep your state closest to the components that use it. Avoid whenever you can passing down pieces of state

Challenge
- Add filters to the store ie. filter by item type; when a user clicks a filter they will only see items of that type
- Add sorting to the store ie. sort by price or sort alphabetically; when a user clicks sort they will see a sorted list of items

Challenge 2
- Add a new detail component for each of the items, and render it conditionally after clicking on an item */
