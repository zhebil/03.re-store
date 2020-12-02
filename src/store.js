import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import reducer from "./reducers";
const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};
const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === "string") {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action); 
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));
const myAction =(dispatch) => {
setTimeout(()=> dispatch({
    type: "DELAYED_ACTION"
}), 2000)
}
store.dispatch(myAction)
store.dispatch("HELLO");
export default store;
