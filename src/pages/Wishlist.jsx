import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);

  return (
    <div className="container1 py-10">
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p>Wishlist bo‘sh</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border p-4 rounded-md">
              <img src={item.img} alt="" className="h-40 mx-auto" />
              <h3 className="mt-3 font-medium">{item.title}</h3>
              <p className="text-[#46a358] font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
