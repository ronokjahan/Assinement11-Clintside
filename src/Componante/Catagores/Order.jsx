
import { useState } from "react";

import { useLoaderData } from "react-router-dom";


const Order = () => {
  const[users,setusers]=useState([])
    const lodrs=useLoaderData()
    const{name,_id,picture}=lodrs

    const orderhandel=event=>{
        event.preventDefault()
        const from=event.target
        const name=from.name.value 
        const email=from.email.value 
        const quantity=from.quantity.vlue 
        const all={name,email,quantity,picture,_id
        
        }
        console.log(all);
        fetch('http://localhost:3000/order',{
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(all)
         })
         .then(res=>res.json())
         .then(data=>setusers(data))
        
    }
  
    return (
        <div >
            <h1 className="font-bold text-6xl mb-4">{name}</h1>
        <div className="grid grid-cols-2">
          
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={orderhandel} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="password" name="email" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input type="number" id="quantity" name="quantity" min="1"className="input input-bordered" required />
                
              </div>
              
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Order Confarm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Order;