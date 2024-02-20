import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/ContextStore";
import Products from "../components/Products";
import Loading from "../components/Loading";

const Home = () => {
  const { productsData, fetchdata, searchInputVal } = useContext(
    productContext
  );
  const [debounceSearchVal, setDebounceSearchVal] = useState("");
  const [priceRange, setPriceRange] = useState("");

  // function of  filter by price
  const filterByPrice = (product) => {
    if (!priceRange) {
      return true;
    }
    if (priceRange === "0-99") {
      return product.price >= 0 && product.price <= 99;
    } else if (priceRange === "100-499") {
      return product.price >= 100 && product.price <= 499;
    } else if (priceRange === "500-999") {
      return product.price >= 500 && product.price <= 999;
    } else if (priceRange === "1000-1499") {
      return product.price >= 1000 && product.price <= 1499;
    } else {
      return product.price >= 1500;
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearchVal(searchInputVal);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInputVal]);

  const filterData =
    productsData &&
    productsData.products &&
    productsData.products
      .filter((product) => filterByPrice(product))
      .filter((product) =>
        product.title.toLowerCase().includes(debounceSearchVal.toLowerCase())
      );

  console.log(filterData);
  return (
    <>
      <div>
        {fetchdata ? (
          <Loading />
        ) : (
          <>
            <div className=" w-1/3 border-none m-1 flex justify-start items-center ">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className=" bg-slate-100 shadow-md ml-6"
              >
                <option value="">select Price Range</option>
                <option value="0-99">Rs. 0-99</option>
                <option value="100-499">Rs. 100-499</option>
                <option value="500-999"> Rs. 500-999</option>
                <option value="1000-1499"> Rs. 1000-1499</option>
                <option value="1500">Rs. 1500+</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-center gap-10 my-2 py-3">
              {filterData && filterData.length > 0
                ? filterData.map((item) => {
                    return (
                      <>
                        <Products key={item.id} item={item} />
                      </>
                    );
                  })
                : "No matches found"}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
