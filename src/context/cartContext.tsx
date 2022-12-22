import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface iCartContextProps{
    children: React.ReactNode
}

interface iBurguerItens{
  id: number,
  name: string,
  category: string,
  price: number,
  img: string,
}

interface iCartItens{
  id: number,
  quantity: number,
} 

interface iCartProviderData{
  products: iBurguerItens[],
  currentSale: iCartItens[],
  getQuantity: (id:number) => void,
  addQuantity: (id:number) => void,
  decreaseQuantity:(id:number) => void,
  removeCartItem: (id:number) => void
  openCart: () => void,
  closeCart: () => void,
  openModal: boolean,
  removeAllItems: () => void,
  cartQuantity: number,
}

export const CartContext = createContext({} as iCartProviderData)

export const CartProvider = ({ children } : iCartContextProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [products, setProducts] = useState<iBurguerItens[]>([])
  const [currentSale, setCurrentSale] = useState<iCartItens[]>([])
  
  const token = localStorage.getItem("@token")
  
 
    if(token){
    const getProducts = async () => {
      try{
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const response = await api.get<iBurguerItens[]>("products")

        setProducts(response.data)
      }catch(error){
        console.error(error)
      } 

    }
    getProducts()}

  const cartQuantity = currentSale.reduce((acc, itens) => itens.quantity + acc, 0)

  const openCart = () => {setOpenModal(true)}
  const closeCart = () => {setOpenModal(false)}
  const removeAllItems = () => setCurrentSale([])

  function getQuantity (id: number){
    return currentSale.find(item => item.id === id)?.quantity || 0
  }

  function addQuantity(id: number){
    setCurrentSale(item => {
      if(item.find(newItem => newItem.id === id) == null){
        return [...item, {id, quantity: 1}]
      } else {
        return item.map(newItem => {

          if(newItem.id === id) {
            return {...newItem, quantity: newItem.quantity + 1}
          } else {
            return newItem
          }
        })
      }
    })
  }

  function decreaseQuantity(id: number){
    setCurrentSale(item => {
      if(item.find(newItem => newItem.id === id)?.quantity === 1){
        return item.filter(item => item.id !== id)
      } else {
        return item.map(newItem => {
          
          if(newItem.id === id) {
            return {...newItem, quantity: newItem.quantity - 1}
          } else {
            return newItem
          }
        })
      }
    })
  }

  function removeCartItem (id: number){
    setCurrentSale(itens => {
      return itens.filter(item => item.id !== id)
    })
  }
  
      
      return (
        <CartContext.Provider value={{
        products, 
        currentSale, 
        getQuantity, 
        addQuantity, 
        decreaseQuantity,
        removeAllItems,
        removeCartItem, 
        cartQuantity,
        openModal,
        openCart,
        closeCart}}>
            {children}
        </CartContext.Provider>
    )

}