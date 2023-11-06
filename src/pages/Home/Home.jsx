import { Fragment, useState, useEffect } from 'react';

import CounterOne from '../../elements/counters/CounterTwo';
import FooterHome from '../../components/footer/FooterHome';
import TeamOne from '../../blocks/team/TeamOne';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../../page-demo/script';
import featureImage from '../../assets/images/featured/featured-01.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { forwardRef } from 'react';

import { useGetNewsMutation } from '../../features/news/newsApiSlice';
import { useGetHomePageContentMutation } from '../../features/admin/adminApiSlice';
import { Spin } from 'antd';
import { FormattedMessage } from 'react-intl';
import styles from './home.module.scss';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import PageHelmet from '../../components/common/Helmet';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectLanguageValue } from '../../features/language/languageSlice';
import { slickDot } from '../../utils/helpers';
const AdvertisementList = [
  {
    image: 'image-1',
    category: 'Coming soon',
    title: 'Coming soon',
  },
  {
    image: 'image-2',
    category: 'Coming soon',
    title: 'Coming soon',
  },
  {
    image: 'image-3',
    category: 'Coming soon',
    title: 'Coming soon',
  },
  {
    image: 'image-4',
    category: 'Coming soon',
    title: 'Coming soon',
  },
  {
    image: 'image-3',
    category: 'Coming soon',
    title: 'Coming soon',
  },
  {
    image: 'image-4',
    category: 'Coming soon',
    title: 'Coming soon',
  },
];


export const advertisementSlick = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const VisionList = [
  {
    image: 'image-1',
    description: <FormattedMessage id='VISIONS_DESC_1' />,
    title: <FormattedMessage id='VISIONS_TITLE_1' />,
  },
  {
    image: 'image-2',
    description: <FormattedMessage id='VISIONS_DESC_2' />,
    title: <FormattedMessage id='VISIONS_TITLE_2' />,
  },
  {
    image: 'image-3',
    description: <FormattedMessage id='VISIONS_DESC_3' />,
    title: <FormattedMessage id='VISIONS_TITLE_3' />,
  },
];

