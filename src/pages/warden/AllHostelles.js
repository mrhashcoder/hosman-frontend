import React, { useEffect } from 'react'
import { fetchHosterllers } from '../../redux/actions/hosterllerActions';
import { useDispatch , connect } from 'react-redux';

function AllHostelles(props) {
    const hostllerList = props.hostellers;
    const dispatch = useDispatch();
    const authToken = "wardenBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YXJkZW4iOiJ0ZXN0LXVzZXIiLCJob3N0ZWxJZCI6InZ3cm0ybCIsImlhdCI6MTYyNjU0OTM3NX0.Cmr4-4wJwDvj6VZBnyyVT_P3R8xtwxcZKvW4TZKklc4"

    useEffect(() => {
        if(hostllerList.length === 0){
            dispatch(fetchHosterllers(authToken));
        }
    },[hostllerList]);


    const mappedList = hostllerList.map(( hosteller,index )=> {
        return (
            <tr key={hosteller.email}>
                <th scope="row">{index+1}</th>
                <td>{hosteller.hostellerName}</td>
                <td>{hosteller.roomNo}</td>
                <td>{hosteller.rollNo} </td>
                <td>{hosteller.email}</td>
            </tr>
        )
    })

    return (
        <div>
            <h2>All Hostellers</h2>
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
    return {hostellers : state.hostellers.hostellers};
}


export default connect(mapStateToProps)(AllHostelles);
