import React, { useEffect, useState } from 'react';
import './ViewUser.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ViewUser = ({ noOfPeopleC }) => {
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

  useEffect(() => {
    fetchList();
  }, []);

  const filteredList = list.filter(item => item.noOfPeople.toString() === noOfPeopleC);

  return (
    <div className='view'style={{backgroundColor:"black"}}>
      <p style={{color:"white"}}>All Recievers data according to your specifications</p>
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
            {filteredList.map((item, index) => (
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

export default ViewUser;
