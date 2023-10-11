import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const sectionStyle = {
    margin: '10px',
    textAlign: 'left',
  };

  const headingStyle = {
    margin: '0 0 10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    display: 'block',
    margin: '0 0 10px',
  };
  return (
    <footer style={footerStyle}>
      <div>&copy; {new Date().getFullYear()} DOCEASE App. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
