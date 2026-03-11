   import React, { useState } from "react";
    import Home from './HomePage'
    import Footer from "./Footer";

    const  Contact = () => {
         const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // input change handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, we will contact you soon!`);

    // clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

    return (
        <>
        <Home />
        
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center ">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button className="btn btn-warning w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
     </>
  );
};
        
       

    export default Contact

