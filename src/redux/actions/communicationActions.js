import ActionTypes from '../action_types'
import axios from '../api/axios';
import EndPoints from '../api/endPoints';

export const fetchNotices = (authToken) => async (dispatch) => {
    const response = await axios.get(EndPoints.noticeList , {
        headers : {
            wardenauth : authToken
        }
    }).catch(err => {

    });
    console.log(response.data)

    dispatch({
        type : ActionTypes.FETCH_NOTICES,
        payload : response.data.noticelist
    })
}
