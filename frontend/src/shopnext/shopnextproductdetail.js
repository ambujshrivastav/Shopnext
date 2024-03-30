
import {  useParams } from "react-router-dom";

import { useEffect,useState} from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { addToCart } from "./shopnextslicer";  

import { useDispatch } from "react-redux";


export function Productdetail(){

    const[product,setproduct]=useState([]);
    

    let params=useParams();
     
    let navigate=useNavigate();

    const dispatch = useDispatch();
     
     function handleback(){
        navigate("/products/"+product[0].category)
     }

    useEffect(()=>{
       axios.get(`http://localhost:4000/getproducts/${params.id}`)
       .then(response=>{
        setproduct(response.data);
       })
    },[params.id]);

    const HandleAddToCart=(product)=>{
        dispatch(addToCart(product));
        
    }
    return(
        <div className="productdetails border border-dark border-opacity-25 text-dark position-fixed"  >
        <div className="d-flex" ><span className="d-flex justify-content-center ms-5 fw-bolder w-75">PRODUCT  DETAILS</span><button className="btn btn-secondary bi bi-x-lg" onClick={handleback}></button></div>
        {
                       product.map(item=>
                      <div key={item.title} className="">
                        <dl>
                        <dt>Preview</dt>
                        <dd className="d-flex justify-content-center"><img  src={item.image} style={{width:"20vw",height:"20vh"}}/></dd>
                        <dt>Title</dt>
                        <dd>{item.title}</dd>
                        <dt>Price</dt>
                        <dd>₹{item.price}</dd>
                        <dt>Rating</dt>
                        <dd className="bi bi-star-fill">{item.rating.rate}</dd>
                        </dl>
                        <button id={item.id} onClick={()=>HandleAddToCart(item)} className="btn btn-primary w-100">Add To Cart</button> 
                       </div>)
                
                    }
            </div>
    )
}