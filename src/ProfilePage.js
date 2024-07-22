import React from 'react';
import ProfileNavBar from './ProfileNavBar'; 
import FooterOne from './FooterOne'; 
import shooterImage from './assets/shooter.png'; 
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div>
      <ProfileNavBar />
      <div className="text-center profile-content">
        <h1>Welcome to Your Profile</h1>
        <img src={shooterImage} alt="Shooter" className="profile-image" />
      </div>
      <FooterOne />
    </div>
  );
};

export default ProfilePage;
