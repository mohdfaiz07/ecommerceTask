import React, { useContext, useState } from 'react'
import { productContext } from '../context/ContextStore'

const Products = (props) => {
    const {item} = props
    const [foundElement, setFoundElement] = useState(false)
    const {bagItems ,setBagItems} = useContext(productContext)

    const addToBagHandler = ()=>{
        console.log('add to bag')   
        setFoundElement(true)
        setBagItems( (prev)=> [...prev, item]  )

    }

    const removeToBagHandler = (id)=>{
        console.log('remove to bag')
        setFoundElement(false)
        const updatedBag =  bagItems.filter( (bagItem)=> id !== bagItem.id  )
         setBagItems(updatedBag)   

    }

  return (
    <>
    <div className="  flex flex-col items-center mb-4 shadow-md hover:shadow-xl">
        <div className=" h-64 w-72 overflow-hidden relative">
          <img
            className="h-full w-full object-cover object-top"
            src={item.images[0]}
            alt="item image"
          />
          <div className=" absolute bottom-2 left-3 bg-slate-100 opacity-80 px-1 shadow-sm">
            <h6 className=" text-xs opacity-100" >
              {item.rating} ⭐
            </h6>
          </div>
        </div>
        <div >
          <h1 className="text-xl capitalize font-semibold">{item.brand}</h1>
        </div>
        <div className=' font-normal'>{item.title}</div>
        <div >
          <span className=' text-sm font-medium' >Rs.  {item.price}</span>
          <span className=' text-xs line-through text-gray-400  '> Rs.{item.discountPercentage}</span>
          <span className=' text-xs text-orange-400'>  ({item.discountPercentage}% OFF)</span>
        </div>
  
        {foundElement ? (
          <button onClick={()=> removeToBagHandler(item.id)}  className="px-5 py-1 m-3 rounded-sm bg-red-700 text-white hover:shadow-md">
            Remove
          </button>
        ) : (
          <button
            onClick={addToBagHandler}
            className="px-5 py-1 m-3 rounded-md bg-pink-200 hover:shadow-md"
          >
             Add to Bag
          </button>
        )}
      </div>
   
   
    </>
  )
}

export default Products