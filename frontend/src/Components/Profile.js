import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Components/Profile.css';

const Profile = ({ email }) => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/profile/${email}`);
        setProfile(response.data);
      } catch (err) {
        setError('Failed to load profile');
      }
    };

    fetchProfile();
  }, [email]);

  if (error) return <p className="error-message">{error}</p>;
  if (!profile) return <p className="loading-message">Loading...</p>;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Student Profile</h2>
        <p>View your profile details below</p>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <span>Name:</span>
          <span className="value">{profile.student_name} {profile.surname}</span>
        </div>
        <div className="detail-item">
          <span>Email:</span>
          <span className="value">{profile.stud_email}</span>
        </div>
        <div className="detail-item">
          <span>Phone:</span>
          <span className="value">{profile.stud_phone_no}</span>
        </div>
        <div className="detail-item">
          <span>Branch:</span>
          <span className="value">{profile.branch}</span>
        </div>
        <div className="detail-item">
          <span>Division:</span>
          <span className="value">{profile.Division}</span>
        </div>
        <div className="detail-item">
          <span>Year of Admission:</span>
          <span className="value">{profile.yearofadmission}</span>
        </div>
        <div className="detail-item">
          <span>Address:</span>
          <span className="value">{profile.student_address}</span>
        </div>
        <div className="detail-item">
          <span>Pincode:</span>
          <span className="value">{profile.pincode}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
