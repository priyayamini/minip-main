import React, { useEffect, useState } from 'react';
import './ViewUser.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const View = () => {
  const url = "https://minip-backend-hxj0.onrender.com";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/userdata/view`);
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
    <div className='view' style={{backgroundColor:"black"}}>
      <p style={
        {color:"white"}
      }>All Foods List</p>
      <div className="table-container">
        <table className="list-table">
          <thead>
            <tr>
              <th>No of People</th>
              <th>Type of Food</th>
              <th>Time to deliver</th>
             <th>The food will be fresh for</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr key={index}>
                <td>{item.noOfPeopleC}</td>
                <td>{item.typeOfFood}</td>
                <td>{item.time}</td>
                <td>{item.qualityCheck}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
