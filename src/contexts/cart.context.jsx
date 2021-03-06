import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState();

  return (
    <CartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
