import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import InfoProf from './InfoProfile/InfoProf';

const Profile = (p) => {
  
  return <div >
    <InfoProf />
    <MyPosts postsData={p.postsData} funcAddPost={p.funcAddPost} newPostText={p.newPostText} updateNewPostText={p.updateNewPostText} />
  </div>
}

export default Profile;