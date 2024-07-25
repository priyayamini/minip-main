import React, { useEffect, useState } from 'react';
import './Remove.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Remove = () => {
  const url = "https://minip-backend-hxj0.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("Error fetching data");
    }
  };

  const removeReciever = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='view add' style={{backgroundColor:"black"}}>
      <p style={{color:"white"}}>All Foods List</p>
      <div className="table-container">
        <table className="list-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Number of People</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td><img src={`${url}/images/${item.image}`} alt={item.name} className="table-image" /></td>
                <td>{item.name}</td>
                <td>{item.noOfPeople}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
                <td onClick={() => removeReciever(item._id)} className="cursor">X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Remove;
