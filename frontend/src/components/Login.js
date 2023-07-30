import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: "credentials."})
    const navigate = useNavigate();
     
    const handleSubmit = async(e)=>{
    e.preventDefault();
    // const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
    const response = await fetch(`https://ownnote.onrender.com//api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Successfully Logged In ","success")
        navigate("/");
    }
    else{
      props.showAlert("Invalid Details","danger")
    }
  }

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className='mt-2'>
      <h2>Login to continue to OwnNote</h2>
      <form  onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" value={credentials.email} className="form-control" id="email" onChange={onChange}name='email' aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" value={credentials.password} className="form-label">Password</label>
            <input type="password" className="form-control" name='password' id="password"onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login
