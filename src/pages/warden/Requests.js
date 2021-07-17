import React, { useEffect } from 'react'
import {connect, useDispatch} from 'react-redux'
import { fetchRequests } from 'redux/actions/hosterllerActions';


function Requests(props) {
    const requests = props.requests;
    const dispatch = useDispatch();
    const authToken = "wardenBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YXJkZW4iOiJ0ZXN0LXVzZXIiLCJob3N0ZWxJZCI6InZ3cm0ybCIsImlhdCI6MTYyNjU1MTAwNywiZXhwIjoxNjU4MDg3MDA3fQ.-K-xkAftnMl7y9jcoovfCVfjyk_fwNBI7hPJDZ1oZzo"


    useEffect(() => {
        if(requests.length === 0){
            dispatch(fetchRequests(authToken))
        }
    })


    const mappedList = requests.map(( request,index )=> {
        return (
            <tr key={request.email}>
                <th scope="row">{index+1}</th>
                <td>{request.hostellerName}</td>
                <td>{request.roomNo}</td>
                <td>{request.rollNo} </td>
                <td>{request.email}</td>
                <td><button className="btn btn-success">Accept</button></td>
                <td><button className="btn btn-danger">Reject</button></td>                 
            </tr>
        )
    })

    return (
        <div>
            <h1>Requests of Hosteller</h1>
            <hr />
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Room No</th>
                    <th scope="col">Roll No</th>
                    <th scope="col">Email </th>
                    </tr>
                </thead>
                <tbody>
                    {mappedList}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        requests : state.hostellers.requests 
    }
}

export default connect(mapStateToProps)(Requests)
