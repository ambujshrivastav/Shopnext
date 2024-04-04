
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




export default function ShopnextUserRegister(){

   let navigate=useNavigate();
    const formik=useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Age:0,
            Mobile:'',
            Subscribed:false
                       },
                       validationSchema:yup.object({
                        UserId:yup.string().required(),
                        UserName:yup.string().required(),
                        Password:yup.string().min(4,'password is too small').max(12,'password is too long').required().matches(/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])/,'password must have one uppercase,digit and special character'),
                        Age:yup.number('age must be a number').min(1).required(),
                        Mobile:yup.string().min(10,'number must be 10 digit').max(10,'number must be 10 digit').required().matches(/\d{10}/ , 'only number are allowed'),
                        
                              
                }),

            onSubmit:values=>{
                axios.post("https://shopnext-x8zh.onrender.com/registeruser",values);
                alert("Register successfully");
                navigate("/login")
            }
        })
      

        
 
    return(
        <div>
        <div className="registers" >
           
            <div className="bi bi-person-fill signup">Sign Up</div>
            <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}  >
               <dl style={{margin:"0px"}} >
                    <dt>User id</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserId")}></input></dd>
                    <dd className="text-danger" >{formik.errors.UserId}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps("UserName")}/></dd>
                    <dd className="text-danger" >{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" {...formik.getFieldProps("Password")}/></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Age</dt>
                    <dd><input type="number" {...formik.getFieldProps("Age")}/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile Number</dt>
                    <dd><input type="text" {...formik.getFieldProps("Mobile")}/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dd className="form-switch"><input className="form-check-input" type="checkbox" hidden {...formik.getFieldProps("Subscribed")}/></dd>
                    </dl>
                    <Link className="ms-1 mt-1 " to="/login">Sign In<span className="ms-1 bi bi-arrow-right-square-fill"></span></Link><br/>
                    <button  className="btn btn-primary fw-bold fs-4 registerbutton"  disabled={(formik.isValid)?false:true}>Register</button>
                  </form>
                
                    <br/>
        </div>
        
        </div>
        </div>
    )
}