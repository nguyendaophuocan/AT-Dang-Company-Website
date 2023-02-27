import { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import logo from '../../assets/images/logo/logo-at.png';
import logo2 from '../../assets/images/logo/logo-at.png';

import Scrollspy from 'react-scrollspy';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  selectCurrentToken,
  selectCurrentUser,
} from '../../features/auth/authSlice';
import { SearchOutlined } from '@ant-design/icons';
import { updateSearchValue } from '../../features/search/searchSlice';
function HeaderNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const [visible, setVisible] = useState(false);
  const searchRef = useRef();
  const [searchValue, setSearchValue] = useState('');
  const isUserLoggedIn = useSelector(selectCurrentUser);
  const usertoken = useSelector(selectCurrentToken);

  const handleModalSearch = (value, searchRef = '') => {
    setVisible(value);
    searchRef?.current.focus();
  };

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (e, searchValue) => {
    e.preventDefault();
    dispatch(updateSearchValue(searchValue));
    // handleModalSearch(false);
    navigate(`/search?term=${searchValue}`);
  };
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
            <SearchOutlined
              style={{
                color: 'white',
                fontSize: '24px',
                marginBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleModalSearch(true, searchRef)}
            />
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
      <Modal
        title='Search Dang & Associates, LTD.'
        centered
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={'100%'}
        className={styles.container}
        footer={null}
      >
        <form onSubmit={(e) => handleSearch(e, searchValue)}>
          <input
            type='text'
            name='search'
            value={searchValue}
            onChange={handleChangeSearch}
            id='search'
            ref={searchRef}
            placeholder='Search '
            style={{
              border: 'none',
              height: '50px',
              width: '50%',
              fontSize: '20px',
            }}
          />
        </form>
      </Modal>
      ;
    </header>
  );
}

export default HeaderNavbar;
