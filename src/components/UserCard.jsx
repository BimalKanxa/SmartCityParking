
import "./userCard.css"

// import { useSelector } from 'react-redux';

export default function UserCard() {
  // const { user } = useSelector(state => state.userProfile);

  return (
    <div className="user-card-container">
        <img src="./avatar.jpg" alt="" />
        <div className="user-card-container-details">
            {/* <p><span>Name : </span> {user && user.fname}</p> */}
            <p><span>Enrollment : </span> BCA2133008</p>
            <p><span>Semester : </span>UG 5th sem </p>
            <div className="logout-btn">
                <button className='btn'>Logout</button>
            </div>
        </div>
    </div>
  )
}
