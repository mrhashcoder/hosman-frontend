import ActionTypes from '../action_types'

const intialState = {
    hostellers : [
        {
            id : "1",
            name : "Abhishek Sharma",
            rollno : "21812019",
            roomno : "514"
        }
    ],
}


const hostellerReducer = (state = intialState , action) => {
    switch (action) {
        case ActionTypes.SET_HOSTELLERS:
            return state

        default:
            return state
    }
}


export default hostellerReducer
