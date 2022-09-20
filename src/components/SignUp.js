import React, {useState} from "react";

const SignUp = (props) => {
  const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: ''});

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSignup = (e) => {
    console.log("signing up : ", data);
  }

  return (
      <div>

        <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={data.firstName} onChange={handleInputChange}/>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={data.lastName} onChange={handleInputChange}/>
        </div>
          <div>
              <label>Email</label>
              <input type="email" name="email" value={data.email} onChange={handleInputChange}/>
          </div>
          <div>
              <label>Password</label>
              <input type="password" name="password" value={data.password} onChange={handleInputChange}/>
          </div>
          <input type='submit' name="submit" onClick={handleSignup}/>
      </div>
  );
}

export default SignUp;
