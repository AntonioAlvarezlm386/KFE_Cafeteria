import { API_URL } from '../config.js'

export const getProducts = async (endpoint)=>{
    try {
      const rawResponse = await fetch(API_URL+endpoint,{
        method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
      })
  
      const products = await rawResponse.json()
      localStorage.setItem("products", JSON.stringify(products))
    } catch (error) {
      console.error(error)
    }
  }


export const sendSale = async (endpoint, data) =>{
    try {
      const rawResponse = await fetch(API_URL+endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          user: data.user,
          total: data.total,
          products: data.products
        })
      });

      const response = await rawResponse.json()
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }