import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProf from './InfoProfile/InfoProf';

const Profile = (p) => {
  
  return <div >
    <InfoProf />
    <MyPosts postsData={p.postsData} dispatch={p.dispatch} newPostText={p.newPostText}/>
  </div>
}

export default Profile;