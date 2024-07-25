import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs';
import OurMission from './pages/OurMission';
import ContactUs from './pages/ContactUs';
import RoleSelect from './pages/RoleSelect';
import Login from './components/LoginPopup/Login';
import SignUp from './components/LoginPopup/Signup';
import LoginRecv from './components/LoginReciever/LoginRecv';
import LoginAdmin from './components/LoginAdmin/LoginAdmin';
import NavBarU from './pages/NavBar/NavBarU';
import SideBar from './pages/SideBar/SideBar';
import ViewUser from './ViewUser';
import RecvLayout from './pages/RecvLayout.jsx';
import NavBarRecv from './components/Reciever/NavBarRecv.jsx';
import SideBarRecv from './components/Reciever/SideBarRecv.jsx';
import AdminApp from './src/AdminApp.jsx';
import Add from './src/pages/Add/Add.jsx';
import FormComponent from './FormComponent.jsx';
import './index.css'
import { ToastContainer } from 'react-bootstrap';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInR, setIsLoggedInR] = useState(false);
  const [isLoggedInA, setIsLoggedInA] = useState(false);

  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLoggedInR(false);
    setIsLoggedInA(false);
    navigate('/roleselect'); // Navigate to RoleSelect page
  };

  return (
    <div className="app">
      {!isLoggedIn && !isLoggedInR && !isLoggedInA && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ourmission" element={<OurMission />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/roleselect" element={<RoleSelect />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/loginrecv" element={<LoginRecv setIsLoggedInR={setIsLoggedInR}/>} />
            <Route path="/loginadmin" element={<LoginAdmin setIsLoggedInA={setIsLoggedInA} />} />
          </Routes>
        </>
      )}

      {isLoggedIn && (
        <UserPage handleLogout={handleLogout} />
      )}

      {isLoggedInR && (
        <RecvPage handleLogout={handleLogout} />
      )}

      {isLoggedInA && (
        <AdminApp handleLogout={handleLogout} />
      )}
    </div>
  );
};

const RecvPage = ({ handleLogout }) => {
  return (
    <div>
      <NavBarRecv handleLogout={handleLogout} />
      <ToastContainer/>
      <hr />
      <div className="app-content">
        <SideBarRecv />
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/add" element={<Add />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
};

const UserPage = ({ handleLogout }) => {
  const [noOfPeopleC, setNoOfPeopleC] = useState("");

  return (
    <div>
      <NavBarU handleLogout={handleLogout} />
      <ToastContainer/>
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/list" element={<ViewUser noOfPeopleC={noOfPeopleC} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/data" element={<FormComponent setNoOfPeopleC={setNoOfPeopleC} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
