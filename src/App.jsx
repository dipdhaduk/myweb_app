import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Login from './Components/Login'
import Registration from './Components/Registration'
import About from './Components/About'
import Service from './Components/Service'
import Wishlist from './Components/Wishlist'
import Shop from './Components/Shop'
import Productdetail from './Components/Productdetail'
import Contact from './Components/Contact'
import Checkout from './Components/Checkout'
import store from './Slice/Store/store'
import { Provider } from 'react-redux'

// public key pk_test_51SFq2rGwkKHPcWH9F3FnpMlkxtUNkIFOT1jlLMRLOFDAGUM60bVWZRPqe1B7kz8eOB27lyoOHKVhilhKbiXEZRyA00Vb4i4p48   
//react ke liye
//secret key - backend ke liye 

// https://68e5edbf21dd31f22cc36bec.mockapi.io/furnitureapp/furnitureapi


export default function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/login' element={<Login></Login>}> </Route>
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/service' element={<Service></Service>}></Route>
          <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
          <Route path='/productdetail' element={<Productdetail></Productdetail>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        </Routes>
      </Router>
      </Provider>
    </div>
  )
}