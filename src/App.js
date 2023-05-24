import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = ()=> {
  const pageSize = 6;
  const [ setProgress] = useState(0)
 
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={< News  key='General' pageSize={pageSize} country="in" setProgress={setProgress} category="General"/>}></Route>
        <Route path="/Business" element={ <News key='Business'  pageSize={pageSize} country="in" category="Business"/>}></Route>
        <Route path="/Entertainment" element={<News key='Entertainment'  pageSize={pageSize} country="in" category="Entertainment"/>}></Route>
        <Route path="/General" element={ <News key='General'  pageSize={pageSize} country="in" category="General"/>}></Route>
        <Route path="/Health" element={ <News key='Health'  pageSize={pageSize} country="in" category="Health"/>}></Route>
        <Route path="/Science" element={ <News key='Science'  pageSize={pageSize} country="in" category="Science"/>}></Route>
        <Route path="/Sports" element={ <News key='Sports'  pageSize={pageSize} country="in" category="Sports"/>}></Route>
        <Route path="/Technology" element={ <News  key='Technology}>' pageSize={pageSize} country="in" category="Technology"/>}></Route>

      </Routes>
      </Router>
    </div>
  )
 
}

export default App;
