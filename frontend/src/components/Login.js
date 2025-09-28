import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: "credentials."})
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const navigate = useNavigate();
     
    const startCountdown = ()=>{
      let timeLeft = 45;
      setCountdown(timeLeft);
      const timer = setInterval(()=>{
        timeLeft -= 1;
        setCountdown(timeLeft);
        if(timeLeft <= 0) {
          clearInterval(timer);
          setCountdown(0);
        }
      }, 1000);
    
      return timer;
    }

    const handleSubmit = async(e)=>{
    e.preventDefault();
    setIsLoading(true);

    //show immediate alert and start countdown
    props.showAlert("Please wait, server may be waking up from sleep mode. This may take up to 45 seconds...", "info");
    startCountdown();

    // const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, {
    const response = await fetch(`https://ownnote.onrender.com/api/auth/login`, {
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

    setIsLoading(false);
    setCountdown(0);
  }

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className='mt-2'>
      <h2>Login to continue to OwnNote</h2>

      {/* Server wake-up warning with countdown */}
      {isLoading && countdown > 0 && (
        <div className='alert alert-warning d-flex align-items-center mb-3' role='alert'>
          <div className='spinner-border spinner-border-sm me-2' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
          <div>
            <strong>Server is waking up !</strong> Please don't refresh the page.
             Estimated time remaining: <strong>{countdown} seconds</strong>
          </div>
        </div>
      )}

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
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className='spinner-border spinner-border-sm me-2' role='status' aria-hidden="true"></span>
              Logging In...
            </>
          ):(
            "Submit"
          )}
        </button>
      </form>
    </div>
  )
}

export default Login
