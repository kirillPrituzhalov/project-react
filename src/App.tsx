import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './scss/app.scss';
import Profile from './pages/Profile';
import Header from './components/Header';
import Modal from './components/Modal/Modal';
import { Login } from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';

import { ToastContainer } from 'react-toastify';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <ToastContainer />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Profile />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/EditUser" element={<EditUser />} />
        </Routes>
      </div>
      <Modal />
    </BrowserRouter>
  );
}

export default App;
