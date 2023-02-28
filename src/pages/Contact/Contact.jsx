import React, { useState } from 'react';
import PageHelmet from '../../components/common/Helmet';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';
import ContactTwo from '../../elements/contact/ContactTwo';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Footer from '../../components/footer/FooterOtherPage';
import styles from './contact.module.scss';
import { usePostSubscriptionContactUsMutation } from '../../features/contact-us/contactUsApiSlice';
import { Alert, Spin } from 'antd';

const Contact = () => {
  const [formVal, setFormVal] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [postSubscriptionContactUs, { isLoading }] =
    usePostSubscriptionContactUsMutation();
  const handleChangeVal = (e) => {
    setFormVal({ ...formVal, [e.target.name]: e.target.value });
  };
  const [msg, setMsg] = useState('');

  const handleSubmitSubscribe = async (e, value) => {
    e.preventDefault();
    const result = await postSubscriptionContactUs(value);
    if (result?.data) setMsg('Success');
    else if (result?.error) setMsg('Failed to subscribe');
  };
  return (
    <React.Fragment>
      <PageHelmet pageTitle='Contact' />
      {/* Start Breadcrump Area */}
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--17'
        id='contact'
        data-black-overlay='6'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='rn-page-title text-center pt--100'>
                <h2 className='title theme-gradient'>Contact Us</h2>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}
      {/* Start Contact Page Area  */}
      <div className='rn-contact-page ptb--50 bg_color--1'>
        <div className='contact-form--1'>
          <div className='container'>
            <div className='row row--35 align-items-start'>
              <div className='col-lg-6 order-2 order-lg-1'>
                <div className='section-title text-left mb--50'>
                  <h2 className='title'>Contact Us.</h2>
                  <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto cupiditate aperiam neque.
                  </p>
                </div>
                <div className='form-wrapper'>
                  <form
                    action=''
                    onSubmit={(e) => handleSubmitSubscribe(e, formVal)}
                  >
                    <div className='rn-form-group'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        required
                        value={formVal.name}
                        onChange={handleChangeVal}
                      />
                    </div>

                    <div className='rn-form-group'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        required
                        value={formVal.email}
                        onChange={handleChangeVal}
                      />
                    </div>

                    <div className='rn-form-group'>
                      <input
                        type='text'
                        name='phone'
                        placeholder='Phone Number'
                        required
                        value={formVal.phone}
                        onChange={handleChangeVal}
                      />
                    </div>

                    <div className='rn-form-group'>
                      <textarea
                        name='message'
                        placeholder='Your Message'
                        required
                        value={formVal.message}
                        onChange={handleChangeVal}
                      ></textarea>
                    </div>
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
                    <div className='rn-form-group'>
                      {isLoading ? (
                        <Spin />
                      ) : (
                        <button
                          className='rn-button-style--2 btn-solid'
                          type='submit'
                          value='submit'
                          name='submit'
                          id='mc-embedded-subscribe'
                        >
                          Submit Now
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2'>
                <div className='thumbnail mb_md--30 mb_sm--30'>
                  <img
                    src={require('../../assets/images/about/about-6.jpg')}
                    alt='trydo'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Page Area  */}
      {/* Start Contact Top Area  */}
      <div className='rn-contact-top-area ptb--80 bg_color--5'>
        <div className='container'>
          <h3 className={styles.contactSection}>Customer Services Purposes </h3>
          <div className='row'>
            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>Contact With Phone Number</h4>
                  <p>
                    <a href='tel:+057 254 365 456'>+057 254 365 456</a>
                  </p>
                  <p>
                    <a href='tel:+856 325 652 984'>+856 325 652 984</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMail />
                </div>
                <div className='inner'>
                  <h4 className='title'>Email Address</h4>
                  <p>
                    <a href='mailto:admin@gmail.com'>admin@gmail.com</a>
                  </p>
                  <p>
                    <a href='mailto:example@gmail.com'>example@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMapPin />
                </div>
                <div className='inner'>
                  <h4 className='title'>Location</h4>
                  <p>
                    5678 Bangla Main Road, cities 580 <br /> GBnagla, example
                    54786
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
          <h3 className={styles.contactSection}>Business Purposes</h3>
          <div className='row'>
            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>Contact With Phone Number</h4>
                  <p>
                    <a href='tel:+057 254 365 456'>+057 254 365 456</a>
                  </p>
                  <p>
                    <a href='tel:+856 325 652 984'>+856 325 652 984</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMail />
                </div>
                <div className='inner'>
                  <h4 className='title'>Email Address</h4>
                  <p>
                    <a href='mailto:admin@gmail.com'>admin@gmail.com</a>
                  </p>
                  <p>
                    <a href='mailto:example@gmail.com'>example@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMapPin />
                </div>
                <div className='inner'>
                  <h4 className='title'>Location</h4>
                  <p>
                    5678 Bangla Main Road, cities 580 <br /> GBnagla, example
                    54786
                  </p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      {/* End Contact Top Area  */}

      {/* Start Contact Map  */}

      {/* Start Back To Top */}
      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
