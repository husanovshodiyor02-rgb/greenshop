import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Showcase from './components/Showcase'
import BlogPosts from './components/BlogPosts'
import Category from './components/Category'
import Banner from './components/Banner'

const App = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Category/>
      <Banner/>
      <BlogPosts/>
      <Footer/>
    </div>
  )
}

export default App