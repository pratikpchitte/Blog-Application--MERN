import axios from "axios";
import { useContext, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";

import "./login.css";
export default function Login() {
  const navigate = useNavigate();
  const userRef = useRef();
  const passwordRef = useRef();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
   // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      navigate('/');
      window.location.reload();
      
      console.log("login Succesfule");
      //dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
    } catch (err) {
    console.log("try again with right");
    // dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
      
    </div>
  );
}