const Home = () => {
  const [getNews] = useGetNewsMutation();
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();
  const navigate = useNavigate();
  const [getHomePageContent, { isLoading: isLoadingContent }] =
    useGetHomePageContentMutation();

  const handleShopNow = () => {
    window.location.href = 'https://collectibles.atdang.com';
  };

  const handleClickHero = (part) => {
    console.log('part', part);
    switch (part) {
      case 'hero':
        navigate('/about');
        return;
      case 'shop':
        window.location.href = 'https://collectibles.atdang.com';
        return;
      default:
        break;
    }
  };
  const [dataNews, setDatanews] = useState([]);
  const [dataHome, setDataHome] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);
  const [dataAbout, setDataAbout] = useState([]);
  const language = useSelector(selectLanguageValue);

  const getNewsData = async () => {
    const queryParams = { off_set: 1, page_size: 3 };
    const result = await getNews(queryParams).unwrap();
    setDatanews(result);
  };
  const getHomepageData = async () => {
    const result = await getHomePageContent().unwrap();
    setDataHome(result);
  };
  const getHeaderData = async () => {
    const result = await getHeader('home').unwrap();
    setDataHeader(result);
  };
  const getAboutData = async () => {
    const result = await getHomePageContent().unwrap();
    setDataAbout(result);
  };

  useEffect(() => {
    getNewsData();
    getHomepageData();
    getHeaderData();
    getAboutData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Fragment>
      <PageHelmet pageTitle='Company website' />
      {/* Start Slider Area   */}
      <div className='slider-activation slider-creative-agency'>
        <div
          className={classNames('bg_image bg_image--23')}
          data-black-overlay='4'
        >
          <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  {isLoadingHeader ? (
                    <div style={{ textAlign: 'center' }}>
                      {' '}
                      <Spin size='large' />
                    </div>
                  ) : (
                    <div className={`inner text-center`}>
                      <h2 className='title theme-gradient'>
                        <span
                          onClick={() => handleClickHero('hero')}
                          className={styles.hero}
                        >
                          {dataHeader?.title}
                        </span>
                      </h2>
                      {language.includes('en-US') ? (
                        <p className='description fontSize28'>
                          {dataHeader?.descriptionEng}
                        </p>
                      ) : (
                        <p className='description fontSize28 text-white'>
                          {dataHeader?.descriptionVn}
                        </p>
                      )}

                      {
                        <div className='slide-btn'>
                          <button
                            className='rn-button-style--2 btn-primary-color'
                            onClick={() => handleClickHero('shop')}
                          >
                            <FormattedMessage id='SHOP_NOW' />
                          </button>
                        </div>
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoadingContent ? (
        <div
          style={{ textAlign: 'center', height: '150px' }}
          className='mt--100'
        >
          {' '}
          <Spin size='large' />
        </div>
      ) : (
        <>
          {dataHome[0]?.enable && (
            <div className='rn-counterup-area pt--80 pb--110 bg_color--1'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='section-title text-center'>
                      <h2 className='title'>{dataHome[0]?.title}</h2>
                      {language.includes('en-US') ? (
                        <p className='title'>{dataHome[0]?.descriptionEng}</p>
                      ) : (
                        <p className='title'>{dataHome[0]?.descriptionVn}</p>
                      )}
                      <Link className='rn-btn ' to='/about'>
                        <FormattedMessage id='READ_MORE' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Visions */}
      {dataHome[1]?.enable && (
        <div className='portfolio-area pt--60 pb--60 mb--40 bg_color--5'>
          <div className='rn-slick-dot'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='section-title service-style--3 text-left mb--15 mb_sm--0'>
                    <h2 className='title'>{dataHome[1]?.title}</h2>
                    <p>
                      {language.includes('en-US') ? (
                        <p>{dataHome[1]?.descriptionEng}</p>
                      ) : (
                        <p>{dataHome[1]?.descriptionVn}</p>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='slick-space-gutter--15 slickdot--20'>
                    <Slider {...slickDot}>
                      {VisionList.map((value, index) => (
                        <div className='portfolio' key={index}>
                          <div className='thumbnail-inner'>
                            <div className={`thumbnail ${value.image}`}></div>
                            <div
                              className={`bg-blr-image ${value.image}`}
                            ></div>
                          </div>
                          <div className='content'>
                            <div className='inner'>
                              <h4>
                                <Link to='/about'>{value.title}</Link>
                              </h4>
                              <h5>{value.description}</h5>
                            </div>
                          </div>
                          <Link className='link-overlay' to='/about'></Link>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Advertisement */}
      {dataHome[2]?.enable && (
        <div className='portfolio-area ptb--30 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='section-title text-left service-style--3 mb--30'>
                  <h2 className='title'> {dataHome[2]?.title}</h2>
                  {language.includes('en-US') ? (
                    <p>{dataHome[2]?.descriptionEng}</p>
                  ) : (
                    <p>{dataHome[2]?.descriptionVn}</p>
                  )}
                  <button
                    className={classNames(
                      'rn-button-style--2 btn-primary-color'
                    )}
                  >
                    View All Collection
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='wrapper portfolio-sacousel-inner mb--55'>
            <div className='portfolio-slick-activation mt--30 mt_sm--30'>
              <Slider {...advertisementSlick}>
                {AdvertisementList.map((value, index) => (
                  <div
                    className='portfolio portfolio-interior-design'
                    key={index}
                  >
                    <div className='thumbnail-inner'>
                      <div className={`thumbnail ${value.image}`}></div>
                      <div className={`bg-blr-image ${value.image}`}></div>
                    </div>
                    <div className='content'>
                      <div className='inner'>
                        <p>{value.category}</p>
                        <h4>
                          <a href='/'>{value.title}</a>
                        </h4>
                        {/* <div className='portfolio-button'>
                            <a className='rn-btn' href='/portfolio-details'>
                              <FormattedMessage id='READ_MORE' />
                            </a>
                          </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}

      {/* Teams */}
      {dataHome[3]?.enable && (
        <div
          className='call-to-action-wrapper call-to-action bg_image bg_image--12 text-white-wrapper mt--40 mb--80 ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80'
          id='getstart'
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='inner text-left'>
                  <h2><FormattedMessage id='TEAM_TITLE_1'/></h2>
                  <h4><FormattedMessage id='TEAM_DESC_1'/></h4>
                  <Link
                    className='rn-button-style--2 mt--70 mt_sm--30 mt_md--30'
                    href='/about'
                  >
                    <span><FormattedMessage id='DISCOVER'/></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Start Team Area  */}
      {/* {dataHome[4]?.enbale && (
        <div className='rn-team-wrapper pb--120 mb--80 bg_color--1'>
          <div className='rn-team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-left mb--30'>
                    <h2> {dataHome[4]?.title}</h2>
                    {language.includes('en-US') ? (
                      <p className='fontSize20'>
                        {dataHome[4]?.descriptionEng}
                      </p>
                    ) : (
                      <p className='fontSize20'>{dataHome[4]?.descriptionVn}</p>
                    )}

                    <div className='slide-btn'>
                      <Link
                        className='rn-button-style--2 btn-primary-color'
                        to='/contact'
                      >
                        <FormattedMessage id='FIND_OUT_MORE' />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <TeamOne
                column='col-lg-3 col-md-6 col-sm-6 col-12'
                teamStyle='team-style--bottom'
                item='4'
              />
            </div>
          </div>
        </div>
      )} */}

      <FooterHome />
    </Fragment>
  );
};

export default Home;
