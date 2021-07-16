import ActionTypes from '../action_types'

const intialState = {
    hostellers : []
}


const hostellerReducer = (state = intialState , action) => {
    switch (action.type) {
        case ActionTypes.SET_HOSTELLERS:
            return {
                ...state,
                hostellers : action.payload
            }
        case ActionTypes.FETCH_HOSTERLLERS:
            return{
                ...state,
                hostellers : action.payload
            }
        default:
            return state
    }
}


export default hostellerReducer
