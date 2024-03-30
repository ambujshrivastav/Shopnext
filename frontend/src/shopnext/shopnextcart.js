import Popup from 'reactjs-popup';

import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
 import { deleteproduct, emptyCart } from './shopnextslicer';
 import { useDispatch } from 'react-redux';


export default function Cart(){

    const[total,settotal]=useState([]);
    const count=useSelector((state)=>state.store.cartCount);
    const cartitem=useSelector((state)=>state.store.cartItems);
    const dispatch=useDispatch();
    const[display,setdisplay]=useState({});
    const[picture,setpicture]=useState({});
    
    function pricetotal(){
        let sum=0;
        {
            cartitem.map((item)=>
                {
                    sum=sum+item.price
                }

            )
        }

        settotal(sum);}

        const Deleteall=(products)=>{
            dispatch(emptyCart(products));
            
        }
         
         const Deleteproduct=(Id)=>{
            for (let i= 0;i<=cartitem.length;i++){
                if(Id ==cartitem[i].id){
                    dispatch(deleteproduct(i));
                break;
            }
        }   
        }

        function Imagecheck(){
            if(cartitem.length!=0){
                
                    setpicture({visibility:'hidden'})
                    }
            else{
                setpicture({ backgroundImage:"url(/emptycart.jpg)",
                    backgroundSize:"contain",
                    backgroundRepeat:"no-repeat",
                    height:"80%",
                 width:"70%",
                 margin:"1% 15%"
                })
            }
        }

        function checkcartitem(){
            if(cartitem.length==0){
               setdisplay({
                     
                     visibility:"hidden"
                    });
            
               }
             else{
                setdisplay({
                    visibility:'visible'
                })
             }
                 
             }

        useEffect(()=>{
            pricetotal();
            checkcartitem();
            Imagecheck();
        },[cartitem.length])

    

    
     return(
        <div  >
    <Popup trigger=
				{<button className="btn btn-dark cardbutton" >
                    <span className="text-white fw-bold bi bi-cart4 carti">Cart[{count} ]</span></button> }
				modal  >
				{close  => (
      
      
    <div className='popupup'>
        
         <span className='d-flex justify-content-between bg-dark text-white sticky-top '>
           <h3 className="d-flex justify-content-center w-100 p-2">CART ITEMS</h3> 
        <button className="close btn btn-close btn-close-white fs-3 " onClick={close}>
            
          </button>
		  </span>
    <div style={picture} >
     <div style={display}  >
          <table className="table table-hover" style={{fontSize:"0.8em"}}>
            <thead>
                <tr>
                    <th>PREVIEW</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th><button  className="bi bi-trash-fill btn btn-dark text-white" onClick={()=>Deleteall(cartitem)}></button></th>
                </tr>
                </thead>
                <tbody >
                    {
                        cartitem.map(items=>
                            <tr key={items.id}>
                                <td><img  src={items.image} width="40" height="40"/></td>
                                <td>{items.title}</td>
                                <td>₹{items.price}</td>
                                <td><button id={items.id}  className="bi bi-trash3 text-bg-dark " onClick={()=>Deleteproduct(items.id)}></button></td>
                            </tr>)
                    }
                    <tr >
                        <td></td>
                        <td>TOTAL<span className="ms-2">=</span></td>
                        <td>₹{total}</td>
                        <td></td>

                    </tr>
                </tbody>
               
            </table>
            <div className="d-flex justify-content-center w-100">
            <button className="btn btn-primary fs-4" >Proceed to Buy</button> </div>
            </div>
      </div>
    </div>
    )}
				
			</Popup>
            </div>)
}