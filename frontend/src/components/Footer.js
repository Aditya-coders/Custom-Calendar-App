import React from 'react';
import './Footer.css'; // Import the CSS file for footer styling
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RiComputerLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer custom-footer py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text text-light">
              SVIET College is dedicated to providing a comprehensive educational experience through various events, technical fests, and cultural activities. Learn more about us and get involved in our vibrant community.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/events" className="footer-link">Events</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-contact text-light">
              <i className="bi bi-telephone footer-icon "></i> +123 456 7890
            </p>
            <p className="footer-contact text-light text-light">
              <i className="bi bi-envelope footer-icon"></i> info@sviet.edu
            </p>
            <p className="footer-contact text-light">
              <i className="bi bi-geo-alt footer-icon "></i> 123 College Street, City, Country
            </p>
            <div className="social-icons mt-3">
              <a href="https://www.instagram.com/svietofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/supersixty-sviet-71b537269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.facebook.com/svietofficial" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://sviet.ac.in" className="social-icon" aria-label="Twitter"><RiComputerLine /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="footer-copy text-light">&copy; 2024 SVIET College Events | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
