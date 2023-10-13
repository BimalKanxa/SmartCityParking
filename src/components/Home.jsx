import '../css/Home.css'
import BikeParking from './BikeParking'
import CarParking from './CarParking'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <div id='hero'>


<div>
     <header>
<div className="container1 header-section1 flex1" >
  <div className="header-left1">
    <h1>&quot;Driving Innovation in Parking Management – Smart and Seamless&quot;</h1>
    <h4>Redefining Urban Parking</h4><br />
    <p className='hero-para'>Our groundbreaking Smart City Parking project is revolutionizing urban mobility. Say goodbye to circling the block endlessly; we&apos;re making parking effortless, efficient, and eco-friendly. Join us on the road to a smarter, more sustainable urban future. Experience urban parking like never before, where every spot is a tap away – because parking should be smart and seamless</p>
    <a href="/about" className="primary-button1 get-started-btn1">Learn More!</a>
  </div>
  <div className="header-right1">
    <img src="https://imgs.search.brave.com/khInlwPtRF77cAELfFUmo5gc3Y4fQnbZpU2yZ-_EMBo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zNi5l/YXN0ZXJucGVhay5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTkvMDgvcGhvdG8t/MTUwNjUyMTc4MTI2/My1kODQyMmU4MmYy/N2EuanBn" alt="banner image" />
  </div>
</div>
</header>

</div>
</div> 
<<<<<<< HEAD
{/* <CarParking/> */}
<BikeParking/>
=======
<CarParking/>
<BikeParking/> 
>>>>>>> 4a185fb30e8311a73df3dd723d687cb7518a652e
<Footer/>
    </>
  )
}

export default Home