import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { loadStripe } from "@stripe/stripe-js";


const BikeParking = () => {
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
  return (
    <>

 <center><h3 style={{marginTop:"5%"}}>Parking Slots</h3></center>
<div className='row' style={{width:"100%"}}  >
    <Card style={{ width: '18rem', margin:"2%" }} >
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Click Here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%" }}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary" onClick={makePayment}>Click Here</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%" }}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%" }}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary" onClick={makePayment}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%" }}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%"}}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary" onClick={makePayment}>Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%"}}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin:"2%"}}>
      <Card.Img variant="top" src="https://imgs.search.brave.com/KFgRBPXG9EyuMrjdyOxtFC68ExW469P0jgcV29UnX8c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/YXJraW5nXzExMjct/MjkxNC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" />
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
        <Button variant="primary" onClick={makePayment}>Book Slot</Button>
      </Card.Body>
    </Card>
    </div>

    </>
  )
}

export default BikeParking