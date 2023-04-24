import React from 'react';
import s from './News.module.css';



const News = () => {
    return (
        <div className={s.nws}>
            <div className={s.wrapper}>
                <h2>Текущее время {new Date().toLocaleTimeString()}.</h2>
            </div>
        </div>
    )
}
export default News;