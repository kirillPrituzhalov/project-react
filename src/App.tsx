import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './scss/app.scss';
import Profile from './pages/Profile';
import Header from './components/Header';
import React from 'react';
import Modal from './components/Modal/Modal';
import { RootState } from './redux/store';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/Login" element={<Login />} />

          {/* 
           <Route path="/" element={<Profile />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/About' element={<About/>}/> */}
        </Routes>
      </div>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
