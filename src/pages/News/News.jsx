import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import Footer from '../../components/footer/FooterOtherPage';
import classNames from 'classnames';
import styles from './news.module.scss';
import { Divider, Pagination, Spin } from 'antd';
import { useGetNewsMutation } from '../../features/news/newsApiSlice';
const News = () => {
  const [news, setNews] = useState({
    data: [],
    totalPage: 0,
    current: 1,
  });

  const pageSize = 5;
  const queryParams = { off_set: news.current - 1, page_size: 5 };

  const [getNews, { isLoading, data, refetch }] = useGetNewsMutation();

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

  useEffect(() => {
    getData();
  }, []);

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
                <h2 className='title theme-gradient'>News</h2>
                <p>Description</p>
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
              {isLoading ? (
                <div>
                  <Spin style={{ width: '100%' }} />
                </div>
              ) : (
                <>
                  <div className='col-lg-12'>
                    <div className='News-inner inner'>
                      {data?.content.map(
                        (item) =>
                          item?.enable && (
                            <>
                              <div
                                className={classNames(
                                  'section-title',
                                  styles.newsSection
                                )}
                              >
                                <h2 className='title'>{item.title}</h2>
                              </div>{' '}
                              <p className='description mb--80'>
                                {item.description}
                              </p>
                              <Divider />
                            </>
                          )
                      )}
                    </div>
                  </div>
                  <div className={styles.pagination}>
                    <Pagination
                      pageSize={pageSize}
                      current={news.current}
                      total={10}
                      onChange={handleChange}
                      style={{ bottom: '0px' }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End News Area  */}

      <Footer />
    </React.Fragment>
  );
};
export default News;
