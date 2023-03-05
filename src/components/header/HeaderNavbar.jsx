import { useState, useRef } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import logo from '../../assets/images/logo/logo-at.png';
import logo2 from '../../assets/images/logo/logo-60x60.png';

import Scrollspy from 'react-scrollspy';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button, Dropdown, Modal, Select, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  selectCurrentToken,
  selectCurrentUser,
} from '../../features/auth/authSlice';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { updateSearchValue } from '../../features/search/searchSlice';
import { FormattedMessage } from 'react-intl';
import { updateLanguageValue } from '../../features/language/languageSlice';

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

  const handleChangeSelectLanguage = (language) => {
    dispatch(updateLanguageValue(language));
  };
  const handleSearch = async (e, searchValue) => {
    e.preventDefault();
    dispatch(updateSearchValue(searchValue));
    // handleModalSearch(false);
    navigate(`/search?term=${searchValue}`);
  };

  <Select
    defaultValue='Projects'
    style={{ width: 100, padding: '0' }}
    bordered={false}
    options={[
      { value: 'collectibles', label: 'Collectibles' },
      { value: 'vi-VN', label: 'Vie' },
    ]}
    onChange={handleChangeSelectLanguage}
  />;

  const items = [
    {
      key: '1',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://collectibles.atdang.com'
        >
          Dang's Collectibles
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://collectibles.atdang.com'
        >
          Dang's Bespoke Market Research
        </a>
      ),
    },
  ];

  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === '3') {
      setOpen(false);
    }
  };

  const handleOpenChange = (flag) => {
    setOpen(flag);
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
              <img
                className={classNames('logo-2', styles.logo2)}
                src={logo2}
                alt='Logo Images'
              />
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
              <li>
                {isUserLoggedIn && (
                  <Link to='/document'>
                    <FormattedMessage id='DOCUMENT' />
                  </Link>
                )}
              </li>
              <li>
                <Link to='/'>
                  <FormattedMessage id='HOME' />
                </Link>
              </li>

              <li>
                <Link to='/about'>
                  {' '}
                  <FormattedMessage id='ABOUT_US' />
                </Link>
              </li>
              <li>
                <Link to='/news'>
                  {' '}
                  <FormattedMessage id='NEWS' />
                </Link>
              </li>

              <li>
                <Link to='/career'>
                  {' '}
                  <FormattedMessage id='CAREERS' />
                </Link>
              </li>

              <li>
                <Link to='/contact'>
                  {' '}
                  <FormattedMessage id='CONTACT_US' />
                </Link>
              </li>
              <li>
                {/* <a
                // href='https://collectibles.atdang.com'
                // target='_blank'
                // rel='noopener noreferrer'
                // onclick='window.open(https://collectibles.atdang.com)'
                >
                  <Select
                    defaultValue='Projects'
                    style={{ width: 100, padding: '0' }}
                    bordered={false}
                    options={[
                      { value: 'collectibles', label: 'Collectibles' },
                      { value: 'vi-VN', label: 'Vie' },
                    ]}
                    onChange={handleChangeSelectLanguage}
                  />
                </a> */}
              </li>
            </Scrollspy>
          </nav>{' '}
          <div className={styles.projectSelection}>
            {/* <Select
              defaultValue='Projects'
              style={{ width: 140, padding: '0' }}
              bordered={false}
              showArrow={false}
              options={[
                { value: 'Collectibles', label: 'Collectibles' },
                {
                  value: 'Bespoke Market',
                  label: 'Bespoke Market',
                },
              ]}
              onChange={handleChangeSelectLanguage}
            /> */}
            <Dropdown
              menu={{
                items,
                onClick: handleMenuClick,
              }}
              onOpenChange={handleOpenChange}
              open={open}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <FormattedMessage id='PROJECTS' />
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className={styles.searchIcon}>
            <SearchOutlined
              style={{
                color: '#c6c9d8',
                fontSize: '24px',
                marginBottom: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleModalSearch(true, searchRef)}
            />
          </div>
          <div className={styles.countrySelection}>
            <Select
              defaultValue='Eng'
              style={{ width: 57, padding: '0' }}
              bordered={false}
              options={[
                { value: 'en-US', label: 'Eng' },
                { value: 'vi-VN', label: 'Vie' },
              ]}
              onChange={handleChangeSelectLanguage}
            />
          </div>
          {isUserLoggedIn && (
            <div className={styles.logOutBtn}>
              <button className='rn-btn' onClick={handleLogout}>
                <FormattedMessage id='LOG_OUT' />
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
        title='Dang & Associates, LTD.'
        centered
        open={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={'100%'}
        className={styles.container}
        footer={null}
      >
        <form onSubmit={(e) => handleSearch(e, searchValue)}>
          <FormattedMessage id='SEARCH' defaultMessage='Search'>
            {(SEARCH) => (
              <input
                type='text'
                name='search'
                value={searchValue}
                onChange={handleChangeSearch}
                id='search'
                ref={searchRef}
                placeholder={SEARCH}
                style={{
                  border: 'none',
                  height: '50px',
                  width: '50%',
                  fontSize: '20px',
                }}
              />
            )}
          </FormattedMessage>
        </form>
      </Modal>
      ;
    </header>
  );
}

export default HeaderNavbar;
