import React from 'react';

const firstName = ""; // Replace with your first name or set it to null/undefined if not provided

const GreetingComponent = () => {
  return (
      <div>
        {firstName ? (
          <>
          <p>Hello, {firstName}!</p>
          <img src="../Fendi.jpeg" alt="Profile" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
  );
};

export default GreetingComponent;