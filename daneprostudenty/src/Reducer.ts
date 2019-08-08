import { combineReducers } from "redux"
import State from "./State/State"
import menu from "./Reducers/Menu"
import form from "./Reducers/Form"

const rootReducer = combineReducers<State>({
  menu,
  form
});

export default rootReducer;