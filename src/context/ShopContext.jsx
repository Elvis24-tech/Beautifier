import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;

      return [...prev, product];
    });
  };

  // ADD TO WISHLIST
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;

      return [...prev, product];
    });
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // REMOVE FROM WISHLIST
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);