import React from 'react';

const Card = ({ title, description, imageUrl, buttonText, onButtonClick }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    maxWidth: '300px',
  };

  const imageStyle = {
    width: '100%',
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Card" style={imageStyle} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button style={buttonStyle} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
    
  );
};

export default Card;
