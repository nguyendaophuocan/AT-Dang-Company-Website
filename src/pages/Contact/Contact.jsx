import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';
import { FiChevronUp } from 'react-icons/fi';
import Footer from '../../components/footer/FooterHome';
import styles from './contact.module.scss';
import {
  useGetContactUsMutation,
  usePostSubscriptionContactUsMutation,
} from '../../features/contact-us/contactUsApiSlice';
import { Alert, Spin } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';

const Contact = () => {
  const [formVal, setFormVal] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [dataHeader, setDataHeader] = useState([]);
  const [dataContactUs, setDataContactUs] = useState([]);

  const [postSubscriptionContactUs, { isLoading }] =
    usePostSubscriptionContactUsMutation();

  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();
  const [getContactUs] = useGetContactUsMutation();

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

  const getHeaderData = async () => {
    const result = await getHeader('contactus').unwrap();
    setDataHeader(result);
  };

  const getContactUsData = async () => {
    const result = await getContactUs().unwrap();
    setDataContactUs(result);
  };

  useEffect(() => {
    getHeaderData();
    getContactUsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {/* {isLoadingHeader ? (
                  <div style={{ textAlign: 'center' }}>
                    {' '}
                    <Spin size='large' />
                  </div>
                ) : ( */}
                  <>
                    <h2 className='title theme-gradient'>
                      {' '}
                      {/* {dataHeader?.title} */}
                      <FormattedMessage id='CONTACT_HEADER' />
                    </h2>
                    <p>{dataHeader?.description}</p>
                  </>
                {/* )} */}
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
                  <h2 className='title'>
                    {' '}
                    <FormattedMessage id='CONTACT_US' />
                  </h2>
                  <p className='description'>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto cupiditate aperiam neque. */}
                  </p>
                </div>
                <div className='form-wrapper'>
                  <form
                    action=''
                    onSubmit={(e) => handleSubmitSubscribe(e, formVal)}
                  >
                    <div className='rn-form-group'>
                      <FormattedMessage id='NAME'>
                        {(NAME) => (
                          <input
                            type='text'
                            name='name'
                            placeholder={NAME}
                            required
                            value={formVal.name}
                            onChange={handleChangeVal}
                          />
                        )}
                      </FormattedMessage>
                    </div>

                    <div className='rn-form-group'>
                      <FormattedMessage id='EMAIL'>
                        {(EMAIL) => (
                          <input
                            type='email'
                            name='email'
                            placeholder={EMAIL}
                            required
                            value={formVal.email}
                            onChange={handleChangeVal}
                          />
                        )}
                      </FormattedMessage>
                    </div>

                    <div className='rn-form-group'>
                      <FormattedMessage id='PHONE_NUMBER'>
                        {(PHONE_NUMBER) => (
                          <input
                            type='text'
                            name='phone'
                            placeholder={PHONE_NUMBER}
                            required
                            value={formVal.phone}
                            onChange={handleChangeVal}
                          />
                        )}
                      </FormattedMessage>
                    </div>

                    <div className='rn-form-group'>
                      <FormattedMessage id='MESSAGE'>
                        {(MESSAGE) => (
                          <textarea
                            name='message'
                            placeholder={MESSAGE}
                            required
                            value={formVal.message}
                            onChange={handleChangeVal}
                          ></textarea>
                        )}
                      </FormattedMessage>
                    </div>
                    {!isLoading && msg && (
                      <p>
                        {msg === 'Success' ? (
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
                          <FormattedMessage id='SUBMIT' />
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
          <h3 className={styles.contactSection}>
            {' '}
            <FormattedMessage id='CUSTOMER_SERVICE_PURPOSES' />
          </h3>
          <div className='row'>
            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    {/* <FormattedMessage id='CONTACT_PHONE_NUMBER' /> */}
                    {dataContactUs[0]?.title}
                  </h4>

                  <p>{dataContactUs[0]?.description}</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--20'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMail />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    {/* <FormattedMessage id='EMAIL' /> */}
                    {dataContactUs[1]?.title}
                  </h4>

                  <p>{dataContactUs[1]?.description}</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--20'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMapPin />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    {/* <FormattedMessage id='LOCATION' /> */}
                    {dataContactUs[2]?.title}
                  </h4>
                  <p>{dataContactUs[2]?.description}</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
          <h3 className={styles.contactSection}>
            {' '}
            <FormattedMessage id='BUSINESS_PURPOSES' />
          </h3>
          <div className='row'>
            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {/* <FormattedMessage id='CONTACT_PHONE_NUMBER' /> */}
                    {dataContactUs[3]?.title}
                  </h4>
                  <p>{dataContactUs[3]?.description}</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--20'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMail />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    {/* <FormattedMessage id='EMAIL' /> */}
                    {dataContactUs[4]?.title}
                  </h4>
                  <p>{dataContactUs[4]?.description}</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}

            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--20'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiMapPin />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    {/* <FormattedMessage id='LOCATION' /> */}
                    {dataContactUs[5]?.title}
                  </h4>
                  <p>{dataContactUs[5]?.description}</p>
                </div>
              </div>
            </div>
            {/* End Single Address  */}
          </div>
        </div>
      </div>
      {/* End Contact Top Area  */}

      {/* Start Contact Map  */}

      <Footer />
    </React.Fragment>
  );
};

export default Contact;
