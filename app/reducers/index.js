import { combineReducers } from 'redux';
import news from './news/index.js';
import newListReduces from './newListReduces/index.js'

const rootReducer = combineReducers({
    news,
    newListReduces
});

export default rootReducer;