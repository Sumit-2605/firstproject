import React from "react";
// You can keep the commented-out import if you might switch back later
// import foot from "../assets/footer1.avif";
import footerImg from "../assets/footing.jpg";

const Footer = () => {
  return (
    <footer className="footer-section mt-5">
      {/* Background Image */}
      <img src={footerImg} alt="Footer Background" className="footer-img"  />

      {/* Content Overlay */}
      <div className="footer-overlay">
        <div className="footer-content text-dark fw-bold">
          <h3>Call For All Your Reservations</h3>
          <p className="contact-info text-dark fw-bold">Contact: +012-345-6789</p>
        </div>
        
        <div className="footer-bottom text-dark fw-bold">
          <p>© 2026 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;