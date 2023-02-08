import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/navbar';
// import Navbar1 from './components/navbar1';
// import Textform from './components/textform';
// import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* title= "textutils" is the prop passed to the navbar componenet" 
    <Navbar title= "textutils"/> */}
    {/* Using div class name container below will align the form in the center
    heading="Enter the text to analyze---- This part is the prop passed to the Textform component */}
    
    
    <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
