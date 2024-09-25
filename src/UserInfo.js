import React from 'react';
import './idstyles.css'; // Ensure styles for the ID card are consistent.

function UserInfo({ name, age, yearOfStudy, department, rollno, image, principalSign }) {
  return (
    <div className="id-card-container">
      <div className="left-shade"></div>
      <div className="right-content">
        <div className="id-card-header">
          <img src="cit.png" alt="College Logo" className="college-logo" /> {/* Ensure to replace with the actual logo URL */}
          <div className="college-info">
            <p className="college-name">Coimbatore Institute of Technology</p>
            <b><p className="college-subtitle">(Government Aided Autonomous Institution)</p></b>
          </div>
        </div>
        <div className="student-identity">Student Identity Card</div>
        <div className="id-card-body">
          <div className="photo-container">
            {image && <img src={image} alt="User" className="student-photo" />}
          </div>
          <div className="info-container">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Roll No:</strong> {rollno}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Year of Study:</strong> {yearOfStudy}</p>
            <p><strong>Department:</strong> {department}</p>
          </div>
        </div>
        <div className="id-card-footer">
          <p className="signature">Principal Signature</p>
          {principalSign && <img src="psign.png" alt="Principal's Signature" className="signature-image" />}
          <p className="principal-sign">Principal</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
