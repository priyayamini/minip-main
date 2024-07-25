import React, { useEffect, useState } from 'react';
import './View.css';
import axios from 'axios';
import { toast } from 'react-toastify';

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
    <div className='view add flwx-col' style={{backgroundColor:"black"}}>
      <p style={{color:"white"}}>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Number of People</b>
          <b>Phone Number</b>
          <b>Address</b>
        </div>
        {list.map((item,index)=>
        {
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.noOfPeople}</p>
              <p>{item.phoneNumber}</p>
              <p>{item.address}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default View;
