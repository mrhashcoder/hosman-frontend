import React, { useEffect } from 'react'
import { useDispatch , connect } from 'react-redux';
import { fetchNotices } from 'redux/actions/communicationActions';



function AllNotices(props) {
    const notices = props.notices;
    const dispatch = useDispatch();
    const authToken = "wardenBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YXJkZW4iOiJ0ZXN0LXVzZXIiLCJob3N0ZWxJZCI6InZ3cm0ybCIsImlhdCI6MTYyNjU0OTM3NX0.Cmr4-4wJwDvj6VZBnyyVT_P3R8xtwxcZKvW4TZKklc4"

    useEffect(() => {
        if(notices.length === 0){
            dispatch(fetchNotices(authToken))
        }
    } , [])

    const mappedList = notices.map(notice => {
        const str = notice.data.substr(0,100);
        return (
            <div className="col m-2" key={notice._id}>
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{notice.date.substr(0,10)}</h5>
                    <p className="card-text">{str}</p>
                </div>
                <hr />
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>All Notices</h1>
            <hr />

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {mappedList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notices:state.communication.notices
    }
}

export default connect(mapStateToProps)(AllNotices)
