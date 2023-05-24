import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component,  } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import React, { useState } from 'react'


export default class App extends Component {
  const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={< News  key='General' pageSize={9} country="in" category="General"/>}></Route>
          <Route path="/Business" element={ <News key='Business'  pageSize={9} country="in" category="Business"/>}></Route>
          <Route path="/Entertainment" element={<News key='Entertainment'  pageSize={9} country="in" category="Entertainment"/>}></Route>
          <Route path="/General" element={ <News key='General'  pageSize={9} country="in" category="General"/>}></Route>
          <Route path="/Health" element={ <News key='Health'  pageSize={9} country="in" category="Health"/>}></Route>
          <Route path="/Science" element={ <News key='Science'  pageSize={9} country="in" category="Science"/>}></Route>
          <Route path="/Sports" element={ <News key='Sports'  pageSize={9} country="in" category="Sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='Technology}>' pageSize={9} country="in" category="Technology"/>}></Route>

        </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
