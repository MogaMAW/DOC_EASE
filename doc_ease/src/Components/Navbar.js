import React from 'react';
// Adding a logo to the navbar
import logo from '../logo.svg';
import DOC_Ease from '../DOC_Ease.png';

const logoURL = DOC_Ease;
const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
    background: 'white',
    color: '#ffffff',
    fontFamily: 'montserrat',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    zIndex: '9999',
    position: 'fixed',
    width: '100%',
    height: '70px',
    space : '1px',
    
    
  };

  const logoStyle = {
    
    width : '100px',
    height : '120px',
    marginRight: '30px',
    marginRight:'-100px'
  };
  
  {
    // Make this component responsive

    /* Extra small devices (phones, 600px and down) */




  }
  const navItemStyle = {
    margin: '0 16px',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: "blue",
    flex: '1',
    textAlign: 'center',
    hover: 'none',
    space : '1px',
    shadow : '2px 2px 2px 2px #888888',
    padding: '10px 21px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    
  };
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: 'lightgreen',
    color: 'white',
    fontWeight: 'bold',
    shadow : '2px 2px 2px 2px #888888',
    fontSize: '1rem',
    cursor: 'pointer',
    marginLeft: '15px',
    shadow : '2px 2px 2px 2px #888888',
    padding: '10px 21px',
    Animation : 'spin 2s linear infinite',
    // Add animation to the button
    animation: 'pulse 1s infinite',
  };

  return (
    <header style={navStyle}>
        {/* Create a link for the logo */}
      <div style={logoStyle}>
        <a href="/" style={logoStyle}>
          <img src={logoURL} className="App-logo" alt="logo" />
           {/* DOCEASE */}
        </a>
      </div>
      <nav>
        <a href="/" style={navItemStyle}>Home</a>
        <a href="/about" style={navItemStyle}>About</a>
        <a href="/services" style={navItemStyle}>Services</a>
        <a href="/contacts" style={navItemStyle}>Contacts</a>
      </nav>
      <div style={buttonContainerStyle}>
        {/* <button style={buttonStyle}>Register</button> */}
        <button style={buttonStyle}>Sign In</button>
      </div>
    </header>
  );
};

export default NavBar;
