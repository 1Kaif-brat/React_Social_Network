import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (p) => {
  let postsData = [
    { id: '1', message: 'Hello', likes: '50', },
    { id: '2', message: 'How are you ?', likes: '22', },
  ];
  let postElements = postsData.map(el => <Post message={el.message} likes={el.likes} />)
  return (
    <div className={s.fieldd}>
      <div>
        <h3>New post</h3>
      </div>
      <div className={s.mpost}>
        <textarea className={s.texts}></textarea>
        <button className={s.btn}>Add post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )
}

export default MyPosts;