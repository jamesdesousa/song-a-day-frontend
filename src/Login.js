import React, { useState } from "react";
function Login({currentUser, setCurrentUser}) {
    
    function updateUser(event) {
        setCurrentUser(event.target.value)
        
        
    }
    
    
    return (
       <div>
          <div className='container1'>
            <div className='text'>ASAD</div>
            <form className='userForm'>
            <input
                type="text"
                id="search"
                placeholder="Enter Username"
                onChange={updateUser}
                value= {currentUser}
                />
            <button> Login </button>             
            </form>

          </div>
       </div>
    )
}

export default Login