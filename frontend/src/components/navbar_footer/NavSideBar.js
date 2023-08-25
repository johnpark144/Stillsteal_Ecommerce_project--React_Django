import { Link } from 'react-router-dom';
import styles from './NavSideBarNavbarFooter.module.css';

export default function NavSideBar({ show, setShowSideBar }) {
  // Menus
  const Menu = ({ linkTo, icon, name }) => {
    return (
      <Link
        to={linkTo}
        className={menuClass}
        onClick={() => {
          setShowSideBar(false);
        }}
      >
        <span className='material-icons'>{icon}</span>
        <span className='mx-4 text-sm font-normal'>{name}</span>
      </Link>
    );
  };

  const menuClass =
    'w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-emerald-500 hover:bg-gradient-to-r from-white to-emerald-100  hover:border-r-4 border-emerald-500 cursor-pointer';
  return (
    <>
      <div className={show ? styles.showNavSideBar : styles.hideNavSideBar}>
        <div className='h-full lg:block my-4 ml-4 shadow-lg relative w-96'>
          <div className='bg-white h-full rounded-2xl dark:bg-gray-700'>
            {/* Logo */}
            <div
              className={`${styles.stillStealLogo} flex justify-center bg-gradient-to-tr from-lime-600 to-emerald-600 bg-clip-text text-transparent`}
            >
              <span className='material-icons-outlined'>
                <Link
                  to='/'
                  onClick={() => {
                    setShowSideBar(false);
                  }}
                >
                  local_shipping
                </Link>
              </span>
            </div>
            {/* Menus */}
            <nav className='mt-6'>
              <div>
                <Menu linkTo='/' icon='cottage' name='Home' />
                <Menu linkTo='/category' icon='category' name='Category' />
                <Menu linkTo='/cart' icon='shopping_cart' name='Cart' />
                <Menu
                  linkTo='/checkout'
                  icon='shopping_cart_checkout'
                  name='Checkout'
                />
                <Menu linkTo='/aboutus' icon='business' name='About Us' />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
