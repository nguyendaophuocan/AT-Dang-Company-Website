import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FooterTwo from '../../components/footer/FooterHome';
import { API_ROUTES, APP_ROUTES } from '../../utils/constans';
import { useLoginMutation } from './authApiSlice';
import { setCredentials } from './authSlice';
import styles from './login.module.scss';

function Login() {
  const [formVal, setFormVal] = useState({ email: '', password: '' });
  const [errMsg, setErrMsg] = useState('');
  const userRef = useRef();
  const errRef = useRef();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [formVal.email, formVal.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formVal;
    try {
      const userData = await login(formVal).unwrap();
      console.log('userData', userData);
      dispatch(setCredentials({ ...userData, email }));
      setFormVal({ ...formVal, email: '', password: '' });
      navigate('/welcome');
    } catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      // errRef.current.focus();
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
                    ref={userRef}
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
