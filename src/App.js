import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './Profile';
import Action from './Action';
import Dashboard from './Dashboard';
import Teacher from './Teacher';
import AddTeacher from './AddTeacher'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Teacher' element={<Teacher/>}/>
          <Route path='/create' element={<Action/>}/>
          <Route path='/AddTeacher' element={<AddTeacher/>}/>
          <Route path='/create/:id' element={<Action/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
