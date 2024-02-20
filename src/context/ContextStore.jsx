import React,{ createContext, useEffect, useState } from "react";


export const productContext = createContext();

const ContextStore = ({ children }) => {
  const [productsData, setProductsData] = useState([])
  const [searchInputVal,setSearchInputVal] = useState('')
  const [fetchdata, setFetchdata] = useState(true)
  const [error , setError] = useState(null)
  const [bagItems, setBagItems] = useState([])
  const [inputVal, setInputVal] = useState('')

    //Api url
    const API_URL = "https://dummyjson.com/products";;
  
    // fetching Api fucntion
    const fetchingProductData = async (url) => {
    try {
      setFetchdata(true)
      const response = await fetch(url);
      const data = await response.json(); 
      setProductsData(data)
      setError(null)
      
    } 
    catch (error) {
      setError(error.message || 'please try after sometime')
      console.log(error);
    }
    finally{
      setFetchdata(false);
    }
  };

  // call api fetching function using useEffect; 

  useEffect(() => {
    fetchingProductData(API_URL);
  }, []);

  

  return (
    <>
      <productContext.Provider value={{productsData, setProductsData,
         searchInputVal, setSearchInputVal, fetchdata, error, bagItems, setBagItems, inputVal, setInputVal}}>
        {children}
    </productContext.Provider>
    </>
  );
};

export default ContextStore;
