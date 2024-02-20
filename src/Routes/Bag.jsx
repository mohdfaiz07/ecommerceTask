import React, { useContext } from "react";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { productContext } from "../context/ContextStore";

const Bag = () => {
  const { bagItems } = useContext(productContext);

  return (
    <>
      <div className="flex px-36 gap-5 py-5 ">
        <div className="flex flex-col gap-4">
          {bagItems &&
            bagItems.map((item) => {
              return <BagItem key={item.id} item={item} />;
            })}
        </div>
        <BagSummary />
      </div>
    </>
  );
};

export default Bag;
