import React, { useContext } from 'react'
import { productContext } from '../context/ContextStore';

const BagSummary = () => {
    const { bagItems } = useContext(productContext);
    console.log(bagItems)
 const totalMrp =  bagItems.reduce( (accVal, currentVal)=>{
        return accVal + currentVal.price
    },0 )
    console.log(totalMrp)

  return (
    <div className=" w-[35%]  bg-slate-50 shadow-md px-5  py-3">
        <div className='text-xs font-medium'>
        PRICE DETAILS <span className='font-semibold'>(1 items)</span> 
        </div>

        <div className='flex justify-between text-xs font-normal py-1'>
          <span >Total MRP</span>
          <span >{totalMrp}</span>
        </div>

        <div className='flex justify-between text-xs font-normal py-1' >
          <span >Discount on MRP</span>
          <span >
            -₹700
          </span>
        </div>
        <div className="flex justify-between text-xs font-normal py-1">
          <span >Convenience Fee</span>
        <span>
          <span className=' line-through'>₹99 </span>
          <span className='text-green-500 uppercase ml-1'>  free</span>
        </span>
        </div>
        <div className="flex justify-between text-xs font-normal py-1">
            
          <span >Platform Fee</span>
          <span className='text-green-500 uppercase'>Free</span>
        </div>
        <hr />
        <div className="flex justify-between text-base font-semibold py-3">
          <span >Total Amount</span>
          <span >{totalMrp}</span>
        </div>
     
      <button className=" w-full bg-pink-500 py-1">
        <h1 className='uppercase font-bold text-white '>Place Order</h1>
      </button>
    </div>
  );
};



export default BagSummary