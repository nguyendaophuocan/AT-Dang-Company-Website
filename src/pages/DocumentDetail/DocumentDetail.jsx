import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import FooterHome from '../../components/footer/FooterHome';
import { useGetDocumentDetailMutation } from '../../features/document-detail/documentDetailApiSlice';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';

const DocumentDetail = () => {
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const params = useParams();
  const [dataHeader, setDataHeader] = useState([]);

  const [documentDetailData, setDocumentDetailData] = useState({});
  const [getDocumentDetail] = useGetDocumentDetailMutation();
  const getDocumentDetailData = async () => {
    const { id } = params;
    const result = await getDocumentDetail(id).unwrap();
    if (result) {
      setDocumentDetailData(result.contextList);
    }
  };

  const getHeaderData = async () => {
    const result = await getHeader('documentdetail').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getDocumentDetailData();
    getHeaderData();
  }, []);

  return (
    <React.Fragment>
      <Helmet pageTitle='Blog Details' />

      {/* Start Breadcrump Area */}
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--7'
        data-black-overlay='7'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='blog-single-page-title text-center pt--100'>
                <h1 className='title theme-gradient'>{dataHeader?.title}</h1>
                <p>{dataHeader?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className='rn-blog-details pt--110 pb--70 bg_color--1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='inner-wrapper'>
                <div className='inner'>
                  {' '}
                  <h1> {documentDetailData[0]?.title}</h1>
                  <p>{documentDetailData[0]?.description}</p>
                  <p className='mt--40'>{documentDetailData[1]?.title}</p>
                  <p>{documentDetailData[1]?.description}</p>
                  {/* <blockquote className='rn-blog-quote'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes.
                  </blockquote> */}
                  <p>{documentDetailData[2]?.title}</p>
                  <p className='mt--25 mt_sm--5'>
                    {documentDetailData[2]?.description}
                  </p>
                  <p>{documentDetailData[3]?.title}</p>
                  <p className='mt--25 mt_sm--5'>
                    {documentDetailData[3]?.description}
                  </p>
                  <p>{documentDetailData[4]?.title}</p>
                  <p className='mt--25 mt_sm--5'>
                    {documentDetailData[4]?.description}
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

export default DocumentDetail;
