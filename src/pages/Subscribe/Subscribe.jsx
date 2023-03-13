import { Alert, Input, Row, Select, Spin } from 'antd';
import classNames from 'classnames';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PageHelmet from '../../components/common/Helmet';
import FooterHome from '../../components/footer/FooterHome';
import { usePostSubscriptionMutation } from '../../features/subscription/subscriptionApiSlice';
import styles from './subscribe.module.scss';
const Subscribe = () => {
  const [formValue, setFormValue] = useState({
    title: '',
    surname: '',
    firstname: '',
    email: '',
  });
  const [msg, setMsg] = useState('');
  const [subscribe, { isLoading }] = usePostSubscriptionMutation();

  const dispatch = useDispatch();
  const handleChangeFormValue = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmitSubscribe = async (formValue) => {
    if (formValue.email === '') {
      setMsg('Email must not empty');
    } else {
      const respone = await subscribe(formValue);
      if (respone?.error?.status === 500) setMsg('Email already subscribed');
      else setMsg('Success');
    }
  };

  const handleChangeSelect = (value) => {
    setFormValue({ ...formValue, title: value });
  };

  return (
    <React.Fragment>
      <PageHelmet pageTitle='Subscribe' />

      {/* Start Breadcrump Area */}
      <div
        className='rn-page-title-area pt--120 pb--100 bg_image bg_image--18 '
        data-black-overlay='5'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='rn-page-title text-center pt--100'>
                <h2 className='title theme-gradient'>
                  <FormattedMessage id='SUBSCRIBE_TO_NEWSLETTERS' />
                </h2>
                <p>... </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Portfolio Details */}
      <div className='rn-portfolio-details ptb--120 bg_color--1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='portfolio-details'>
                <div className='inner'>
                  {' '}
                  <h3>RECEIVE THE LATEST NEWS FROM DANG & ASSOCIATES, LTD. </h3>
                  <p className='subtitle'>Legal terms</p>
                  <p>
                    By completing this form, you accept that DANG & ASSOCIATES,
                    LTD., the data controller, will collect and process your
                    personal data for the purpose of sending our newsletters to
                    you by email, based on your choices made above. Your
                    personal data will be processed in accordance with our
                    Personal Data Protection Policy. You may at any time
                    exercise your rights of access, correction or deletion of
                    your personal data or revoke your consent and unsubscribe
                    from our newsletters by using the contact form.
                  </p>
                  <div className={classNames(styles.subscribeSection)}>
                    <div
                      className='col-lg-6'
                      style={{
                        border: '1px solid #f0d1a2',
                        padding: '20px',
                        borderRadius: '10px',
                      }}
                    >
                      <Row className='mb--10'>
                        <Select
                          defaultValue='Mr'
                          style={{ width: 80 }}
                          onChange={handleChangeSelect}
                          options={[
                            { value: 'Mr', label: 'Mr' },
                            { value: 'Mrs', label: 'Mrs' },
                            { value: 'Miss', label: 'Miss' },
                            { value: 'Ms', label: 'Ms' },
                          ]}
                        />
                      </Row>
                      <Row>
                        <Input
                          name='surname'
                          className={styles.subscribeInput}
                          placeholder='Surname'
                          value={formValue.surname}
                          onChange={handleChangeFormValue}
                        />
                      </Row>
                      <Row>
                        <Input
                          name='firstname'
                          className={styles.subscribeInput}
                          placeholder='Firstname'
                          value={formValue.firstname}
                          onChange={handleChangeFormValue}
                        />
                      </Row>
                      <Row>
                        <Input
                          name='email'
                          className={styles.subscribeInput}
                          placeholder='Email'
                          value={formValue.email}
                          onChange={handleChangeFormValue}
                        />
                      </Row>

                      {!isLoading && msg && (
                        <p>
                          {msg == 'Success' ? (
                            <Alert
                              className={styles.subscribeInput}
                              message={msg}
                              type='success'
                              style={{ margin: '10px 0' }}
                            />
                          ) : (
                            <Alert
                              className={styles.subscribeInput}
                              message={msg}
                              type='error'
                              style={{ margin: '10px 0' }}
                            />
                          )}
                        </p>
                      )}
                    </div>
                    <div
                      className={classNames('col-lg-6', styles.subscribeButton)}
                    >
                      {isLoading ? (
                        <Spin />
                      ) : (
                        <button
                          className='rn-button-style--2 btn-solid'
                          type='submit'
                          value='submit'
                          name='submit'
                          id='mc-embedded-subscribe'
                          onClick={() => handleSubmitSubscribe(formValue)}
                        >
                          Subscribe{' '}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}

      {/* Start Related Work */}
      <div className='portfolio-related-work pb--120 bg_color--1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                <span className='theme-color font--18 fontWeight600'>
                  Related Content
                </span>
                <h2>Our More Blogs</h2>
              </div>
            </div>
          </div>
          <div className='row mt--10'>
            {/* Start Single Portfolio */}
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='related-work text-center mt--30'>
                <div className='thumb'>
                  <Link to='/About'>
                    <img
                      src={require('../../assets/images/portfolio/related-image-01.jpg')}
                      alt='Portfolio-images'
                    />
                  </Link>
                </div>
                <div className='inner'>
                  <h4>
                    <Link to='/About'>More about us</Link>
                  </h4>
                </div>
              </div>
            </div>
            {/* End Single Portfolio */}
            {/* Start Single Portfolio */}
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='related-work text-center mt--30'>
                <div className='thumb'>
                  <Link to='/news'>
                    <img
                      src={require('../../assets/images/portfolio/related-image-02.jpg')}
                      alt='Portfolio-images'
                    />
                  </Link>
                </div>
                <div className='inner'>
                  <h4>
                    <Link to='/news'>
                      {' '}
                      <FormattedMessage id='NEWS' />
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            {/* End Single Portfolio */}
          </div>
        </div>
      </div>
      {/* End Related Work */}
      <FooterHome />
    </React.Fragment>
  );
};
export default Subscribe;
