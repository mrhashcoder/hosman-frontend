import React, { useState } from 'react'

function CreateHosteller() {

    const [name ,setName] = useState("");
    const [rollNo , setRollNo] = useState("");
    const [roomNo , setRoomNo] = useState("");
    const [contact , setContact] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    return (
        <div>
            <h1>Create Hosteller</h1>
            <hr />
            <form className="form-horizontal border border-1 p-3 border-primary rounded-3">
                <div className="row">
                    <div className="col">
                        <label htmlFor="formGroupExampleInput">Name</label>
                        <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="formGroupExampleInput">Roll No</label>
                        <input type="text" className="form-control" placeholder="Roll No" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="formGroupExampleInput">Room No</label>
                        <input type="text" className="form-control" placeholder="Room No" value={roomNo} onChange={(e) => setRoomNo(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="formGroupExampleInput">Contact</label>
                        <input type="text" className="form-control" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="formGroupExampleInput">Email</label>
                        <input type="text" className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col">
                        <label htmlFor="formGroupExampleInput">Password</label>
                        <input type="text" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <button className="btn btn-success" type="submit">Create Hosteller</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreateHosteller
