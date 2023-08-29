import { createContext, useContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import useFetch from '../hooks/useFetch';

const CartContext = createContext();
export default CartContext;

export const CartProvider = ({ children, isLoggedIn }) => {
  let { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState(
    () => JSON.parse(localStorage.getItem('productsInCart')) || []
  ); // If the cartlist exist in localStorage, bring it every page. If none, empty list

  // CustomHook(useFetch : Call all datas from API)
  let data = useFetch('https://vyckd353.pythonanywhere.com/api/products/'); // Backend Site

  // To set Products in cartlist
  useEffect(() => {
    setProducts(
      data.filter(
        (arr) => cartList.includes(arr.id) // check numbers in cartlist and arr's id from data (to compare 2 arrays)
      )
    );
  }, [data, cartList]);

  // Calculate all prices in Cart
  let tempArr = 0;
  for (let product of products) {
    tempArr =
      tempArr +
      Number(
        product.price *
          cartList.reduce((cnt, element) => cnt + (product.id === element), 0)
      );
  }

  // Whenever put products in the cart, save it in localStorage (also in server for loggedin-User)
  useEffect(() => {
    if (isLoggedIn) {
      const loginCart = async () => {
        await fetch(`https://vyckd353.pythonanywhere.com/api/cartlist/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: user?.username,
            cartList: cartList,
          }),
        });
      };
      loginCart();
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartList));
  }, [cartList]);

  // Object-constant to use useContext
  const contextData = {
    cartList,
    setCartList,
    products,
    setProducts,
    tempArr,
    data,
  };

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};
