import React from 'react';
import Cartoys from '../Catagores/Cartoys';

const Catagorys = () => {
    return (
        <div>
            <h1 className='text-indigo-500	mt-7 mb-5 text-3xl'>CATEGORIES YOU'LL LOVE</h1>
            <div className=' max-auto'>
               <div >
               <h1 >Action toys</h1>
                <h1>Pre-school-Toys</h1>
                <h1>Eduction-Toys</h1>
                <h1>Elictronic-Toys</h1>
               </div>
               <h1 className='font-semibold text-4xl text-fuchsia-800'>Product chooes </h1>
            </div>
            <Cartoys></Cartoys>
        </div>
    );
};

export default Catagorys;