import React, { useState } from 'react';
import axios from 'axios';
import './FormComponent.css';
import { toast } from 'react-toastify';

const FormComponent = ({ setNoOfPeopleC }) => {
  const url = "https://minip-backend-hxj0.onrender.com";
  const [data, setData] = useState({
    noOfPeopleC: "",
    typeOfFood: "",
    time: "",
    qualityCheck: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "qualityCheck" && isNaN(Number(value))) {
      return; // Skip setting the state if the value is not a number
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Ensure qualityCheck is converted to a number
    if (isNaN(Number(data.qualityCheck))) {
      console.error('Quality Check must be a valid number');
      return;
    }

    const formData = {
      noOfPeopleC: data.noOfPeopleC,
      typeOfFood: data.typeOfFood,
      time: data.time,
      qualityCheck: Number(data.qualityCheck)
    };

    try {
      const response = await axios.post(`${url}/api/userdata/data`, formData);
      if (response.data.success) {
        setNoOfPeopleC(data.noOfPeopleC);  // Update the noOfPeopleC in parent component
        setData({
          noOfPeopleC: "",
          typeOfFood: "",
          time: "",
          qualityCheck: ""
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error while adding data:', error);
    }
  };

  return (
    <div className="form-container">
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="noOfPeopleC">Food is sufficient for how many people?</label>
          <input type="text" id="noOfPeopleC" name="noOfPeopleC" value={data.noOfPeopleC} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="typeOfFood">Type of food you want to offer:</label>
          <input type="text" id="typeOfFood" name="typeOfFood" value={data.typeOfFood} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="time">By what time you can deliver?</label>
          <input type="text" id="time" name="time" value={data.time} onChange={onChangeHandler} />
        </div>
        <div className="form-group">
          <label htmlFor="qualityCheck">For how much time the food can be fresh?</label>
          <input type="text" id="qualityCheck" name="qualityCheck" value={data.qualityCheck} onChange={onChangeHandler} />
        </div>
        <button type="submit" className='add-button'>ADD</button>
      </form>
    </div>
  );
};

export default FormComponent;
