import React, { useState, useEffect } from 'react';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';

import Footer from '../../components/footer/FooterOtherPage';
import { FormattedMessage } from 'react-intl';
import PageHelmet from '../../components/common/Helmet';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import { Spin } from 'antd';

const Career = () => {
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();
  const [dataHeader, setDataHeader] = useState({});

  const getHeaderData = async () => {
    const result = await getHeader('career').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getHeaderData();
  }, []);
  return (
    <React.Fragment>
      <PageHelmet pageTitle='Careers' />

      {/* Start Breadcrump Area */}
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--15'
        data-black-overlay='6'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='rn-page-title text-center pt--100'>
                {isLoadingHeader ? (
                  <div style={{ textAlign: 'center' }}>
                    {' '}
                    <Spin size='large' />
                  </div>
                ) : (
                  <>
                    <h2 className='title theme-gradient'>
                      {' '}
                      {dataHeader?.title}
                    </h2>
                    <p>{dataHeader?.description}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Contact Top Area  */}
      <div className='rn-contact-top-area ptb--120 bg_color--5'>
        <div className='container'>
          <div className='row'>
            {/* Start Single Address  */}
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    <FormattedMessage id='PHONE_NUMBER' />
                  </h4>
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
                  <h4 className='title'>
                    {' '}
                    <FormattedMessage id='EMAIL' />
                  </h4>
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
                  <h4 className='title'>
                    {' '}
                    <FormattedMessage id='LOCATION' />
                  </h4>
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

      <Footer />
    </React.Fragment>
  );
};

export default Career;
