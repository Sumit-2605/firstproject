  import React, { useState } from 'react'
  import Home from './HomePage' 
  import img from "../assets/login.jpg" // Same background for consistency
  import { useNavigate } from 'react-router-dom'
  import axios from "axios"; // 

  const Sign = () => {
    const initialInfo = {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }

    const [input, setInput] = useState(initialInfo)
    const navigate = useNavigate()

    const handleInput = (e) => {
      const { id, value } = e.target;
      setInput({ ...input, [id]: value });
    }

   const handleSubmit = async (e) => {
  e.preventDefault();

  if (input.password !== input.confirmPassword) {
    alert("Password Unmatched !");
    return;
  }

  try {
   const res = await axios.post("http://localhost:8000/api/users", {
  fullname: input.fullname,
  email: input.email,
  phone: input.phone,
  password: input.password
});

    console.log(res.data);

    alert("Account created successfully!");

    navigate("/login");

  } catch (err) {
    console.log(err.response?.data);
    alert(err.response?.data?.message || "Signup failed");
  }
};
    const backgroundStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center'
    };

    return (
      <>
        <Home /> 
        <div className="signup-wrapper py-5" style={backgroundStyle}>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-6 col-sm-10 card shadow-lg p-4 border-0 rounded-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <h2 className='text-center mb-3' style={{ color: '#FF770F' }}>Create Account</h2>
                <p className='text-center text-muted mb-4'>Join the Fresco family today!</p>
                
                <form onSubmit={handleSubmit}>  
                  <div className='row'>
                    {/* Full Name */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Full Name</label>
                      <input type="text" className="form-control rounded-pill px-3" id='fullname' placeholder='John Doe' value={input.fullname} onChange={handleInput} required />
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Email</label>
                      <input type="email" className="form-control rounded-pill px-3" id='email' placeholder='email@example.com' value={input.email} onChange={handleInput} required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input type="number" className="form-control rounded-pill px-3" id='phone' placeholder='1234512345' value={input.phone} onChange={handleInput} />
                  </div>

                  <div className='row'>
                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Password</label>
                      <input type="password" className="form-control rounded-pill px-3" id='password' placeholder='******' value={input.password} onChange={handleInput} required />
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">Confirm Password</label>
                      <input type="password" className="form-control rounded-pill px-3" id='confirmPassword' placeholder='******' value={input.confirmPassword} onChange={handleInput} required />
                    </div>
                  </div>

                  <button type="submit" className='btn w-100 rounded-pill py-2 text-white fw-bold shadow-sm' style={{ backgroundColor: '#FF770F' }}>
                    Register Now
                  </button>
                </form>

                <div className='text-center mt-4'>
                  <p className="mb-0 text-muted">Already have an account? 
                    <span style={{ color: '#FF770F', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => navigate("/login")}> Login</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Sign