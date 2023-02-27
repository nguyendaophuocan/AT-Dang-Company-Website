import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';

import Footer from '../../components/footer/FooterOtherPage';
import classNames from 'classnames';
import styles from './news.module.scss';
import { Pagination, Spin } from 'antd';
import { useGetNewsMutation } from '../../features/news/newsApiSlice';
import Card from 'antd/es/card/Card';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetSearchDataMutation } from '../../features/search/searchApiSlice';
import { useSelector } from 'react-redux';
import { selectSearchValue } from '../../features/search/searchSlice';

const { Text } = Typography;
const Search = () => {
  const [news, setNews] = useState({
    data: [],
    totalPage: 0,
    current: 1,
  });
  const [getSearchData, { isLoading: isLoadingSearch }] =
    useGetSearchDataMutation();
  const [searchData, setSearchData] = useState('');
  const storeSearchData = useSelector(selectSearchValue);

  const pageSize = 5;
  const queryParams = { off_set: news.current - 1, page_size: 5 };
  const navigate = useNavigate();

  const [getNews, { isLoading, data, refetch }] = useGetNewsMutation();

  const handleChange = (page) => {
    setNews({
      ...news,
      current: page,
    });
    getNews({ off_set: page - 1, page_size: 5 });
  };

  const getSearchDataRes = async (storeSearchData) => {
    const result = await getSearchData(storeSearchData);
    setSearchData(result);
  };

  useEffect(() => {
    getSearchDataRes(storeSearchData);
  }, [storeSearchData]);

  const handleReadmore = (id) => {
    navigate(`/news/${id}`);
  };
  return (
    <React.Fragment>
      <PageHelmet pageTitle='Searching' />

      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--12 '
        data-black-overlay='6'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='rn-page-title text-center pt--100'>
                <h2 className='title theme-gradient'>Search</h2>
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
              {isLoading || isLoadingSearch ? (
                <div>
                  <Spin style={{ width: '100%' }} />
                </div>
              ) : (
                <>
                  <div className='col-lg-12'>
                    <div className='News-inner inner'>
                      {searchData?.data?.map(
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
                                <button
                                  className='rn-button-style--2 btn-solid'
                                  type='submit'
                                  value='submit'
                                  name='submit'
                                  id='mc-embedded-subscribe'
                                  onClick={() => handleReadmore(item.id)}
                                >
                                  Read more
                                </button>
                              </Card>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                  <div className={styles.pagination}>
                    {searchData?.data?.length ? (
                      <Pagination
                        pageSize={pageSize}
                        current={news.current}
                        total={10}
                        onChange={handleChange}
                        style={{ bottom: '0px' }}
                      />
                    ) : (
                      <h3>Empty</h3>
                    )}{' '}
                  </div>
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
export default Search;
