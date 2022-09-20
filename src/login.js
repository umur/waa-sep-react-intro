import { buildQueries } from "@testing-library/react";
import React from "react";
import register from "./register";

const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  bio: {
    marginLeft: 10,
    fontWeight: "bold",
  },
};

const login = () => {
  return (
    <div style={cardStyles.container}>
      <div>
        <div style={cardStyles.bio}>Login</div>
        <div>
          <div>
            <label  style={{ padding: 5 }}>
              Username
            </label>
            <input type="email" id="username" />
          </div>
          <div>
            <label style={{ padding: 5 }}>
              Password
            </label>
            <input type="password" id="password" />
          </div>
          <button id="login" onClick={useBackend}>Login</button>
        </div>
      </div>

      <div>
        <span>Don't have an account?</span>
        <button id="register" onClick={()=><div><register/></div>}>Register</button>
      </div>
    </div>
  );
};

export function useBackend(){ return(
    <p>backend in progress...</p>
)}
export default login;
