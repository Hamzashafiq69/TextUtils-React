import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";






 

function App() {
const[mode,setmode]=
useState('light');

const[alert,setalert]=
useState(null);





const showalert = (message,type)=>{
  setalert({
    msg : message,
    type : type
  });
  setTimeout(()=>{
setalert(null);
  },1000);

}


const togglemode = ()=>{
if(mode === 'light'){
  setmode('dark');
  document.body.style.backgroundColor= '#042743'
  showalert("dark mode has been enabled","success");
  document.title= "TextUtils- Dark Mode"

  // setInterval(() => {
  //   document.title= "TextUtils is Amzaing"
  // }, 2000);
  // setInterval(() => {
  //   document.title= "Install TextUtils now"
  // }, 1500);

}else{
  setmode('light');
  document.body.style.backgroundColor= 'white'
 showalert("light mode has been enabled","success");
 document.title= "TextUtils- Light Mode"
}
}
  return (
    <>
 {/* <Router> */}
<Navbar title="TextUtils" about="About us" mode={mode} togglemode={togglemode}/>
<Alert alert= {alert}/>
<div className="container my-3" >
{/* <Routes>
          <Route exact path="/about" element={ <About />}>
           
          </Route>
          
          <Route exact path="/" element={<TextForm heading="Enter the text to analize below" showalert={showalert} mode={mode}/>

          }>
          
         </Route>
        </Routes> */}
<TextForm heading="Enter the text to analize below" showalert={showalert} mode={mode}/>

        </div>
        {/* </Router> */}

    
    </>
   
  );
}

export default App;
