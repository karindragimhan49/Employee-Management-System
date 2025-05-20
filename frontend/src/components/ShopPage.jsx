import React from 'react';
import "../components/shopdashboard"

const ShopPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#004f44', // Background color
        height: '200vh', // Full viewport height
        width: '100vw', // Full viewport width
        color: 'white', // Optional: Set text color to white for better contrast
        marginLeft: -350,
        marginTop:-25, // Remove any margin around the page
        padding: 0, // Remove padding if any
        display: 'flex', // Optional: use flexbox for layout control
        justifyContent: 'center', // Optional: center content horizontally
        alignItems: 'center', // Optional: center content vertically
      }}
    >
      {/* Additional content can go here */}
    </div>
  );
};

export default ShopPage;
