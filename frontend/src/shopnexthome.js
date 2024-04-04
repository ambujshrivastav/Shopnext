import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

export default function Shopnexthome(){
    return(
        <div className="mt-5 homeheader">
          <div className="d-flex justify-content-around">
            <div   style={{marginLeft:"100px"}}>
            <h2 className="bi bi bi-house-fill text-dark fs-1">Shop-Next Home</h2>
            <Link to="/register" className="bi bi-person-plus-fill fs-3 m-2">New User</Link>
            <span className="m-4 text-dark fs-2" >|</span>
            <Link to="/login" className="bi bi-person-badge-fill fs-3">Existing User</Link>
            </div>
            </div>
            <Carousel style={{marginTop:"5vh",width:"99.6vw",marginLeft:"0.2vw"}} data-bs-theme="light">
      <Carousel.Item>
        <img 
          className="carouselh d-block vw-100"
          src="nextshop1.jpg"
          alt="First slide"
        />
         <Carousel.Caption>
          <h1 className="bg-black">HASSLE FREE SHOPING</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block vw-100 carouselh"
          src="shopnext2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className="bg-black">QUALITY PRODUCTS</h1>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block vw-100 carouselh"
          src="shopnext4.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className="bg-black">QUICK DELIVERY</h1>
        </Carousel.Caption>
    </Carousel.Item>
    
    </Carousel>
        </div>
    )
}