import ActionTypes from '../action_types'
import axios from '../api/axios';
import EndPoints from '../api/endPoints';

export const fetchHosterllers = (authToken) => async(dispatch) => {
    const response = await axios.get(EndPoints.hostellerList , {
        headers : {
            wardenauth : authToken
        }
    }).catch(err => {
        // console.error(err)
    });
    
    dispatch({
        type : ActionTypes.FETCH_HOSTERLLERS,
        payload : response.data.hostellerList
    });
}

export const fetchRequests = (authToken) => async(dispatch) => {
    const response = await axios.get(EndPoints.requestList , {
        headers : {
            wardenauth : authToken
        }
    }).catch(err => {
        // 
    });

    dispatch({
        type : ActionTypes.FETCH_REQUESTS,
        payload : response.data.requestList
    })
}

export const setHostellers = (hostellers) => {

    return {
        type : ActionTypes.SET_HOSTELLERS,
        payload : hostellers
    }
}





