import React from "react";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">
          <span>About</span> Us
        </h1>
        <p className="about-description">
          Welcome to <strong>FoodieZone</strong> – your one-stop hub for the tastiest restaurants in town.
          We help you discover flavors, fast delivery, and trusted reviews.
        </p>
        <div className="about-features">
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png" alt="Fast Delivery" />
            <h3>Lightning Fast</h3>
            <p>Experience blazing fast delivery at your fingertips.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/942/942751.png" alt="Premium Quality" />
            <h3>Premium Quality</h3>
            <p>We list only top-rated restaurants for you.</p>
          </div>
          <div className="feature-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Customer Support" />
            <h3>24/7 Support</h3>
            <p>We’re here to help, anytime you need us.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
