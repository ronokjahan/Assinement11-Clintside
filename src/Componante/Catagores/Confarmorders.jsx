import { useContext, useEffect } from "react";
import { Authcontext } from "../Login-Regstion/Authprovider";
import { data } from "autoprefixer";
import { useState } from "react";
import CarRow from "./CarRow";



const Confarmorders = () => {
    const[users,setusers]=useState([])
  const{user,loading}=useContext(Authcontext)
  if(loading){

    return <progress className="progress w-56"></progress>
  }
  
   useEffect(()=>{
    const url=`https://assinement111-serverside.vercel.app/user?email=${user?.email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setusers(data))


   },[])

   
   const handeldelet=(id)=>{
     const proced=confirm('Are you delete')
     if(proced){
       fetch(`https://assinement111-serverside.vercel.app/user${id}`,{
         method:'DELETE'
       })
       .then(res=>res.json())
       .then(data=>{console.log(data)
       
         if(data.deletedCount>0){
           alert('Delete succesful')
           const remaing=users.filter(users=>users._id !== id)
           setusers(remaing)
           
           
 
         }
       
       
       }
      
       
       )
       
     }
    }
  


const handelupdat=id=>{
  fetch(`https://assinement111-serverside.vercel.app/user${id}`,{
    method:'PATCH',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify({sataus:"confirm"})
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
}


    return (
        <div>
            <h1>{users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Confarm</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
     
     
    </tbody>
    {/* foot */}
  {
    users.map(carbooking=><CarRow  
    
    key={carbooking._id}
    carbooking={carbooking}
    users={users}
    handeldelet={handeldelet}
    handelupdat={handelupdat}
    >

    </CarRow>)
  }
    
  </table>
</div>
        </div>
    );
};

export default Confarmorders;
