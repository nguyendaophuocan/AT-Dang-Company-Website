import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import FooterTwo from '../../components/footer/FooterHome';
import { useGetNewsByIdMutation } from '../../features/news/newsApiSlice';
const NewsDetail = () => {
  const params = useParams();

  const [newsDetailData, setNewsDetailData] = useState({});
  const [getNewsById] = useGetNewsByIdMutation();
  const getNewsDetailData = async () => {
    const { id } = params;
    const result = await getNewsById({ id }).unwrap();
    if (result) {
      setNewsDetailData(result);
    }
  };

  useEffect(() => {
    getNewsDetailData();
  }, []);
  return (
    <React.Fragment>
      <Helmet pageTitle='Blog Details' />

      {/* Start Breadcrump Area */}
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--23'
        data-black-overlay='7'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='blog-single-page-title text-center pt--100'>
                <h2 className='title theme-gradient'>News detail</h2>
                <p>...</p>
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
                  <h2 className='mb--70'> {newsDetailData?.title}</h2>
                  <p>{newsDetailData?.description}</p>
                  {newsDetailData?.createBy && (
                    <blockquote className='rn-blog-quote font--18'>
                      {newsDetailData?.createBy}
                    </blockquote>
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

      <FooterTwo />
    </React.Fragment>
  );
};

export default NewsDetail;
