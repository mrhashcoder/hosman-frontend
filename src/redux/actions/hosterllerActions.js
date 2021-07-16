import ActionTypes from '../action_types'
import axios from '../api/axios';
import EndPoints from '../api/endPoints';

export const fetchHosterllers = () => async(dispatch) => {
    const response = await axios.get(EndPoints.users);
    dispatch({
        type : ActionTypes.FETCH_HOSTERLLERS,
        payload : response.data
    });
}

export const setHostellers = (hostellers) => {

    return {
        type : ActionTypes.SET_HOSTELLERS,
        payload : hostellers
    }
}



