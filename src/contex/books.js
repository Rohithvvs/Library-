import { createContext } from "react";
import { useState } from "react";
const BooksContex = createContext();
function Provider ({children}) {
  
    return
        <BooksContex.Provider value={{}}> 
        {children}
        </BooksContex.Provider>
    };
 
    

    

export {Provider}
export default BooksContex; 