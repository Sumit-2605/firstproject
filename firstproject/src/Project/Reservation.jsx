import React, { useState } from 'react'
import Home from './HomePage'
import img from "../assets/bgctable.avif"
import img1 from "../assets/table2.jpeg"
import Footer from './Footer'
  import axios from "axios";


function Reservation() {

    

  const timeSlots = [
    "10:00 AM",
    "12:30 PM",
    "2:00 PM",
    "4:00 PM",
    "7:00 PM"
  ]

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    date: '',
    time: '',
    guest: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }



const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.number || !formData.date || !formData.time) {
    alert("Please fill all required fields");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:8000/api/reservation",
      formData
    );

    console.log(res.data);

    alert("Reservation Successful ✅");

    setSubmitted(true);

  } catch (err) {
    console.log(err.response?.data?.message);
    alert("Reservation Failed ❌");
  }
};

  return (
    <>
      <Home />

      <div
        className='container-fluid'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: 'center',
          minHeight: '100vh'
        }}
      >

        {/* Overlay */}
        {/* <div style={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: "100vh" }}> */}

          <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>

            <div
              className='card shadow p-4'
              style={{
                maxWidth: "500px",
                width: "100%",
                backgroundColor: "rgba(255,255,255,0.95)",
                borderRadius: "12px"
              }}
            >

              {submitted ? (
                <div className="text-center">
                  <h4 className="text-success mb-3">
                    {`Thanks for the reservation ✅ ${formData.name}`}
                  </h4>
                  <p>We’ll contact you shortly.</p>
                </div>
              ) : (
                <>
                  <h3 className='text-center mb-4'>Book a Table</h3>

                  <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                      <label className='form-label'>Booking Name</label>
                      <input
                        type="text"
                        id='name'
                        className='form-control'
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Contact Number</label>
                      <input
                        type="number"
                        id='number'
                        className='form-control'
                        placeholder="Contact Number"
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Booking Date</label>
                      <input
                        type="date"
                        id='date'
                        className='form-control'
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Select Time Slot</label>

                      <div className='d-flex flex-wrap gap-2'>
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            className={`btn ${
                              formData.time === slot
                                ? 'btn-success'
                                : 'btn-outline-secondary'
                            }`}
                            onClick={() =>
                              setFormData({ ...formData, time: slot })
                            }
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      {formData.time && (
                        <small className="text-success d-block mt-2">
                          Selected: {formData.time}
                        </small>
                      )}
                    </div>

                    <div className='mb-4'>
                      <label className='form-label'>Number of Guests</label>
                      <input
                        type="number"
                        id='guest'
                        className='form-control'
                        onChange={handleChange}
                      />
                    </div>

                    <button className='btn w-100 text-white' id='btnreg'>
                      Submit Reservation
                    </button>

                  </form>
                </>
              )}

            </div>

          </div>

        </div>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default Reservation