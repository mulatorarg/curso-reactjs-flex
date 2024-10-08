import { useState } from "react";
import { cartContext } from "./CartContext";

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantityTotal, setQuantityTotal] = useState(0);

  const getProductQuantity = (product_id) => {
    const productoExistente = cart.find(prod => prod.id === product_id);

    //if (productoExistente) {
    //  productoExistente.qty ?? 0;
    //} else {
    //  return 0;
    //}

    productoExistente ? productoExistente.qty: 0

  }

  const addProduct = (item, qty) => {
    const productoExistente = cart.find(prod => prod.id === item.id);

    if (productoExistente) {
      const actualCart = cart.map(prod => {
        if (prod.item.id === item.id) {
          return { ...prod, qty: prod.qty + qty };
        } else {
          return prod;
        }
      });
      setCart(actualCart);
      setQuantityTotal(prev => prev + qty);
      setTotal(prev => prev + (item.price * qty));
    } else {
      setCart(prev => [...prev, { item, qty }]);
      setQuantityTotal(prev => prev + qty);
      setTotal(prev => prev + (item.price * qty));
    }
  }


  const deleteProduct = (id) => {
    const deletedProduct = cart.find(prod => prod.item.id === id);
    const actualCart = cart.filter(prod => prod.item.id !== id);

    setCart(actualCart);
    setQuantityTotal(prev => prev - deletedProduct.qty);
    setTotal(prev => prev - (deletedProduct.item.price * deletedProduct.qty));
  }


  const cleanCart = () => {
    setCart([]);
    setQuantityTotal(0);
    setTotal(0);
  }


  return (
    <cartContext.Provider value={{
      cart, total, quantityTotal,
      getProductQuantity, addProduct, deleteProduct, cleanCart
    }}>
      {children}
    </cartContext.Provider>
  )

}
