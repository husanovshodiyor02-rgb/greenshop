import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="container1 py-10">
      <h2 className="text-2xl font-bold text-[#3d3d3d] mb-6">Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart bo‘sh</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-md relative">
              <img src={item.img} alt="" className="h-40 mx-auto" />
              <h3 className="mt-3 font-medium">{item.title}</h3>
              <p className="text-[#46a358] font-bold">${item.price}</p>

              
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
