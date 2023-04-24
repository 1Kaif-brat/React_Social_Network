import React from 'react';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Dialogs from './Components/Dialogs/Dialogs';
import Setting from './Components/Settingg/Setting';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<Dialogs datadialog={props.dialogdata} datamessage={props.messagedata} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music name='Andrey' />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
