import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReduce from './profile-reducer';
import messageReduce from './message-reducer';

let reducers = combineReducers({
    profilePage: profileReduce,
    messagePage: messageReduce,
});

let store = createStore(reducers);

export {store}
