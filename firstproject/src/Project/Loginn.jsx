import React, { useState } from 'react'
import Home from './HomePage'
import About from './AboutPage.jsx'
import axios from "axios"
import img from "../assets/login.jpg"
import { useNavigate } from 'react-router-dom'

const Loginn = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput({ ...input, [id]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/users/login"
        , {
  email: input.email,
  password: input.password
});

      console.log("Login Success:", res.data);
      alert("Login Successful");

      navigate("/about");

    } catch (err) {
      console.log("Login Failed:", err.response?.data?.message);
      alert(err.response?.data?.message || "Login failed");
    }
  }

  const handleForgetPassword = () => {
    navigate("/password")
  }

  const createAccount = () => {
    navigate("/sign")
  }

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <>
      <Home />

      <div className="login-wrapper" style={backgroundStyle}>
        <div className='container'>
          <div className='row justify-content-center'>

            <div className='col-md-5 card p-4 rounded-4 shadow'
              style={{ backgroundColor: "rgba(255,255,255,0.95)" }}>

              <h2 className='text-center mb-4' style={{ color: '#FF770F' }}>
                Login
              </h2>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={input.email}
                    onChange={handleInput}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={input.password}
                    onChange={handleInput}
                    required
                  />
                </div>

                <button className="btn w-100 text-white"
                  style={{ backgroundColor: "#FF770F" }}>
                  Login
                </button>

              </form>

              <div className="text-center mt-3">
                <p>
                  New user?{" "}
                  <span onClick={createAccount}
                    style={{ color: "#FF770F", cursor: "pointer" }}>
                    Create account
                  </span>
                </p>

                <small onClick={handleForgetPassword}
                  style={{ cursor: "pointer" }}>
                  Forgot Password?
                </small>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loginn