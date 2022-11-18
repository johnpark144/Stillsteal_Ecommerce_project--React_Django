import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import NavSideBar from './components/navbar_footer/NavSideBar';
import AboutUs from './routes/AboutUs';
import Cart from './routes/Cart';
import Category from './routes/Category';
import CategoryDetail from './routes/CategoryDetail';
import Checkout from './routes/Checkout';
import Home from "./routes/Home";
import Login from './routes/Login';
import Signup from './routes/Signup';
import Navbar from './components/navbar_footer/Navbar';
import Footer from './components/navbar_footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false)

  useEffect(() => {
    showSideBar ? (
      document.body.style.overflowY = 'hidden'
    ) : (
      document.body.style.overflowY = 'scroll'
    )
  }, [showSideBar])

  // Create pastSearchList in localStorage in advance
  if (!JSON.parse(localStorage.getItem('pastSearchList'))) {
    localStorage.setItem('pastSearchList', JSON.stringify([]))
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider isLoggedIn={isLoggedIn}>

          <Navbar setIsLoggedIn={setIsLoggedIn} setShowSideBar={setShowSideBar} />
          <NavSideBar show={showSideBar ? true : false} setShowSideBar={setShowSideBar} />

          <div className='App' onClick={() => { setShowSideBar(false) }}>
            <Routes>
              <Route exact path='/' element={<Home isLoggedIn={isLoggedIn} />} />
              <Route exact path='/category' element={<Category isLoggedIn={isLoggedIn} />} />
              <Route exact path='/category/:id' element={<CategoryDetail isLoggedIn={isLoggedIn} />} />
              <Route exact path='/cart' element={<Cart isLoggedIn={isLoggedIn} />} />
              <Route exact path='/checkout' element={<Checkout isLoggedIn={isLoggedIn} />} />
              <Route exact path='/aboutus' element={<AboutUs isLoggedIn={isLoggedIn} />} />
              {!isLoggedIn && <Route exact path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />}
              {!isLoggedIn && <Route exact path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />}
            </Routes>
          </div>
          <Footer />

        </CartProvider>
      </AuthProvider>
    </BrowserRouter >
  );
}

export default App;