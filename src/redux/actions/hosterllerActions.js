import ActionTypes from '../action_types'
 

const setHostellers = (hostellers) => {
    return {
        type : ActionTypes.SET_HOSTELLERS,
        payload : hostellers
    }
}

