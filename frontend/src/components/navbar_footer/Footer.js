import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavSideBarNavbarFooter.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerMenus}>
          {/* Category */}
          <ol className={styles.category}>
            <li>Category</li>
            <Link to='/category#' state={{ category: 'MENS' }}>
              <li>Mens</li>
            </Link>
            <Link to='/category#' state={{ category: 'WOMENS' }}>
              <li>Womens</li>
            </Link>
            <Link to='/category#' state={{ category: 'FOOD' }}>
              <li>Food</li>
            </Link>
            <Link to='/category#' state={{ category: 'FUNITURE' }}>
              <li>Funiture</li>
            </Link>
            <Link to='/category#' state={{ category: 'DIGITAL' }}>
              <li>Digital</li>
            </Link>
          </ol>
          {/* About Us */}
          <ol className={styles.aboutUs}>
            <li>About Us</li>
            <Link to='/aboutus#' state={{ category: 'MENS' }}>
              <li>FAQ</li>
              <li>Contact</li>
              <li>Map</li>
            </Link>
          </ol>
          {/* Address, Email */}
          <ol className={styles.addressEmail}>
            <li>Address</li>
            <li>Passadena, TX</li>
            <li>Email</li>
            <li>vyckd354@gmail.com</li>
          </ol>
          {/* SNS */}
          <ol className={styles.snsLogo}>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='fa fa-facebook-official' />
            </a>
            <a
              href='https://github.com/johnpark144/'
              target='_blank'
              rel='noreferrer'
            >
              <li className='fa fa-github' />
            </a>
            <a
              href='https://www.instagram.com//'
              target='_blank'
              rel='noreferrer'
            >
              <li className='fa fa-instagram' />
            </a>
          </ol>
        </div>
        {/* Copyright */}
        <div className={styles.copyright}>
          <h3>CEO : Johnpark / Address : Passadena Tx</h3>
          <h3>Copyright © 2023 All rights reserved</h3>
        </div>
      </div>
    </>
  );
}
