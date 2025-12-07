import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Showcase from './components/Showcase'
import BlogPosts from './components/BlogPosts'

const App = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <BlogPosts/>
      <Footer/>
    </div>
  )
}

export default App