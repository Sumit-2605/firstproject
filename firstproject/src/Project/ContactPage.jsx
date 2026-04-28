import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import Home from "./HomePage"
import img from "../assets/contact3.jpg"
import Footer from "./Footer"
import axios from "axios"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("/api/contact", formData);

    console.log("Response:", res.data);

    alert("Message sent successfully!!!");

    // clear form
    setFormData({
      name: "",
      email: "",
      message: ""
    });

  } catch (err) {
    console.log("Error:", err.response?.data);
    alert("Failed to send message");
  }
};
  return (
    <>
  <Home />
 

  <div
    className="container-fluid py-5"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh"
    }}
  >


      <div className="container">

        <h2 className="text-center text-white fw-bold mb-5">
          Contact Us
        </h2>

        <div className="row g-4">

          {/* LEFT FORM */}
          <div className="col-md-6">
            <div className="card shadow p-4 border-0">
              <h4 className="mb-3">Send us a message</h4>

              <form onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  onChange={handleChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-control mb-3"
                  rows="4"
                  onChange={handleChange}
                  required
                ></textarea>

                <button className="btn btn-warning w-100">
                  Send Message
                </button>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-6">

            <div className="mb-3">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="200"
              style={{ border: 0 }}
              
            ></iframe>
          </div>


            <div className="card shadow p-3 border-0 mb-3">
              <h5>📍 Address</h5>
              <p>123 Food Street, Mumbai, India</p>

              <h5>📞 Phone</h5>
              <h5>+91-123123412</h5>

              <h5 className="mt-3">📧 Email</h5>
              <h5>info@restaurant.com</h5>
            </div>

            <div className="card shadow p-3 border-0 mb-3">
              <h5>🕒 Opening Hours</h5>
              <p>Mon - Fri: 9 AM - 11 PM</p>
              <p>Sat - Sun: 9 AM - 1 AM</p>
            </div>

            <div className="d-flex gap-2">
              <NavLink to="tel:+911234512345" className="btn btn-success w-50">
                Call Now
              </NavLink>

              <NavLink to="https://www.google.com/" className="btn btn-success w-50">
                WhatsApp
              </NavLink>
            </div>

          </div>

        </div>
      </div>

  
  </div>
  <Footer/>
</>
    
  )
  
} 

export default Contact