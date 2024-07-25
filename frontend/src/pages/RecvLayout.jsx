// RecvLayout.jsx
import React from 'react';
import NavBarRecv from '../components/Reciever/NavBarRecv.jsx'; // Adjust the path if needed
import SideBarRecv from '../components/Reciever/SideBarRecv.jsx'; // Adjust the path if needed
import { Outlet } from 'react-router-dom';
const RecvLayout = () => {
    return (
      <div className="recv-layout">
        <NavBarRecv />
        <hr />
        <div className="app-content">
          <SideBarRecv />
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  
  export default RecvLayout;