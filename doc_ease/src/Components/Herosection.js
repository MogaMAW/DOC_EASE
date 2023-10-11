import React from 'react';
import LandingPage from '../LandingPage.png';

const HeroSection = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${LandingPage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    top: '40px',
    padding: '200px 10px',
    textAlign: 'center',
    color: '#333333',
    fontFamily: 'montserrat',
    zIndex: '1',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    maxWidth: '600px',
    margin: '10px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '20px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#33A1FD',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '1.2em',
    border: 'none',
    padding: '15px 30px',
    marginTop: '31px',
    cursor: 'pointer',
    borderRadius: '500px',
    transition: 'background-color 0.3s ease',
  };

  const handleButtonClick = () => {
    // Handle button click event
    // Add your logic here
  };

  return (
    <div style={heroSectionStyle}>
      <div style={contentStyle}>
        <h1>Welcome to Our Telehealth App</h1>
        <p>Connecting you to Health facilities anytime, anywhere.</p>
        <button style={buttonStyle} onClick={handleButtonClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
