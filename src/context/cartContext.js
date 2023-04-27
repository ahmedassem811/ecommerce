import axios from 'axios'
import React, {  createContext } from 'react'


export const cartStoreContext = createContext()


export default function CartContextProvider({children}) {



    async function addProductToCart(proId){
        try {
            const {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/cart' , {
                "productId": proId
              } , {
                headers:{'token':localStorage.getItem('tkn')}
              }
                )
                console.log(data.status)

                if(data.status === "success"){
                    return true ;
                } else {
                    return false ;
                }
            
        } catch (error) {
            console.log('error is ',error)
        }
    }





  return <cartStoreContext.Provider value={{addProductToCart}} >

    {children}
        
        
    </cartStoreContext.Provider>
  
}
