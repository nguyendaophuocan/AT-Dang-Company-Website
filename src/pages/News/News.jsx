import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';

import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiMenu, FiX } from 'react-icons/fi';
import Footer from '../../components/footer/FooterOtherPage';
import classNames from 'classnames';
import styles from './news.module.scss';
import { Pagination } from 'antd';
import {
  useGetNewsMutation,
  useNewsMutation,
} from '../../features/news/newsApiSlice';
const News = () => {
  let title = 'News',
    description =
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.';
  const [news, setNews] = useState({
    data: [],
    totalPage: 0,
    current: 1,
    minIndex: 0,
    maxIndex: 0,
  });

  const pageSize = 6;
  const [getNews, { isLoading }] = useGetNewsMutation();

  const handleChange = (page) => {
    setNews({
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
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
              <div className='col-lg-12'>
                <div className='News-inner inner'>
                  <div
                    className={classNames('section-title', styles.newsSection)}
                  >
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                  </div>
                  <div
                    className={classNames('section-title', styles.newsSection)}
                  >
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                  </div>
                  <div
                    className={classNames('section-title', styles.newsSection)}
                  >
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                  </div>
                  <div
                    className={classNames('section-title', styles.newsSection)}
                  >
                    <h2 className='title'>{title}</h2>
                    <p className='description'>{description}</p>
                  </div>
                </div>
              </div>
              <Pagination
                pageSize={pageSize}
                current={news.current}
                total={10}
                onChange={handleChange}
                style={{ bottom: '0px' }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End News Area  */}

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
export default News;
