import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Product from './components/Product'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
