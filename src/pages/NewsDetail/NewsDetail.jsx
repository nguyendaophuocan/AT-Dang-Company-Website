import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import FooterHome from '../../components/footer/FooterHome';
import { useGetNewsByIdMutation } from '../../features/news/newsApiSlice';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import { Spin } from 'antd';
import PageHelmet from '../../components/common/Helmet';

const NewsDetail = () => {
  const params = useParams();
  const [dataHeader, setDataHeader] = useState([]);
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const [newsDetailData, setNewsDetailData] = useState({});
  const [getNewsById] = useGetNewsByIdMutation();
  const getNewsDetailData = async () => {
    const { id } = params;
    const result = await getNewsById({ id }).unwrap();
    if (result) {
      setNewsDetailData(result);
    }
  };

  const getHeaderData = async () => {
    const result = await getHeader('newsdetail').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getHeaderData();
    getNewsDetailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <PageHelmet pageTitle='Blog Details' />

      {/* Start Breadcrump Area */}
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--23'
        data-black-overlay='7'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='blog-single-page-title text-center pt--100'>
                {' '}
                {isLoadingHeader ? (
                  <Spin />
                ) : (
                  <>
                    {' '}
                    <h2 className='title theme-gradient'>
                      {' '}
                      {dataHeader?.title}
                    </h2>
                    <p> {dataHeader?.description}</p>{' '}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className='rn-blog-details pt--80 pb--70 bg_color--1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner-wrapper'>
                <div className='inner'>
                  {' '}
                  <h3 className='mb--70'> {newsDetailData?.title}</h3>
                  <p>{newsDetailData?.description}</p>
                  {newsDetailData?.createBy && (
                    <div className='font--14' style={{ textAlign: 'right' }}>
                      {newsDetailData?.createBy}
                    </div>
                  )}
                  <p>
                    {' '}
                    {newsDetailData?.createdAtFormat &&
                      `Post on  ${newsDetailData?.createdAtFormat}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      <FooterHome />
    </React.Fragment>
  );
};

export default NewsDetail;
