import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const loader=useLoaderData([])
    const{picture,name,_id,price,Rating}=loader
    console.log(loader);
    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={picture} alt="Shoes" className="rounded-xl w-96" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-3xl">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div>
            <p className='text-3xl font-semibold'>price:$ <span className='text-2xl font-bold'>{price}</span> </p>
          </div>
          <div className="card-actions">
           <Link to={`/order/${_id}`} className='mb-4 mt-3'> <button className="btn btn-primary">Order Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CarDetails;