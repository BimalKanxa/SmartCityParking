import axios from 'axios'
import "./userCard.css"
import { useNavigate } from "react-router-dom";
import {useEffect } from "react";

export default function UserCard() {
let navigate = useNavigate()
  const handleAdmin = () => {
   
    navigate('/admin')
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
    <div className="user-card-container" style={{ 
      display: "flex",
      margin: "auto",
      height: "100%",
      width: "100%",
      backgroundColor:"#30c0e6",
     
  }}  >
    <div className="cardContainer" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  padding : "3rem",
  backgroundColor:"#eef9ff"
  }}>

        <img src="./avatar.jpg" alt="" />
        <div className="user-card-container-details" style={{fontSize:"18px"}}>
            <p><span>Name : </span> Admin</p>
            <p><span>Email : </span> BCA2133008</p>
            <p><span>Phone : </span>1234567890 </p>
            <div className="logout-btn" >
                <button className='btn' style={{ fontSize: "23px",
    color: "blue"}} onClick={handleAdmin}>Admin Dashboard</button>
            </div>
        </div>
    </div>
    </div>

  )
}
