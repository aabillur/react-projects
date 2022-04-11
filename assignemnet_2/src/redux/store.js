import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

function logger({ getState }) {
  return (next) => (action) => {
    console.log("Before Updating", getState());
    next(action);
    console.log("After updating", getState());
  };
}

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
