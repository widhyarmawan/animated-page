import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({});

let store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

if (process.env.REACT_APP_APP_ENV !== 'production') {
    store = createStore(
       rootReducer,
       applyMiddleware(logger, thunk)
   );   
}
export default store