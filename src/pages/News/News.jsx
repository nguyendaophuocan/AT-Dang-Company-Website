import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';

import Footer from '../../components/footer/FooterHome';
import classNames from 'classnames';
import styles from './news.module.scss';
import { Pagination, Spin } from 'antd';
import { useGetNewsMutation } from '../../features/news/newsApiSlice';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';

import Card from 'antd/es/card/Card';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { FiChevronUp } from 'react-icons/fi';
import EmptyContent from '../../components/common/EmptyContent';

const { Text } = Typography;
const News = () => {
  const [news, setNews] = useState({
    data: [],
    totalPage: 0,
    current: 1,
  });
  const [dataHeader, setDataHeader] = useState([]);
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const pageSize = 5;
  const queryParams = {
    off_set: (news.current - 1) * pageSize,
    page_size: pageSize,
  };
  const navigate = useNavigate();

  const [getNews, { isLoading, data }] = useGetNewsMutation();

  const handleChange = (page) => {
    setNews({
      ...news,
      current: page,
    });
    getNews({ off_set: page - 1, page_size: 5 });
  };

  const getData = async () => {
    const data = await getNews(queryParams).unwrap();
    setNews({ ...news, data });
  };

  const getHeaderData = async () => {
    const result = await getHeader('news').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getData();
    getHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReadmore = (id) => {
    navigate(`/news/${id}`);
  };
  return (
    <React.Fragment>
      <PageHelmet pageTitle='News' />

      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--12 '
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
                      {/* {dataHeader?.title} */}
                      <FormattedMessage id='NEWS_HEADER' />
                    </h2>
                    <p>{dataHeader?.description}</p>
                  </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

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
              {/* {isLoading ? (
                <div>
                  <Spin style={{ width: '100%' }} />
                </div>
              ) : ( */}
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
                                    styles.newsSection
                                  )}
                                >
                                  <h2
                                    className={classNames(
                                      'title',
                                      styles.newsItemTitle
                                    )}
                                  >
                                    {item.title}
                                  </h2>
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
                  {!isLoading && (
                      <div className={styles.pagination}>
                      <Pagination
                        pageSize={pageSize}
                        current={news.current}
                        total={20}
                        onChange={handleChange}
                        style={{ bottom: '0px' }}
                      />
                    </div>
                  )}
               
                </>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default News;
