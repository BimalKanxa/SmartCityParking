import '../css/Register.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


function Register() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("successful")
        toast.success("Registered successfully");
        setTimeout(()=>{
          navigate('/login');
        }, 1000)

      } else {
        console.log("failed")
      }
    } catch (error) {
      // Handle any network or other errors
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='./loginimg.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Register!</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Create an Account with us!</h5>
<form onSubmit={handleSubmit}>

                <MDBInput wrapperClass='mb-4' label='Full Name' id='fullname' type='text' size="lg" name="fname"
                  value={formData.fname}
                  onChange={handleChange}/>

                <MDBInput wrapperClass='mb-4' label='Phone Number' id='phone' type='number' size="lg" name="phone"
                  value={formData.phone}
                  onChange={handleChange}/>

                <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg"  name="email"
                  value={formData.email}
                  onChange={handleChange}/>

                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" name="password"
                  value={formData.password}
                  onChange={handleChange}/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>

              </form>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="/login" style={{color: '#393f81'}}>Login here</a></p>
 
            

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
          
      </MDBCard>

    </MDBContainer>
  );
}

export default Register;