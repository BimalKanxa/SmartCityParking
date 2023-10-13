// Login.js

import { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the JWT in a secure way (e.g., localStorage or cookies) for future authenticated requests.
        navigate('/')
        // console.log(data.accessToken);
    
        localStorage.setItem('token', data.accessToken)

        sessionStorage.setItem('userEmail', formData.email);
        // console.log(sessionStorage.getItem('userEmail'))
        // Redirect the user to a protected route or perform any other desired actions.
      } else {
        console.log('Login failed');
      } 
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage src="./loginimg.jpg" alt="login form" className="rounded-start w-100" />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                <span className="h1 fw-bold mb-0">Login</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>
                Sign into your account
              </h5>
              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="email"
                  type="email"
                  size="lg"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  type="password"
                  size="lg"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <MDBBtn className="mb-4 px-5" color="dark" size="lg" type="submit">
                  Login
                </MDBBtn>
              </form>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                Don&apos;t have an account? <a href="/register" style={{ color: '#393f81' }}>Register here</a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
