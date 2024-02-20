import React, { useContext } from "react";
import { productContext } from "../context/ContextStore";

const BagItem = (props) => {
    const {item} = props;
    const { setBagItems, bagItems } = useContext(productContext);

    const removeFromBag = (id)=>{
        const updatedBag =  bagItems.filter( (product)=> product.id !== id)
        setBagItems(updatedBag)

    }

  return (
    <>
      <div className=" h-36 w-[100%] flex items-center gap-3 bg-slate-50 shadow-md">
        <div className="h-full bg-orange-200 w-[25%] overflow-hidden ">
          <img
            className="object-top h-full w-full object-cover"
            src={item.images[0]}
          />
        </div>
        <div className="item-right-part w-2/3 ">
          <div className=" font-medium text-xl flex justify-between">
            <h1 className=" text-base font-semibold">{item.title}</h1>
            <p className="font-bold cursor-pointer" onClick={()=> removeFromBag(item.id)}>X</p>
          </div>
          <div className="font-normal text-base">{item.brand}</div>
          <div className="w-[80%] h-6 overflow-hidden ">
            <p className="text-sm font-light overflow-ellipsis">
              {item.description}
            </p>
          </div>

          <div>
            <span className=" text-sm font-medium">Rs. {item.price}</span>
            <span className=" text-xs line-through text-gray-400  ">
              {" "}
              Rs.{item.discountPercentage}
            </span>
            <span className=" text-xs text-orange-600">
              {" "}
              ({item.discountPercentage}% OFF)
            </span>
          </div>
          <div >
            <span className=" text-sm text-blue-600  ">7 days</span> return available
          </div>
        </div>
      </div>


      
    </>
  );
};

export default BagItem;
