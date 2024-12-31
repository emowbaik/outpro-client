import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/collection' element={<Collection />}/>
        <Route path='/product/:productId' element={<Product />}/>
        <Route path='/testimonial' element={<Testimonials />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      {/* <Navbar /> */}
    </main>
  )
}

export default App