import React, { useEffect, useState } from "react";
import Sale from "../assets/img/sale.png";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Category = () => {
  const { addToCart, addToWishlist } = useContext(ShopContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://69369720f8dc350aff316930.mockapi.io/green")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <section className="container1 flex flex-col sm:flex-row gap-10">
      <div className="w-[260px] p-5">
        <h2 className="text-lg font-bold text-[#3d3d3d] mb-4">Categories</h2>

        <ul className="space-y-3 text-[#3d3d3d]">
          <li className="text-[#46a358] font-semibold">House Plants (33)</li>
          <li>Potter Plants (12)</li>
          <li>Seeds (65)</li>
          <li>Small Plants (39)</li>
          <li>Big Plants (23)</li>
          <li>Succulents (17)</li>
          <li>Terrariums (19)</li>
          <li>Gardening (13)</li>
          <li>Accessories (18)</li>
        </ul>

        <div className="mt-8">
          <h3 className="font-bold text-[#3d3d3d] mb-2">Price Range</h3>

          <input type="range" min="39" max="1230" className="w-full" />

          <p className="mt-1 text-sm">Price: $39 – $1230</p>

          <button className="mt-3 bg-[#46a358] text-white w-full py-2 rounded-md">
            Filter
          </button>
        </div>

        <div className="mt-8">
          <h3 className="font-bold text-[#3d3d3d] mb-2">Size</h3>

          <ul className="space-y-2">
            <li>Small (119)</li>
            <li>Medium (86)</li>
            <li>Large (78)</li>
          </ul>
        </div>

        <img src={Sale} alt="sale" className="mt-8 w-full rounded-md" />
      </div>

      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex gap-8 text-[#3d3d3d] font-medium">
            <h3 className="border-b-2 border-[#46a358] pb-1 text-[#46a358] cursor-pointer">
              All Plants
            </h3>
            <h3 className="hover:text-[#46a358] cursor-pointer">
              New Arrivals
            </h3>
            <h3 className="hover:text-[#46a358] cursor-pointer">Sale</h3>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-[#3d3d3d]">Sort by:</p>
            <select>
              <option>Default sorting</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item) => (
            <div key={item.id} className="cursor-pointer group">
              <div className="w-full h-[300px] flex items-center justify-center rounded-md relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-contain h-[250px] transition-all duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 group-hover:opacity-100 md:opacity-0 opacity-100 transition-all duration-300">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#46a358] hover:text-white transition"
                  >
                    <i className="ri-shopping-cart-2-line text-xl"></i>
                  </button>

                  <button
                    onClick={() => addToWishlist(item)}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#46a358] hover:text-white transition"
                  >
                    <i className="ri-heart-line text-xl"></i>
                  </button>

                  <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#46a358] hover:text-white transition">
                    <i className="ri-search-line text-xl"></i>
                  </button>
                </div>
              </div>

              <h3 className="text-[#3d3d3d] mt-4 font-medium">{item.title}</h3>

              <p className="text-[#46a358] font-bold mt-1">
                ${Number(item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
