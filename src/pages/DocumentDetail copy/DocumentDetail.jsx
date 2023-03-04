import React, { useState, useEffect } from 'react';

import { FiClock, FiUser, FiMessageCircle, FiHeart } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import FooterTwo from '../../components/footer/FooterHome';
import { useGetDocumentDetailMutation } from '../../features/document-detail/documentDetailApiSlice';
const DocumentDetail = () => {
  const params = useParams();

  const [documentDetailData, setDocumentDetailData] = useState({});
  const [getDocumentDetail] = useGetDocumentDetailMutation();
  const getDocumentDetailData = async () => {
    const { id } = params;
    const result = await getDocumentDetail(id).unwrap();
    if (result) {
      setDocumentDetailData(result.contextList);
    }
  };

  useEffect(() => {
    getDocumentDetailData();
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
                <h2 className='title theme-gradient'>
                  {documentDetailData[0]?.title}
                </h2>
                <h4 className='title theme-gradient'>
                  {documentDetailData[0]?.description}
                </h4>
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
                  <h1> {documentDetailData[1]?.title}</h1>
                  <p>{documentDetailData[1]?.description}</p>
                  <div className='thumbnail'>
                    <img
                      src={require('../../assets/images/blog/bl-big-01.jpg')}
                      alt='Blog Images'
                    />
                  </div>
                  <p className='mt--40'>{documentDetailData[2]?.title}</p>
                  <p>{documentDetailData[2]?.description}</p>
                  <blockquote className='rn-blog-quote'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes.
                  </blockquote>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <div className='blog-single-list-wrapper d-flex flex-wrap'>
                    <div className='thumbnail'>
                      <img
                        className='w-100'
                        src={require('../../assets/images/blog/blog-single-01.png')}
                        alt='BLog Images'
                      />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </span>
                    </div>
                    <div className='content'>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo .
                      </p>
                      <h4 className='title'>Ordered & Unordered Lists.</h4>
                      <ul className='list-style'>
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                      <h4 className='title'>Ordered & Unordered Lists.</h4>
                      <ul className='list-style'>
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                      </ul>
                    </div>
                  </div>
                  <p className='mt--25 mt_sm--5'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
                  </p>
                  <p className='mb--0'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum. You need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend toitrrepeat
                    predefined chunks. Necessary, making this the first true
                    generator on the Internet. It re are many variations of
                    passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injectedeed eedhumour,
                    or randomised words which don't look even slightly
                    believable.
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

export default DocumentDetail;
