export default function Login() {

    return (
           <>
               <div>
                   <div className="form-item">
                       <label htmlFor="username">Username: </label>
                       <input id="username" type="text" name="username" className="required" autoComplete="off" />
                   </div>
                   <div className="form-item">
                       <label htmlFor="password">Password: </label>
                       <input id="password" type="password" name="password" className="required" autoComplete="off" />
                   </div>
               </div>
               <button id="btn-login" className="btn btn-primary btn-login">Login</button>
           </>
    )
}