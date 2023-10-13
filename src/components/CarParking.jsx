import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";


const CarParking = () => {


  // // payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51O0TQ0SJBM2uLICIoPA7oZuoVYA2gsO0F1n80DPnxZxh2Nwo98Lqk4HWcmvmSzyCalmt0pEbhoYrAh5Vf2806sWi00kw5mVtSO"
    );

    const body = {
      products: 10

    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("http://localhost:8000/api/booking-payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  }


  // const data = await axios.get('http://localhost:8000/getlocation').then((response) => {
  //   console.log(response.data);
  // });
  // const datalocation = await fetch("http://localhost:8000/getlocations", {
  //     method: "GET",
  //     headers:{
  //       'Content-Type': "application/json"
  //     },
  //   }).then((response)=>{
  //     console.log(response)
  //   });

  // console.log(datalocation)

  // const response = await fetch("http://localhost:8000/getlocations");
  // const datalocation = await response.json();
  // console.log(datalocation.data);

  // sessionStorage.setItem('data', JSON.stringify(datalocation))
  

  // const DATA =JSON.parse(sessionStorage.getItem('data'))

  // console.log(DATA.data)

    return (
      <>
        <center> 
          <h3 style={{ marginTop: "5%" }}>Car Parking Slots</h3>
        </center>
        <div className="row" style={{ width: "100%" }}>
          <Card style={{ width: "18rem", margin: "2%" }}>
            <Card.Img
              variant="top"
              src="https://imgs.search.brave.com/D2O7ari1V7yUKQjDWocIpmZ1BXPuQhQrrKXC8OEHVjw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LnBh/cmtlYWdsZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MDMvQWRvYmVTdG9j/a183MjI1MzUyOS5q/cGVnP3Jlc2l6ZT0x/MDgwLDcyMyZzc2w9/MQ"
            />
            <Card.Body>
              <Card.Title>dfdfdf</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </Card.Text>
              <Button variant="primary" onClick={makePayment}>
                Book Now
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  
};

export default CarParking;
