import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './components/About';
import Textform from './components/Textform';
import Navbar1 from './components/Navbar1';
import Navbar from './components/navbar';
import Aboutdarkmode from './components/Aboutdarkmode';
import Alert from './components/Alert';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils-Dark mode";
      setInterval(() => {
        document.title("textutils is amazing");
      }, 2000);

      setInterval(() => {
        document.title("textutils is scammy");
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils-Light mode";
    }
  }
  return (
    <>
      <Router>
        <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/"
              element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />}
            />

            <Route path="/about"
             element={<Aboutdarkmode mode={mode}/>}
              // element={<About />}
            />
          </Routes>

        </div>
      </Router>
    </>
  );
}

//  {/* <Route path="/about"
//             component={<About/>}/> */}
{/* <Navbar1 title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
      <Alert alert={alert} />
      /> */}