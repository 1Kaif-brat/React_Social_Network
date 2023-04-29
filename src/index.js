import { state, subscribe, test123454 } from './Components/Redux/State';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText, updateMessage } from './Components/Redux/State';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(<BrowserRouter> <App state={state} funcAddPost={addPost} updateNewPostText={updateNewPostText} updateMessage = {updateMessage} /> </BrowserRouter>);
};

rerenderEntireTree(state)
subscribe(rerenderEntireTree)
