import classNames from 'classnames';
import styles from './header.module.scss';
import logo from '../../assets/images/logo/logo-at.png';
import Scrollspy from 'react-scrollspy';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  getTokenFromLocalStorage,
  removeTokenInLocalStorage,
} from '../hooks/useAuth';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
function HeaderNavbar() {
  function menuTrigger() {
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  }
  function cLoseMenuTrigger() {
    document.querySelector('.header-wrapper')?.classList.remove('menu-open');
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    removeTokenInLocalStorage('at');
    navigate(0);
  };

  return (
    <header className='header-area formobile-menu header--fixed default-color'>
      <div className='header-wrapper' id='header-wrapper'>
        <div className='header-left'>
          <div className={classNames('logo', styles.headerLogo)}>
            <a href='/'>
              <img
                className={classNames('logo-1', styles.logo1)}
                src={logo}
                alt='Logo Images'
              />
              <img
                className={classNames('logo-2', styles.logo2)}
                src={logo}
                alt='Logo Images'
              />
            </a>
          </div>
        </div>
        <div className='header-right'>
          <nav className='mainmenunav d-lg-block'>
            <Scrollspy
              className='mainmenu'
              items={[
                'home',
                'about',
                'news',
                'collectibles',
                'careers',
                'contact',
              ]}
              currentClassName='is-current'
              offset={-200}
            >
              <li>
                <Link to='/'>Home</Link>
              </li>

              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/news'>News</Link>
              </li>
              <li>
                <a href='/collectibles'>Collectibles</a>
              </li>
              <li>
                <Link to='/career'>Careers</Link>
              </li>

              <li>
                <Link to='/contact'>Contact us</Link>
              </li>
            </Scrollspy>
          </nav>{' '}
          <div className={styles.logOutBtn}>
            <Input
              placeholder='Search'
              suffix={<SearchOutlined />}
              style={{ width: 170, height: 50 }}
            ></Input>
          </div>
          {getTokenFromLocalStorage() && (
            <div className={styles.logOutBtn}>
              <button className='rn-btn' onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
          {/* Start Humberger Menu  */}
          <div className='humberger-menu d-block d-lg-none pl--20'>
            <span onClick={menuTrigger} className='menutrigger text-white'>
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className='close-menu d-block d-lg-none'>
            <span onClick={cLoseMenuTrigger} className='closeTrigger'>
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderNavbar;
