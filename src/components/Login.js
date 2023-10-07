import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';


function Login() {

  const [err, setErr] = useState(false)
    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
        
      signInWithEmailAndPassword(auth, email, password)
      navigate("/")

    } catch (err) {
        setErr(true)
    }
  };


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" required/>
          <input type="password" placeholder="password" required />
          

          <button type='submit'>LogIn</button>
          {err && <span>Something Went Wrong</span>}
        </form>
        <p>You do have an Account? <Link to="/register">Signup</Link></p>
      </div>
    </div>
  )
}

export default Login