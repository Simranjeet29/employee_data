import React, { useState } from "react";
import ReactDOM from "react-dom";
import {useNavigate, Route, Navigate, Redirect} from "react-router-dom";
import emp from "./employee";
import "./styles.css";
function App() { 
  const [data, setData] = useState({uname:"", pass:""});
  const navigate=useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "simran",
      password: "0000"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const submit = (event) => {
    // console.log(data);
    var { uname, pass } = data;
    console.log(uname, pass);
    // Find user login info
    const userData = database.find((user) => (user.username === uname && user.password===pass));

    // Compare user info
    if (userData) {
      console.log("login");
      navigate("/employee");
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <div onSubmit={submit}>
        <div className="input-container">
          <label>Username </label>
          <input onChange={(e)=>setData({...data, [e.target.name]:e.target.value})} type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <butto onClick= {submit} >Submit</butto>
        </div>
      </div>
    </div>
  );

  return (
    <>
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        
        {isSubmitted ? <Navigate to="/employee"/> : renderForm}
      </div>
    </div>
    </>
    
  );
}

export default App;