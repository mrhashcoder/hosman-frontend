import ActionTypes from '../action_types'

const intialState = {
    notices : []
}


const communicationReducer = (state = intialState , action) => {
    switch (action.type) {
        case ActionTypes.FETCH_NOTICES:
            return {
                ...state,
                notices : action.payload
            }
        default:
            return state
    }
}


export default communicationReducer;


