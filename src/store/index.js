import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk"
import Home from "./home"
import Classification from "./classification/"

const reducer = combineReducers({
    Home,
    Classification
})
const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;