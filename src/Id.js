import React, { useState } from 'react';
import UserInfo from './UserInfo'; // Ensure this component displays the user's information correctly.
import './style.css'; // General styling for your application.
import './idstyles.css'; // Specific styles for the ID card layout.

function App() {
  // State variables for capturing user input.
  const [name, setName] = useState('Ratheesh');
  const [age, setAge] = useState(19);
  const [yearOfStudy, setYearOfStudy] = useState('2022');
  const [department, setDepartment] = useState('Software Systems');
  const [showIdCard, setShowIdCard] = useState(false);

  // Function to handle showing the ID card on button click.
  const handleShowIdCard = () => {
    setShowIdCard(true);
  };

  return (
    <div className="app-container">
      <h1>Get Your ID!</h1>

      <div className="form-container">
        {/* Input field for full name */}
        <input
          type="text"
          placeholder="Enter Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />

        {/* Input field for age */}
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
        />

        {/* Input field for year of study */}
        <input
          type="text"
          placeholder="Enter Year of Study"
          value={yearOfStudy}
          onChange={(e) => setYearOfStudy(e.target.value)}
          className="input-field"
        />

        {/* Input field for department */}
        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="input-field"
        />

        {/* Button to display the ID card */}
        <button onClick={handleShowIdCard} className="submit-button">
          Show ID Card
        </button>
      </div>

      {/* Conditionally render the ID card when showIdCard is true */}
      {showIdCard && (
        <div className="id-card">
          <h2>ID Card</h2>
          <UserInfo
            name={name}
            age={age}
            yearOfStudy={yearOfStudy}
            department={department}
          />
        </div>
      )}
    </div>
  );
}

export default App;
