import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProf from './InfoProfile/InfoProf';

const Profile = () => {
  return <div >
    <InfoProf />
    <MyPosts />
  </div>
}

export default Profile;