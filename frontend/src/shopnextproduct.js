 
 import { Link, useParams } from "react-router-dom";
  import { useState,useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Cart from "./shopnextcart";



export function Shopnextproducts(props){
    let param=useParams();
    const[productcategory,setproductcategory]=useState('');
    const[product,setproduct]=useState([]);
    
    
    useEffect(()=>{                
        setproductcategory(param.category);
        axios.get("https://shopnext-x8zh.onrender.com/getproducts")
        .then(response=>{
            setproduct(response.data);
        })
    },[])
 
    
    
    return(
        <div>
           <div className="d-flex position-fixed bg-dark text-white productheader" > <h2 className="m-auto text-primary">{productcategory.toUpperCase()}</h2>
           <div className="d-flex me-2  justify-content-between">
           <span className="mt-2 me-2"><Cart/></span>
             <Link to="/dashboard" className="btn btn-primary bi bi-arrow-left rounded text-center fs-5 fw-bolder mt-3 me-2 backarrow" >Back</Link></div>
             </div>  
          <div className="row m-0">
          <span className="col-7 scrollproduct">
            <div className="d-flex flex-wrap productcard">
                {
                    product.filter(item=>item.category==productcategory).map(product=>
                        <div className="card bg-body-secondary cardi" key={product.id}>
                            <img src={product.image} className="card-img-top" height="100"/>   
                            <div><Link style={{textDecoration:"none", color:"black"}} to={""+product.id}>{product.title}</Link></div>
                            </div>)
                }
            </div>
            </span>
            <span className="col-5" >
            <Outlet/>
            </span>
            </div>
        </div>
    )
}