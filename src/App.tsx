import React from 'react';
import './App.css';
import {BrowserRouter,Route,Router, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Exam from './pages/Exam';
import Result from './pages/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/exam' element={<Exam/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
