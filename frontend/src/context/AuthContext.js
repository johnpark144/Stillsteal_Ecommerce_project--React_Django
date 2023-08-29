import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  // To maintain login (by checking the saved tokens and userInfo every page)
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  );
  const [user, setUser] = useState(
    localStorage.getItem('authTokens')
      ? jwt_decode(localStorage.getItem('authTokens'))
      : null
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Login and Call tokens
  const loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch(
      'https://vyckd353.pythonanywhere.com/api/token/',
      {
        // Backend Site
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value,
        }), // the value of input name (e.target.password)
      }
    );
    let data = await response.json();

    // If it worked
    if (response.status === 200) {
      // Save AuthToken
      setAuthTokens(data);
      setUser(jwt_decode(data.access)); // Decode the AuthToken and set it
      localStorage.setItem('authTokens', JSON.stringify(data)); // Save the token in localStorage

      // If logged in, Bring all the cart lists
      let getCartList = async () => {
        let response = await fetch(
          'https://vyckd353.pythonanywhere.com/api/cartlist/'
        ); // Backend Site
        let data = await response.json();
        data = await data.filter(
          (arr) => arr.username === e.target.username.value
        ); // Only datas for logged-in-User
        if (data[0]) {
          localStorage.setItem('productsInCart', data[0].cartList);
        } // If the cart lists exist, put it in localStorage
      };

      getCartList();
      navigate('/');
      setTimeout(() => {
        window.location.reload();
      }, '700'); // Once navigated, Refresh and display cart list (SPA's downside...)
    } else {
      alert('Something went wrong!');
    }
  };

  // Token Update
  const updateToken = async () => {
    if (authTokens) {
      let response = await fetch(
        'https://vyckd353.pythonanywhere.com/api/token/refresh/',
        {
          // Backend Site
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ refresh: authTokens.refresh }),
        }
      );
      let data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwt_decode(data.access));
        localStorage.setItem('authTokens', JSON.stringify(data));
      } else {
        logoutUser();
      }

      if (loading) {
        setLoading(false);
      }
    }
  };

  // If authTokens exist, function updateToken every 5 mins
  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 300000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  // Signup
  const createUser = async (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password2 = e.target.password2.value;

    if (password === password2 && username && password) {
      let response = await fetch(
        'https://vyckd353.pythonanywhere.com/api/createuser/',
        {
          // Backend Site
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
          }),
        }
      );
      let data = await response.json();
      if (response.status === 200) {
        alert('Signup completed! :)');
        loginUser(e); // If signup succeed, get it logged in
      } else {
        alert(`Failed to create an account, ${data.message}`); // When signup failed from server, ex) username duplicated
      }
    } else {
      alert('Please double check the singup forms'); // When signup failed from client
    }
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem('authTokens');
    localStorage.removeItem('productsInCart');
    setAuthTokens(null);
    setUser(null);
    navigate('/login');
    window.location.reload(); // For cartlist
  };

  // Object-constant to use useContext
  const contextData = {
    user,
    loginUser,
    logoutUser,
    createUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
