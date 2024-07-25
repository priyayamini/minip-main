import React from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to="/add" className="sidebar-option">
                <img class="remove" src={assets.add_image} alt="" />
                <p style={{color:"white"}}>Add Receivers</p>
            </NavLink>
            <NavLink to="/remove" className="sidebar-option">
                <img class="remove" src={assets.add_image2} alt="" />
                <p style={{color:"white"}}>Remove Receivers</p>
            </NavLink>
            <NavLink to="/list" className="sidebar-option">
                <img class="remove" src={assets.view_image1} alt="" />
                <p style={{color:"white"}}>List Receivers</p>
            </NavLink>
            <NavLink to="/view" className="sidebar-option">
                <img class="remove" src={assets.view_image1} alt="" />
                <p style={{color:"white"}}>List Users</p>
            </NavLink>
            
        </div>
    </div>
  )
}

export default SideBar