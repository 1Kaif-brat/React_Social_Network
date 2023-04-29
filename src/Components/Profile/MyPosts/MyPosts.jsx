import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (p) => {
  
  let postElements = p.postsData.map(el => <Post message={el.message} likes={el.likes} />)
  let refAreaValue = React.createRef();
  
  let addPost = () => {
    p.funcAddPost()
  };

  let onPostChange = () => {
    let textAr = refAreaValue.current.value;
    p.updateNewPostText(textAr);
  }

  
  return (
    <div className={s.fieldd}>
      <div>
        <h3>New post</h3>
      </div>
      <div className={s.mpost}>
        <textarea ref={refAreaValue} className={s.texts} value={p.newPostText} onChange={onPostChange} />
        <button onClick={addPost} className={s.btn}>Add post</button>
      </div>
      <div>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;
