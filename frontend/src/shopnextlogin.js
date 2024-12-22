import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";

import { useState,useEffect } from "react";

import axios from "axios";

import { useCookies } from "react-cookie";


import ReCAPTCHA from "react-google-recaptcha";



export default function ShopnextUserlogin(){


    let navigate=useNavigate();
    const[user,setuser]=useState([]);
    const[cookie,setcookie]=useCookies();
    const[captchacheck,setcaptchacheck]=useState(0);

    
    
 
    
    const formik=useFormik({
        initialValues:{
            UserId:'',
            Password:''
        },
        onSubmit:values=>{
            for(var users of user){
                if(users.UserId==values.UserId && users.Password==values.Password){
                    setcookie("userid",users.UserId,{expires:new Date("2025-12-30 20:30")});
                 navigate("/dashboard");
                   break;
                }
                else if(values.UserId=="Admin" && values.Password=="Admin@123" ){
                    navigate("/admindashboard");
                    break;
                }
                else{
                    navigate("/errorpage");
                }
            }
        }
        
    })

    useEffect(()=>{
      axios.get("https://shopnext-x8zh.onrender.com/getusers")
      .then(response=>{
        setuser(response.data);
      });
      
    },[])
    
    var onChanged=()=>{setcaptchacheck(1)}
    return(
        <div className="d-flex justify-content-center">
        <div id="login" >
            <h4 className="d-flex justify-content-around text-white m-2 p-2 fw-bolder fs-1">Login</h4>
            
            <form onSubmit={formik.handleSubmit}>
                <dl style={{margin:"0"}}>
                    <dt className="text-white ms-5">User id</dt>
                    <dd className="d-flex ms-5 "><span className="bi bi-person-fill bg-white"></span><input type="text" className="inputc p-1" value={formik.values.UserId} onChange={formik.handleChange} name="UserId"/></dd>
                    <dt className="text-white ms-5">Password</dt>
                    <dd className="d-flex  ms-5"><span className="bi bi-key-fill bg-white"></span><input type="password" className="inputc p-1" value={formik.values.Password} onChange={formik.handleChange} name="Password"/></dd>
                    <div className="p-1"><ReCAPTCHA sitekey="6Ld6KowpAAAAAKQUPtrxJdp1vQVWmF3hPojoItF7" onChange={onChanged} className="recaptcha"/></div>
                    </dl>
                    <Link className="d-flex justify-content-center" to="/register">New user? Register</Link>
                
                    <div className="d-flex justify-content-center"><button className="btn btn-primary inputc fs-4 mt-2 mb-4" disabled={(captchacheck==1)?false:true}>Login</button></div>
                    </form>
        </div>
        </div>
    )
}