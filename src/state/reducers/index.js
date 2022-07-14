import { combineReducers } from "redux";
import responceReducer from "./responceReducer";
import searchReducer from "./searchReducer";

const reducers = combineReducers({
    responce : responceReducer,
    search : searchReducer
})

export default reducers ;