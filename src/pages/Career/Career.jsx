import React, { useState, useEffect } from 'react';
import { FiHeadphones, FiMail, FiMapPin } from 'react-icons/fi';

import Footer from '../../components/footer/FooterHome';
import { FormattedMessage } from 'react-intl';
import PageHelmet from '../../components/common/Helmet';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import { Card, Pagination, Spin } from 'antd';
import { useGetCareerMutation } from '../../features/career/careerApiSlice';
import classNames from 'classnames';
import { Typography } from 'antd';
import styles from './career.module.scss';
const { Text } = Typography;

const Career = () => {
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();
  const [dataHeader, setDataHeader] = useState({});

  const getHeaderData = async () => {
    const result = await getHeader('career').unwrap();
    setDataHeader(result);
  };

  const [career, setCareer] = useState({
    data: [],
    totalPage: 0,
    current: 1,
  });

  const pageSize = 5;
  const queryParams = { off_set: career.current - 1, page_size: 5 };

  const [getCareer, { isLoading, data, refetch }] = useGetCareerMutation();

  const handleChange = (page) => {
    setCareer({
      ...career,
      current: page,
    });
    getCareer({ off_set: page - 1, page_size: 5 });
  };

  const getData = async () => {
    const data = await getCareer(queryParams).unwrap();
    setCareer({ ...career, data });
  };

  useEffect(() => {
    getData();
    getHeaderData();
  }, []);

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
      <div className='rn-News-area ptb--120 bg_color--1'>
        <div className='rn-News-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='col-lg-5'>
                <div className='thumbnail'>
                  {/* <img
                    className='w-100'
                    src={require('../assets/images/News/News-3.jpg')}
                    alt='News Images'
                  /> */}
                </div>
              </div>
              {isLoading ? (
                <div>
                  <Spin style={{ width: '100%' }} />
                </div>
              ) : (
                <>
                  <div className='col-lg-12'>
                    <div className='News-inner inner'>
                      {data?.content?.map(
                        (item) =>
                          item?.enable && (
                            <div className='mb--40'>
                              <Card
                                title={`${item.createdAtFormat}`}
                                bordered={true}
                                style={{ width: 'auto' }}
                              >
                                <div
                                  className={classNames(
                                    'section-title mt--10',
                                    styles.careerSection
                                  )}
                                >
                                  <h2 className='title font--44'>
                                    {item.title}
                                  </h2>
                                </div>{' '}
                                <p className='description mb--40'>
                                  <Text
                                    style={{ width: 800, fontSize: '18px' }}
                                    ellipsis={{ tooltip: '' }}
                                  >
                                    {item.description}
                                  </Text>
                                </p>
                                <div className=' mb--30'>{item.updatedBy}</div>
                                {/* <button
                                  className='rn-button-style--2 btn-solid'
                                  type='submit'
                                  value='submit'
                                  name='submit'
                                  id='mc-embedded-subscribe'
                                  onClick={() => handleReadmore(item.id)}
                                >
                                  <FormattedMessage id='READ_MORE' />
                                </button> */}
                              </Card>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  {data && (
                    <div className={styles.pagination}>
                      <Pagination
                        pageSize={pageSize}
                        current={career.current}
                        total={10}
                        onChange={handleChange}
                        style={{ bottom: '0px' }}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Career;
