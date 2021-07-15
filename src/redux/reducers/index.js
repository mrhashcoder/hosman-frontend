import hostellerReducer from './hostellerReducer'
import {combineReducers} from 'redux'


const reducers = combineReducers({
    hostellers : hostellerReducer
});

export default reducers;