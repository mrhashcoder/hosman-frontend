import hostellerReducer from './hostellerReducer'
import communicationReducer from './communicationReducer'
import {combineReducers} from 'redux'


const reducers = combineReducers({
    hostellers : hostellerReducer,
    communication : communicationReducer,
});

export default reducers;