import React, { useState } from 'react'

function CreateNotice() {
    const [subject , setSubject] = useState("");
    const [notice , setNotice] = useState("");

    
    return (
        <div className="notice">
            <h1>Create Notice</h1>
            <div class="main">
                <form className="form-horizontal border border-1 p-3 border-primary rounded-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput">Subject</label>
                            <input type="text" className="form-control" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Notice : </label>
                        <br />
                        <textarea class="form-control" rows="5" placeholder="Notice Content Here..." value={notice} onChange={(e) => setNotice(e.target.value)} ></textarea>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <button className="btn btn-success" type="submit">Create Notice</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CreateNotice
