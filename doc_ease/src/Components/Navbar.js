import React from 'react';

const NavBar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    background: '#007FEC',
    color: '#ffffff',
    fontFamily: 'Roboto, sans-serif',
  };

  const logoStyle = {
    fontSize: '2.5rem',
  };

  const navItemStyle = {
    margin: '0 15px',
    fontSize: '1rem',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#ffffff',
  };

  const buttonContainerStyle = {
    display: 'flex',
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '9999px',
    border: 'none',
    backgroundColor: '#ffffff',
    color: '#007FEC',
    fontSize: '1rem',
    cursor: 'pointer',
    marginLeft: '15px',
  };

  return (
    <header style={navStyle}>
      <div style={logoStyle}>Logo</div>
      <nav>
        <a href="/" style={navItemStyle}>Home</a>
        <a href="/about" style={navItemStyle}>About</a>
        <a href="/contacts" style={navItemStyle}>Contacts</a>
      </nav>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Sign Up</button>
        <button style={buttonStyle}>Sign In</button>
      </div>
    </header>
  );
};

export default NavBar;
