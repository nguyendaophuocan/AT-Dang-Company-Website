import { useState } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import logo from '../../assets/images/logo/logo-at.png';
import logo2 from '../../assets/images/logo/logo-at.png';

import Scrollspy from 'react-scrollspy';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { AutoComplete } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  selectCurrentToken,
  selectCurrentUser,
} from '../../features/auth/authSlice';
function HeaderNavbar() {
  const dispatch = useDispatch();
  function menuTrigger() {
    document.querySelector('.header-wrapper')?.classList.toggle('menu-open');
  }
  function cLoseMenuTrigger() {
    document.querySelector('.header-wrapper')?.classList.remove('menu-open');
  }
  window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value > 100) {
      document.querySelector('.header--fixed').classList.add('sticky');
    } else {
      document.querySelector('.header--fixed').classList.remove('sticky');
    }
  });

  const handleLogout = () => {
    dispatch(logOut());
  };

  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const [options, setOptions] = useState([]);

  const isUserLoggedIn = useSelector(selectCurrentUser);
  const usertoken = useSelector(selectCurrentToken);

  return (
    <header className='header-area formobile-menu header--fixed default-color'>
      <div className='header-wrapper'>
        <div className='header-left'>
          <div className={classNames('logo', styles.headerLogo)}>
            <Link to='/'>
              <img
                className={classNames('logo-1', styles.logo1)}
                src={logo}
                alt='Logo Images'
              />
              {/* <img
                className={classNames('logo-2', styles.logo2)}
                src={logo2}
                alt='Logo Images'
              /> */}
            </Link>
          </div>
        </div>
        <div className='header-right'>
          <nav className='mainmenunav d-lg-block'>
            <Scrollspy
              className='mainmenu'
              currentClassName='is-current'
              offset={-200}
            >
              <li>{isUserLoggedIn && <Link to='/admin'>Admin</Link>}</li>
              <li>{isUserLoggedIn && <Link to='/document'>Document</Link>}</li>
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
                <a
                  href='https://collectibles.atdang.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  onclick='window.open(https://collectibles.atdang.com)'
                >
                  Collectibles
                </a>
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
            {/* <Input
              placeholder='Search'
              suffix={<SearchOutlined />}
              style={{ width: 150, height: 50 }}
            ></Input> */}
            <div>
              <AutoComplete
                options={options}
                style={{ width: 130 }}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder='Search'
              />
            </div>
          </div>
          {isUserLoggedIn && (
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
