// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Showcase from './components/Showcase'
// import BlogPosts from './components/BlogPosts'
// import Category from './components/Category'
// import Banner from './components/Banner'
// import ShopProvider from "./context/ShopContext";

// const App = () => {
//   return (
//     <ShopProvider>
//       <div>
//         <Header />
//         <Showcase />
//         <Category />
//         <Banner />
//         <BlogPosts />
//         <Footer />
//       </div>
//     </ShopProvider>
//   );
// };


// export default App


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import BlogPosts from "./components/BlogPosts";
import Category from "./components/Category";
import Banner from "./components/Banner";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import ShopProvider from "./context/ShopContext";

const App = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Showcase />
                <Category />
                <Banner />
                <BlogPosts />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
