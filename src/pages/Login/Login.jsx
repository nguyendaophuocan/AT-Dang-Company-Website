import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterTwo from '../../components/footer/FooterHome';
import {
  getTokenFromLocalStorage,
  storeTokenInLocalStorage,
} from '../../components/hooks/useAuth';
import { useUser } from '../../components/hooks/useGetUser';
import { API_ROUTES, APP_ROUTES } from '../../utils/constans';
import styles from './login.module.scss';

function Login() {
  const [formVal, setFormVal] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeValue = (e) => {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  useEffect(() => {
    // if (user || authenticated || getTokenFromLocalStorage()) {
    //   navigate(APP_ROUTES.DASHBOARD);
    // }
  }, [user, authenticated]);
  const handleSubmit = () => {
    // try {
    //     setIsLoading(true);
    //     const response = await axios({
    //       method: 'post',
    //       url: API_ROUTES.SIGN_IN,
    //       data: formVal
    //     });
    //     if (!response?.data?.token) {
    //       console.log('Something went wrong during signing in: ', response);
    //       return;
    //     }
    //     storeTokenInLocalStorage(response.data.token);
    //     navigate(APP_ROUTES.DASHBOARD)
    //   }
    //   catch (err) {
    //     console.log('Some error occured during signing in: ', err);
    //   }
    //   finally {
    //     setIsLoading(false);
    //   }

    //temp
    try {
      setIsLoading(true);
      if (formVal.email == 'admin' && formVal.password == '123') {
        storeTokenInLocalStorage('at');
        navigate(APP_ROUTES.DASHBOARD);
      }
    } catch (err) {
      console.log('Some error occured during signing in: ', err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <header className='header-area formobile-menu header--fixed default-color'>
        <div className='header-wrapper' id='header-wrapper'></div>
      </header>
      <div className={classNames('contact-form--1', styles.loginWrapper)}>
        <div className='container'>
          <div className='row row--35 align-items-start'>
            <div className='col-lg-6 order-1 order-lg-1'>
              <div className='thumbnail mb_md--30 mb_sm--30'>
                <img
                  src={require('../../assets/images/about/about-9.jpg')}
                  alt='trydo'
                />
              </div>
            </div>
            <div className='col-lg-4 order-2 order-lg-2'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Login</h2>
              </div>
              <div className='form-wrapper'>
                <label htmlFor='item01'>
                  <input
                    type='text'
                    name='email'
                    id='item01'
                    value={formVal.email}
                    onChange={handleChangeValue}
                    placeholder='Email address *'
                  />
                </label>

                <label htmlFor='item02'>
                  <input
                    type='password'
                    name='password'
                    id='item02'
                    value={formVal.password}
                    onChange={handleChangeValue}
                    placeholder='Password *'
                  />
                </label>
                <button
                  className='rn-button-style--2 btn-solid'
                  type='submit'
                  value='submit'
                  name='submit'
                  id='mc-embedded-subscribe'
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo />
    </>
  );
}

export default Login;
