import React from 'react';
import Doctor from '../Doctor.png';


// Image function- DoctorImage
const DoctorImage = () => {
    const imageStyle = {
        width: '30%',
        marginBottom: '15px',
        // padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'left',
        
    };
    
    return (
        <div style={imageStyle}>
        <img src={Doctor} alt="Doctor" style={imageStyle} />
        </div>
    );
    }
const HeroSection = () => {
  const heroSectionStyle = {
    backgroundColor: '#f4f4f4',
    padding: '200px 10px',
    textAlign: 'center',
    color: '#333333',
    fontFamily: 'montserrat',
    zIndex: '1',
    position: 'relative',
    display: 'flex',
    
    // justifyContent: 'space-between',
  };

  const contentStyle = {
    maxWidth: '600px',
    margin: '10px auto',
    radius: '100px',
    color: 'blue',
    padding: '10px 20px',
    

    backgroundColor: 'lightgreen',
    borderRadius: '20px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
  };

  const imageStyle = {
    marginTop: '30px',
    maxWidth: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#33A1FD',

    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '1.0em',
    border: 'none',
    padding: '15px 30px',
    marginTop: '31px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    // buttonRadius: '200px',
    borderRadius: '500px',
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
