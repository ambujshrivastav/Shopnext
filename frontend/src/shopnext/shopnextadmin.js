import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
export default function ShopnextAdmin(){
    const[user,setuser]=useState([]);
    let params=useParams();

    function deleteuser(id){
        axios.delete(`http://localhost:4000/deleteuser/${id}`);
        window.location.reload(false);
        };

    function updateuser(id){
        axios.put(`http://localhost:4000/updateuser/${id}`);
        window.location.reload(false);
        };

        function updateusers(id){
            axios.put(`http://localhost:4000/updateusers/${id}`);
            window.location.reload(false);
            };
            

    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
        .then(response=>{
            setuser(response.data);
        })
    },[]);
    
    return(
        <div className="text-dark" id="admin" style={{marginTop:"5vh"}}>
          <div className="d-flex justify-content-center p-4" style={{marginTop:"4vh"}}>  <h1>Admin Dashboard</h1></div>
            <table className="table table-bordered table-light table-responsive table-hover border border-5 border-dark ps-3">
            <thead className="text-dark ps-3">
                                <th className="ps-3">Name</th>
                                <th className="ps-3">Id</th>
                                <th className="ps-3">Mobile</th>
                                <th className="ps-3">Subscription</th>
                                <th className="ps-5">Update</th>
                                <th className="ps-3">Delete</th>
                            </thead>
                {
                    user.map(item=>
                        <tbody>
                            
                        <tr key={item.UserId}>
                        <td className="ps-4" >{item.UserName}</td>
                        <td >{item.UserId}</td>
                        <td >{item.Mobile}</td>
                        <td className="ps-5">{(item.Subscribed==true)?"Yes":"No"}</td>
                        <td><button onClick={()=>updateuser(item.UserId)} className="btn btn-primary">Subscribe</button>|
                        <button onClick={()=>updateusers(item.UserId)} className="btn btn-primary ">Unsubscribe</button></td>
                        <td><button onClick={()=>deleteuser(item.UserId)} className="btn btn-primary w-75">Delete</button></td>
                        </tr>
                        </tbody> )
                }
                
            </table>
        </div>
    )
}