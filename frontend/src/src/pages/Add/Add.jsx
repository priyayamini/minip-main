import React, { useState, useRef } from 'react';
import axios from 'axios';
import './Add.css';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';

const Add = () => {
  const url = "https://minip-backend-hxj0.onrender.com";
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    noOfPeople: "",
    phoneNumber: "",
    address: ""
  });

  const fileInputRef = useRef(null);

  const createObjectURL = (file) => {
    return URL.createObjectURL(file);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    // Only allow numerical values for phoneNumber
    if (name === "phoneNumber" && isNaN(Number(value))) {
      return; // Skip setting the state if the value is not a number
    }

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Ensure phoneNumber is converted to a number
    if (isNaN(Number(data.phoneNumber))) {
      console.error('Phone number must be a valid number');
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("noOfPeople", Number(data.noOfPeople));
    formData.append("phoneNumber", Number(data.phoneNumber));
    formData.append("address", data.address);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          noOfPeople: "",
          phoneNumber: "",
          address: ""
        });
        setImage(null);
        toast.success(response.data.message);
        fileInputRef.current.value = null;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error while adding data:', error);
    }
  };

  return (
    <div className='form-container'>
      <form className="add-img-upload flex-col" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor='image'>
            Upload Image
            <br />
            <img className="upload" src={image ? createObjectURL(image) : assets.upload} alt="Upload" />
          </label>
          <input 
            onChange={(e) => setImage(e.target.files[0])} 
            type="file" 
            id="image" 
            ref={fileInputRef} 
            hidden 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Receiver Name</label>
          <input 
            onChange={onChangeHandler} 
            value={data.name} 
            type="text" 
            id="name" 
            name="name" 
            placeholder='Type Here' 
          />
        </div>
        <div className="form-group">
          <label htmlFor="noOfPeople">Number Of People</label>
          <input 
            onChange={onChangeHandler} 
            value={data.noOfPeople} 
            type="text" 
            id="noOfPeople" 
            name="noOfPeople" 
            placeholder='Type Here' 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input 
            onChange={onChangeHandler} 
            value={data.phoneNumber} 
            type="text" 
            id="phoneNumber" 
            name="phoneNumber" 
            placeholder='Type Here' 
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea 
            onChange={onChangeHandler} 
            value={data.address} 
            id="address" 
            name="address" 
            placeholder='Type Here' 
          />
        </div>
        <button type="submit" className='add-button'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
