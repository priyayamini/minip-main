
import React from 'react';
import SideBar from './components/SideBar/SideBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add.jsx';
import Remove from './pages/Remove/Remove.jsx';
import View from './pages/View/View.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewUser from './pages/View/ViewUser.jsx';
const AdminApp = ({ handleLogout }) => {
  return (
    <div>
      <ToastContainer />
      <NavBar handleLogout={handleLogout} />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/remove" element={<Remove />} />
          <Route path="/list" element={<View />} />
          <Route path="/view" element={<ViewUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminApp;
