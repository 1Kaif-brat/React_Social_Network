import React from 'react';
import s from './Infoprof.module.css';


const InfoProf = () => {
  return <div >
    <div className={s.image}>
      <img src='https://www.bg-mamma.com/attachments/topicimages/5632cd7db5e76.jpg' />
    </div>
    <div className={s.avaDesc}>
      <div className={s.ava}>
        <a href="https://decordog.ru/wp-content/uploads/2018/07/velsh-korgi-opisanie-porody4.jpg">
          <img src="https://decordog.ru/wp-content/uploads/2018/07/velsh-korgi-opisanie-porody4.jpg" />
        </a>
      </div>
      <div className={s.desc}>
        <div className={s.name}>Corgi Andre</div>
        <div className={s.dofb}>Date of Birds : 1 jan</div>
        <div className={`${s.city} ${s.active}`}>City : Samara</div>
      </div>
    </div>
  </div>
}

export default InfoProf;