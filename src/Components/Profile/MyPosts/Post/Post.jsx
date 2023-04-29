import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  let likeCount = React.createRef();
  return (
    <div className={s.post}>
      <a href="https://adonius.club/uploads/posts/2022-06/1655764637_6-adonius-club-p-sobaka-ulibaka-korgi-krasivo-foto-7.jpg">
        <img src="https://adonius.club/uploads/posts/2022-06/1655764637_6-adonius-club-p-sobaka-ulibaka-korgi-krasivo-foto-7.jpg" />
      </a>
      {props.message}
      <div className={s.like}>
        <a ><div ref={likeCount} class={s.heart}></div></a>
        {props.likes} like
      </div>
    </div>
  )
}

export default Post;