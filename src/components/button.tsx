import React from 'react'

import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export const Loader = () =>{
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      }, 5000)
  }, [])
  return (

   
   
        <ClipLoader className="loader"
        color="#36d7b7"
    
    loading={loading}
    
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
  >
   
  </ClipLoader>
   
  
    
    
   
  
  );
};

