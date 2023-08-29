import React, { useContext, useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MenusGreenbg from '../components/Home_MenusGreenbg';
import AnimationButton from '../components/Cart_AnimationButton';
import CartContext from '../context/CartContext';
import styles from './Home.module.css';
import { throttle } from 'lodash';

export default function Home() {
  let { cartList, setCartList } = useContext(CartContext); //state management with useContext To use cartlist globally
  const [products, setProducts] = useState([]);
  const [scrollYValue, setScrollYValue] = useState(window.scrollY);

  // Call 3 products randomly
  useEffect(() => {
    (async () => {
      let response = await fetch(
        'https://vyckd353.pythonanywhere.com/api/products/'
      ); // Backend Site
      let data = await response.json();
      data = data.sort(() => Math.random() - 0.5);
      setProducts(data.slice(0, 3));
    })();
  }, []);

  // Whenever scroll event happen, Throttle works and Change the Scroll Y Value
  const handleScroll = throttle(() => {
    setScrollYValue(window.scrollY);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={styles.home}>
      {/* Menus, Green background */}
      <MenusGreenbg />
      {/* Image, letter */}
      <div className={styles.imgContainer}>
        <div className={styles.imgMsg}>
          <h3>Hot deal </h3>
          <h1>Fashion </h1>
          <h1>Collection</h1>
          <h1>2023</h1>
          <Link to='/category#' className={styles.moreBtn}>
            <button>More Items</button>
          </Link>
        </div>
      </div>
      {/* Products */}
      <div className={styles.productsContainer}>
        <div className={styles.hrTag}>
          <h2>Products</h2>
          <hr />
        </div>
        <div className={styles.products}>
          {products.map((product) => (
            <div
              key={product.id}
              className={
                scrollYValue > 790
                  ? `${styles.product} ${styles.show}`
                  : `${styles.product} ${styles.hidden}`
              }
            >
              {/* Product Image, Name, Price */}
              <Link to={`/category/${product.id}`}>
                <img
                  alt={product.name}
                  className={styles.productImg}
                  src={product.image}
                />
                <h3 style={{ color: '#dddddd' }}>
                  {product.name.length >= 30
                    ? product.name.slice(0, 30) + '...'
                    : product.name}
                </h3>
              </Link>
              <div className='flex text-gray-400 flex-col sm:flex-row'>
                <h3>${product.price}&nbsp;</h3>
                <h3 className='text-red-500 line-through'>
                  {product.prevPrice ? '$' + product.prevPrice : ''}
                </h3>
              </div>
              {/* ADD TO CART Button */}
              <AnimationButton
                name='ADD TO CART'
                onClick={() => {
                  setCartList([...cartList, product.id]);
                }}
              />
            </div>
          ))}
        </div>
        {/* More Items Button */}
        <Link to='/category#'>
          <div className={styles.moreBtn}>
            <button>More Items</button>
          </div>
        </Link>
      </div>
    </div>
  );
}
