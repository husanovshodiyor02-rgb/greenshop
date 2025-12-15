import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [wishlistItems, setWishlistItems] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // 🔥 SAQLASH
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  return (
    <ShopContext.Provider
      value={{ cartItems, wishlistItems, addToCart, addToWishlist }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
