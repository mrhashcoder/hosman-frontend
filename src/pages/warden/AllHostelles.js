import React, { useEffect } from 'react'
import { fetchHosterllers } from '../../redux/actions/hosterllerActions';
import { useDispatch , connect } from 'react-redux';

function AllHostelles(props) {
    const hostllerList = props.hostellers;
    const dispatch = useDispatch();

    useEffect(() => {
        if(hostllerList.length === 0){
            dispatch(fetchHosterllers());
        }
    },[hostllerList]);


    const mappedList = hostllerList.map(( hosteller,index )=> {
        return (
            <tr key={hosteller.id}>
                <th scope="row">{index+1}</th>
                <td>{hosteller.email}</td>
                <td>{hosteller.username}</td>
                <td>{hosteller.phone} </td>
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
