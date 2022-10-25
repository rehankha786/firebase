import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { rootreducer } from "../store/rootReducer";

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));
export default store;
