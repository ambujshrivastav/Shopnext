
import {useCookies} from "react-cookie";

import { useState,useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import Cart from "./shopnextcart";

import axios from "axios";

export default function ShopnextDashboard(){
    let navigate=useNavigate();
    const[cookie,setcookie,removecookie]=useCookies();
    const[userid,setuserid]=useState();
    const[category,setcategory]=useState([]);
    

    function handlesignout(){
        removecookie("userid");
        navigate("/login");
    }

    function Loadcategory(){
        axios.get("https://shopnext-x8zh.onrender.com/getcategories")
        .then(response=>{
        
            setcategory(response.data);
        })
    }

    useEffect(()=>{
        if(cookie["userid"]==undefined){
            navigate("/login");
        }else{
            setuserid(cookie["userid"]);
            Loadcategory();
        }
    },[])
    return(
        <div>
        <div className="mt-5 text-dark">
            <div className="dashboard">
                <div className=" d-flex justify-content-center">
           <div> <p id="heading"  >User Dashboard |<span className="bi bi-person-badge"></span><span className="text-primary">{userid}</span> </p>
           
             </div>
             </div>
             <div className="d-flex justify-content-end">
             <button id="signout"className="btn btn-primary bi bi-box-arrow-in-left" onClick={handlesignout}>Sign out</button>
             </div>
             <br/>
             <div className="d-flex justify-content-end">
              <span className="position-fixed"><Cart/></span>
              </div>
              <br/>
            <div className=" d-flex justify-content-center">
             <div className="choose">CHOOSE A PRODUCT CATEGORY</div></div>
              
             <div className=" d-flex justify-content-center">
             <ul style={{listStyle:"none"}} >
                {
                    category.map(item=>
                        <li key={item.category} className="bg-dark fw-bold border rounded mb-2 d-flex justify-content-center"><Link to={"/products/"+item.category} className="itemcategory">{(item.category).toUpperCase()}</Link></li>)
                }
             </ul>             
        </div>
        </div>
        </div>
        </div>
    )
}