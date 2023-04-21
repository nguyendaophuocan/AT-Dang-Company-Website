import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import FooterHome from '../../components/footer/FooterHome';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import { Spin } from 'antd';
import PageHelmet from '../../components/common/Helmet';
import { useGetCareersDetailMutation } from '../../features/careers/careersApiSlice';
import _get from 'lodash/get';
const CareersDetail = () => {
  const params = useParams();
  const [dataHeader, setDataHeader] = useState([]);
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const [careersDetailData, setCareersDetailData] = useState();
  const [getCareersDetail] = useGetCareersDetailMutation();
  const getCareersDetailData = async () => {
    const { id } = params;
    const result = await getCareersDetail({ id }).unwrap();
    if (result) {
      setCareersDetailData(_get(result?.content, '[0]', ''));
    }
  };

  const getHeaderData = async () => {
    const result = await getHeader('CareersDetail').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getHeaderData();
    getCareersDetailData();
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
                  <h2 className='mb--70'> {careersDetailData?.title}</h2>
                  <p>{careersDetailData?.description}</p>
                  {careersDetailData?.createBy && (
                    <div className='font--14' style={{ textAlign: 'right' }}>
                      {careersDetailData?.createBy}
                    </div>
                  )}
                  <p>
                    {' '}
                    {careersDetailData?.createdAtFormat &&
                      `Post on  ${careersDetailData?.createdAtFormat}`}
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

export default CareersDetail;
