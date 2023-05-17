import React, { useState, useEffect } from 'react';

import Footer from '../../components/footer/FooterHome';
import PageHelmet from '../../components/common/Helmet';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import { Card, Pagination, Spin } from 'antd';
import { useGetCareerMutation } from '../../features/careers/careersApiSlice';
import classNames from 'classnames';
import { Typography } from 'antd';
import styles from './career.module.scss';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import EmptyContent from '../../components/common/EmptyContent';

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

  const pageSize = 10;
  const queryParams = {
    off_set: (career.current - 1) * pageSize,
    page_size: pageSize,
  };
  const navigate = useNavigate();

  const [getCareer, { isLoading, data }] = useGetCareerMutation();

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

  const handleReadmore = (id) => {
    navigate(`/careers/${id}`);
  };

  useEffect(() => {
    getData();
    getHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className='rn-News-area ptb--130 bg_color--1'>
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
                                  <h3 className='title'>{item.title}</h3>
                                </div>{' '}
                                <p className='description mb--40'>
                                  <Text
                                    style={{ width: 800, fontSize: '14px' }}
                                    ellipsis={{ tooltip: '' }}
                                  >
                                    {item.description}
                                  </Text>
                                </p>
                                <div className=' mb--30'>{item.updatedBy}</div>
                                <button
                                  className='rn-button-style--2 btn-solid'
                                  type='submit'
                                  value='submit'
                                  name='submit'
                                  id='mc-embedded-subscribe'
                                  onClick={() => handleReadmore(item.id)}
                                >
                                  <FormattedMessage id='READ_MORE' />
                                </button>
                              </Card>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  {data?.content.length >= 1 ? (
                    <div className={styles.pagination}>
                      <Pagination
                        pageSize={pageSize}
                        current={career.current}
                        onChange={handleChange}
                        total={20}
                        style={{ bottom: '0px' }}
                      />
                    </div>
                  ) : (
                    <EmptyContent content='careers' />
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
