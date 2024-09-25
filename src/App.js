import React, { useState } from 'react';
import UserInfo from './UserInfo';
import './style.css';
import './idstyles.css';

function App() {
  const [name, setName] = useState('');
  const [rollno, setRollno] = useState('');
  const [age, setAge] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
  const [department, setDepartment] = useState('');
  const [image, setImage] = useState(null);
  const [showIdCard, setShowIdCard] = useState(false);

  // Function to handle image upload and convert it to a URL
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a URL for the uploaded image
    }
  };

  const handleShowIdCard = () => {
    setShowIdCard(true);
  };

  return (
    <div className="app-container">
      <h1>Get Your ID!</h1>

      <div className="form-container">
        <input
          type="text"
          placeholder="Enter Your Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Your Roll Number"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Year of Study"
          value={yearOfStudy}
          onChange={(e) => setYearOfStudy(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Enter Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="input-field"
        />
        <h1>Drop Your Portrait</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="input-field"
        />
        <button onClick={handleShowIdCard} className="submit-button">
          Show ID Card
        </button>
      </div>

      {showIdCard && (
        <div className="id-card">
          <h2>ID Card</h2>
          <UserInfo
            name={name}
            age={age}
            yearOfStudy={yearOfStudy}
            department={department}
            rollno={rollno}
            image={image} // Passing the uploaded image URL to the UserInfo component
          />
        </div>
      )}
    </div>
  );
}

export default App;
