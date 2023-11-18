


const CarRow = ({carbooking,handeldelet,handelupdat}) => {
    console.log(carbooking);
    
    const{name,email,picture ,_id  }=carbooking
   

    return (
        
            <tr>
        <th>
        <button onClick={()=>handeldelet(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={picture} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          {name}
          <br/>
          
        </td>
        <td>{email}</td>
        <th>
          <button onClick={()=>handelupdat(_id)} className="btn btn-ghost btn-xs">Confarm</button>
        </th>
      </tr>
            
        
    );
};

export default CarRow;