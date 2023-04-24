import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let dialogsData = [
    { id: '1', name: 'Dimych', },
    { id: '2', name: 'Andre', },
    { id: '3', name: 'Max', },
    { id: '4', name: 'Pablo', },
    { id: '5', name: 'Dani', },
];

let messagesData = [
    { id: "1", message: "Hello", },
    { id: "2", message: "How are ?", },
    { id: "3", message: "What is ?", },
    { id: "4", message: "My name is ZobjiQ", },
    { id: "5", message: "This is BLL", },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App dialogdata = {dialogsData}  messagedata = {messagesData}/>);

