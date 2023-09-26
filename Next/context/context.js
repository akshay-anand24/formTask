'use client'
import { createContext, useState,useContext } from "react";
export const loading_data = createContext();



export default function Context({ children }) {
    const [loading, setLoading] = useState(false);
  
    return (
      <loading_data.Provider value={{ loading, setLoading }}>
        {children}
      </loading_data.Provider>
    );
  }
  export const LoadContext=()=>useContext(loading_data)
