 import React from 'react'
 
 const register = () => {
   return (
<div >
    <div >
        <div >
            Login
        </div>
        <div >
            <div >
                <label for="Username" >Username</label>
                <input type="email" id="username"/>
            </div>
            <div>
                <label for="Password" >Password</label>
                <input type="password"  id="password"/>
            </div>
            <div >
                <label for="firstname" >First Name</label>
                <input type="firstname" id="firstname"/>
            </div>
            <div class="mb-3">
                <label >Last Name</label>
                <input type="lastname"  id="lastname"/>
            </div>
            <button id="register" >Register</button>
        </div>
    </div>
   
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <span>Wanna Login?</span>
        <button id="login" >Login</button>
    </div>

</div>
   )
 }
 
 export default register
 