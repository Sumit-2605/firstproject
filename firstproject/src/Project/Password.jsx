import React, { useState } from 'react';
import Home from './HomePage';

const Password = () => {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Home />

      
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="card p-4 shadow-sm border-0" style={{ width: '350px', borderRadius: '15px' }}>
          
          <h4 className="text-center fw-bold mb-3">Password Reset</h4>

          {!sent ? (
            /* Pehle sirf Email pucho */
            <div className="text-center">
              <input type="email" className="form-control mb-3" placeholder="Enter Email" />
              <button 
                className="btn w-100 text-white fw-bold" 
                style={{ backgroundColor: '#62b652', borderRadius: '10px' }}
                onClick={() => setSent(true)}
              >
                Send OTP
              </button>
            </div>
          ) : (
            /* OTP aur New Password ek sath dikha do */
            <div>
              <input type="text" className="form-control mb-2" placeholder="Enter 6-digit OTP" />
              <input type="password" className="form-control mb-3" placeholder="New Password" />
              <button 
                className="btn btn-success w-100 fw-bold"
                style={{ borderRadius: '10px' }}
                onClick={() => alert("Password Updated!!!")}
              >
                Update Password
              </button>
            </div>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Password;