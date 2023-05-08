import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Dialogs from './Components/Dialogs/Dialogs';
import Setting from './Components/Settingg/Setting';
import Friends from './Components/Friends/Friends';


const App = (props) => {
//debugger

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar img={props.state.messagePage.dialogsData} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs datadialog={props.state.messagePage.dialogsData} datamessage={props.state.messagePage.messagesData} dispatch = {props.dispatch} />} />
          <Route path="/profile" element={<Profile postsData={props.state.profilePage.postsData} dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music name='Andrey' />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </div>
    </div>

  )
}


export default App;
