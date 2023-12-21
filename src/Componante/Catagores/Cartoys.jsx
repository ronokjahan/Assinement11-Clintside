
import { useEffect, useState } from "react";
import CarToyscard from "./CarToyscard";


const Cartoys = () => {
    const[users,setusers]=useState([])
    useEffect(()=>{
        fetch('https://assinement111-serverside.vercel.app/user')
        .then(res=>res.json())
        .then(data=>setusers(data))
    },[])
    return (
        <div>
            <h1>{users.length}</h1>
         <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4">
         {
                users.map(car=><CarToyscard 
                key={car._id}
                car={car}
                
                ></CarToyscard>)
            }
         </div>
        </div>
    );
};

export default Cartoys;
