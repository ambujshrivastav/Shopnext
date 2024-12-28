import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import ShopnextDashboard from "./shopnextdashboard";
import Shopnexthome from "./shopnexthome";
import ShopnextUserlogin from "./shopnextlogin";
import { Shopnextproducts } from "./shopnextproduct";
import { Productdetail } from "./shopnextproductdetail";
import ShopnextUserRegister from "./shopnextregister";
import About from "./shopnextfooter";
import { Contact,Services,Termofuse} from "./shopnextfooter";
import ShopnextAdmin from "./shopnextadmin";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"; 



export default function Shopnextindex(){
    const[open,setopen]=useState(false);
    function toggle(){
        setopen((open)=>(!open));
    }
    return(
        
        <div  style={{fontSize:"1.5vw"}} >
            <BrowserRouter>
            <header className="bg-dark text-white text-center fixed-top d-flex border-bottom" >
              <h1 className="bi bi-unity p-4 fst-italic">Shop-Next </h1>
                            <nav className="mt-5 navstart">
              
                    <div className={`navlist ${open?"isopen":""}`} >
                    <div>
                    <Link to="/home" onClick={toggle} className="firstnav btn btn-dark text-white  fs-3 w-100">Home</Link>
                    </div>
                    <div>
                    <Link to="/register" onClick={toggle} className="firstnav btn btn-dark text-white  fs-3 w-100">Register</Link>
                    </div>
                    <div>
                    <Link to="/login" onClick={toggle} className="firstnav btn btn-dark text-white  fs-3 w-100" >Login</Link>
                    </div>
                    <div>
                    <Link to="/dashboard" onClick={toggle} className="firstnav btn btn-dark text-white fs-3 w-100">Dashboard</Link>
                    </div>
                    </div>
                          
                </nav>
                <span className="bi bi-list hamburger" onClick={toggle} ></span>
                </header>
            <section  >
                <main className="vw-100" id="fullpage">
                    <Routes>
                    
                        <Route path="/" element={<Shopnexthome/>}/>
                        <Route path="home" element={<Shopnexthome/>}/>
                        <Route path="login" element={<ShopnextUserlogin/>}/>
                        <Route path="register" element={<ShopnextUserRegister/>}/>
                        <Route path="dashboard" element={<ShopnextDashboard/>}/>
                        <Route path="products/:category" element={<Shopnextproducts/>}>
                        <Route path=":id" element={<Productdetail/>}/>
                        </Route>
                        <Route path="About" element={<About/>}/>
                        <Route path="Contact" element={<Contact/>}/>
                        <Route path="Services" element={<Services/>}/>
                        <Route path="admindashboard" element={<ShopnextAdmin/>}/>
                        <Route path="termofuse" element={<Termofuse/>}/>
                        <Route path ="errorpage" element={<div className="mt-5" style={{height:"350px"}}>
                            <h1 className="text-danger" >INVALID CREDENTIALS</h1>
                            <br/>
                            <Link to="/login">Try again</Link>
                        </div>}/>
                        <Route path="*" element={<div>
                            <code>NOT FOUND:Page that you requested is not FOUND</code>
                        </div>}/>
                    </Routes>
                </main>
                
            
           </section>
           <div id='socialbarcontainer'> 
           <div id="socialbar" className="fixed-bottom">
           
                <a href="https://www.facebook.com" target="blank" className="text-white  "><div className="bi bi-facebook"></div></a>
        <a href="https://www.twitter.com" target="blank" className="text-white  "><div className="bi bi-twitter"></div></a>
        <a href="https://www.instagram.com" target="blank" className="text-white  "><div className="bi bi-instagram"></div></a>
        <a href="https://www.youtube.com" target="blank" className="text-white "><div className="bi bi-youtube"></div></a>
          
        </div>
        </div>
        <footer id="footer" className="bg-dark" style={{fontSize:"1.5vmax"}}>
        <div className="d-flex justify-content-evenly">
            
        <span><Link className="text-white" to="/About" >About</Link></span>
            <span><Link  className="text-white" to="/Services">Services</Link></span>
            <span><Link  className="text-white" to="/Termofuse">Terms of Use</Link></span>
            <span><Link  className="text-white" to="/Contact">Contact</Link></span>
            
           
            
        </div>
        <div className="d-flex justify-content-around">
         <span id="copyright">Copyright &copy;2025|All Rights Reserved</span>
         
        </div>
        </footer>
        </BrowserRouter>
         </div>
    )
}