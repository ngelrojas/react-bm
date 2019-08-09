import React from 'react'


export const FormComment = () => {
    return(
        <form className="col s12">                
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" required />
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" required />
                    <label htmlFor="last_name">Last Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input id="email" type="email" className="validate" required />
                      <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                      <textarea id="textarea1" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Comment</label>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="waves-effect waves-light btn-small">Comment</button> 
                </div>
            </div>

        </form>
    )
}
