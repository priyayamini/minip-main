import React, { useEffect, useState } from 'react';
import './View.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets.js';

const View = () => {
  const url = "https://minip-backend-hxj0.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='view'>
      <p>All Foods List</p>
      <div className="table-container">
        <table className="list-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Number of People</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td><img src={`${url}/images/${item.image}`} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.noOfPeople}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
