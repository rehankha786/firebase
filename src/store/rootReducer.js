import { combineReducers } from "redux";
import bookreducer from "./reducer/bookreducer";
export const rootreducer = combineReducers({
  book: bookreducer,
});
