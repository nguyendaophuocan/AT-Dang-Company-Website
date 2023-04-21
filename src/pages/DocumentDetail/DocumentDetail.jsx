import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import FooterHome from '../../components/footer/FooterHome';
import { useGetDocumentDetailMutation } from '../../features/document-detail/documentDetailApiSlice';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import styles from './documentdetail.module.scss';
import { Col, Divider, Row } from 'antd';
import PageHelmet from '../../components/common/Helmet';

const DocumentDetail = () => {
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const params = useParams();
  const [dataHeader, setDataHeader] = useState([]);

  const [documentDetailContextList, setDocumentDetailContextList] = useState(
    {}
  );
  const [documentDetailData, setDocumentDetailData] = useState();

  const [documentPdfId, setDocumentPdfId] = useState('');

  const [getDocumentDetail] = useGetDocumentDetailMutation();
  const getdocumentDetailContextList = async () => {
    const { id } = params;
    const result = await getDocumentDetail(id).unwrap();
    if (result) {
      setDocumentDetailContextList(result.contextList);
      setDocumentDetailData(result);
      setDocumentPdfId(result.pdfList);
    }
  };

  const getHeaderData = async () => {
    const result = await getHeader('documentdetail').unwrap();
    setDataHeader(result);
  };

  const handleReadFile = (documentPdfId) => {
    window.location.replace(
      `https://cdn.filestackcontent.com/${documentPdfId}`
    );
  };

  const columnDividerValue = (columNumber, items) => {
    if (columNumber === 1) {
      return (
        <>
          <>
            {items.map((item) => (
              <Col span={24}>{item}</Col>
            ))}
          </>
        </>
      );
    } else if (columNumber === 2) {
      return (
        <>
          {items.map((item) => (
            <>
              <Col span={12}>{item}</Col>
            </>
          ))}
        </>
      );
    } else if (columNumber === 3) {
      return (
        <>
          {items.map((item) => (
            <>
              <Col span={8}>{item}</Col>
            </>
          ))}
        </>
      );
    } else if (columNumber === 4) {
      return (
        <>
          {items.map((item) => (
            <>
              <Col span={6}>{item}</Col>
            </>
          ))}
        </>
      );
    } else if (columNumber === 5) {
      return (
        <>
          {items.map((item) => (
            <>
              <Col span={4}>{item}</Col>
            </>
          ))}
        </>
      );
    }
  };
  useEffect(() => {
    getdocumentDetailContextList();
    getHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <PageHelmet pageTitle='Blog Details' />

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
                  <h1> {documentDetailContextList[0]?.title}</h1>
                  <p>{documentDetailContextList[0]?.description}</p>
                  <h1 className='mt--25'>
                    {documentDetailContextList[1]?.title}
                  </h1>
                  <p>{documentDetailContextList[1]?.description}</p>
                  <h1>{documentDetailContextList[2]?.title}</h1>
                  <p className='mt--25 '>
                    {documentDetailContextList[2]?.description}
                  </p>
                  <h1>{documentDetailContextList[3]?.title}</h1>
                  <p className='mt--25 '>
                    {documentDetailContextList[3]?.description}
                  </p>
                  <h1>{documentDetailContextList[4]?.title}</h1>
                  <p className='mt--25 '>
                    {documentDetailContextList[4]?.description}
                  </p>
                  <h1> {documentDetailData?.appendix_tittle}</h1>
                  <p>{documentDetailData?.appendix_description}</p>
                  <Divider />
                  <h3> {documentDetailData?.subHeading1?.title}</h3>
                  <Row
                    className='mb--50 mt--50'
                    style={{ textAlign: 'center' }}
                  >
                    {columnDividerValue(
                      documentDetailData?.totalColumns,
                      documentDetailData?.subHeading1?.items
                    )}
                  </Row>
                  <h3>{documentDetailData?.subHeading2?.title}</h3>
                  <Row
                    className='mb--50 mt--50'
                    style={{ textAlign: 'center' }}
                  >
                    {columnDividerValue(
                      documentDetailData?.totalColumns,
                      documentDetailData?.subHeading2?.items
                    )}
                  </Row>
                  <h3>{documentDetailData?.subHeading3?.title}</h3>
                  <Row
                    className='mb--50 mt--50'
                    style={{ textAlign: 'center' }}
                  >
                    {columnDividerValue(
                      documentDetailData?.totalColumns,
                      documentDetailData?.subHeading3?.items
                    )}
                  </Row>
                  <h3> {documentDetailData?.subHeading4?.title}</h3>
                  <Row
                    className='mb--50 mt--50'
                    style={{ textAlign: 'center' }}
                  >
                    {columnDividerValue(
                      documentDetailData?.totalColumns,
                      documentDetailData?.subHeading4?.items
                    )}
                  </Row>
                  <h3> {documentDetailData?.subHeading5?.title}</h3>
                  <Row
                    className='mb--50 mt--50'
                    style={{ textAlign: 'center' }}
                  >
                    {columnDividerValue(
                      documentDetailData?.totalColumns,
                      documentDetailData?.subHeading5?.items
                    )}
                  </Row>
                </div>

                <div style={{}} className={styles.readFile}>
                  {documentPdfId && (
                    <button
                      className='rn-button-style--2 btn-solid mt--40'
                      type='submit'
                      value='submit'
                      name='submit'
                      id='mc-embedded-subscribe'
                      onClick={() => handleReadFile(documentPdfId)}
                      style={{ width: '20%', padding: '12px' }}
                    >
                      {/* <FormattedMessage id='READ_MORE' /> */}
                      Read PDF file
                    </button>
                  )}
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
