import axios from 'axios'
import "./userCard.css"
import { useNavigate } from "react-router-dom";
import {useEffect } from "react";

export default function UserCard() {
let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  };


    // Fetch user details when the component mounts
    useEffect(() => {
      // You can make a fetch request to your API to get user details.
      // Replace the following example fetch with your actual API endpoint.
      axios.get('http://localhost:8000/userProfile')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
    }, []);

  return (
    <div className="user-card-container">
        <img src="./avatar.jpg" alt="" />
        <div className="user-card-container-details">
            <p><span>Name : </span> Name</p>
            <p><span>Enrollment : </span> BCA2133008</p>
            <p><span>Semester : </span>UG 5th sem </p>
            <div className="logout-btn">
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}
