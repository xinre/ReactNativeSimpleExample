import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function getStore(initialState){
    const store = createStoreWithMiddleware(rootReducer, initialState);

    return store;
}