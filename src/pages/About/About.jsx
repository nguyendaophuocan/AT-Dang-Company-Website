import React, { useState, useEffect } from 'react';
import PageHelmet from '../../components/common/Helmet';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Footer from '../../components/footer/FooterHome';
import { Link } from 'react-router-dom';
import { useGetHomePageContentMutation } from '../../features/admin/adminApiSlice';
import { Spin, Timeline } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import ScrollToTop from '../../components/hoc/withScrollToTop';
import {
  FiCast,
  FiChevronUp,
  FiHeadphones,
  FiLayers,
  FiUsers,
} from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectLanguageValue } from '../../features/language/languageSlice';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classNames from 'classnames';
import styles from './about.module.scss';
import { ClockCircleOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import { slickDot, slickDot2Items } from '../../utils/helpers';
const ValuesList = [
  {
    icon: <FiCast />,
    title: <FormattedMessage id='VALUES_TITLE_1' />,
    description: <FormattedMessage id='VALUES_DESC_1' />,
  },
  {
    icon: <FiLayers />,
    title: <FormattedMessage id='VALUES_TITLE_2' />,
    description: <FormattedMessage id='VALUES_DESC_2' />,
  },
  {
    icon: <FiUsers />,
    title: <FormattedMessage id='VALUES_TITLE_3' />,
    description: <FormattedMessage id='VALUES_DESC_3' />,
  },
];

const ProjectList = [
  {
    icon: <FiCast />,
    title: <FormattedMessage id='PROJECTS_TITLE_1' />,
    description: <FormattedMessage id='PROJECTS_DESC_1' />,
    link: <FormattedMessage id='PROJECTS_LINK_1' />,
    image: 'image-1',
  },
  {
    icon: <FiLayers />,
    title: <FormattedMessage id='PROJECTS_TITLE_2' />,
    description: <FormattedMessage id='PROJECTS_DESC_2' />,
    link: <FormattedMessage id='PROJECTS_LINK_2' />,
    image: 'image-2',
  },
];

const About = () => {
  const [dataAbout, setDataAbout] = useState([]);
  const [dataHeader, setDataHeader] = useState([]);
  const language = useSelector(selectLanguageValue);

  const handleShopNow = () => {
    window.location.replace('https://collectibles.atdang.com');
  };
  const [getHomePageContent, { isLoading: isLoadingContent }] =
    useGetHomePageContentMutation();

  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const getAboutData = async () => {
    const result = await getHomePageContent().unwrap();
    setDataAbout(result);
  };

  const getHeaderData = async () => {
    const result = await getHeader('aboutus').unwrap();
    setDataHeader(result);
  };

  useEffect(() => {
    getAboutData();
    getHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment id='about'>
      <PageHelmet pageTitle='About' />
      <div
        className='rn-page-title-area pt--120 pb--190 bg_image bg_image--7 '
        data-black-overlay='3'
      >
        {isLoadingHeader ? (
          <div
            style={{ textAlign: 'center', height: '150px' }}
            className='mt--100'
          >
            <Spin size='large' />
          </div>
        ) : (
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='rn-page-title text-center pt--100'>
                  <h2 className='title theme-gradient'>{dataHeader?.title}</h2>
                  {language.includes('en-US') ? (
                    <p>{dataHeader?.descriptionEng}</p>
                  ) : (
                    <p>{dataHeader?.descriptionVn}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='rn-about-area ptb--120 bg_color--1'>
        <div className='rn-about-wrapper'>
          <div className='container'>
            <div className='row row--35 align-items-center'>
              <div className='inner-wrapper'></div>
              <div className='col-lg-5'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../../assets/images/about/about-3.jpg')}
                    alt='About Images'
                  />
                </div>
              </div>
              {/* Story */}
              <div className='col-lg-7'>
                <div className='about-inner inner'>
                  {dataAbout[6]?.enable && (
                    <div className='section-title'>
                      <h2 className='title'>{dataAbout[5]?.title}</h2>
                      {language.includes('en-US') ? (
                        <p className='description'>
                          {dataAbout[5]?.descriptionEng}
                        </p>
                      ) : (
                        <p className='description'>
                          {dataAbout[5]?.descriptionVn}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {dataAbout[6]?.enable && dataAbout[5]?.enable && (
                  <div className='row mt--30'>
                    <div className='col-lg-12 col-md-12 col-sm-12 col-12'>
                      <div className='about-us-list'>
                        <br />
                        <button
                          className='rn-button-style--2 btn-primary-color'
                          onClick={handleShopNow}
                        >
                          <FormattedMessage id='FIND_OUT_MORE' />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision */}
      <div className='rn-finding-us-area rn-finding-us bg_color--1 mb--10'>
        {dataAbout[6]?.enable && (
          <div className='inner'>
            <div className='content-wrapper'>
              <div className='content'>
                <h4 className='theme-gradient'>{dataAbout[6]?.title}</h4>
                <div className={styles.visionSection}>
                  <p className={styles.visionHeader}>
                    {' '}
                    <FormattedMessage id='VISIONS_TITLE_ABOUT_1' />
                  </p>
                  <p>
                    {' '}
                    <FormattedMessage id='VISIONS_DESC_ABOUT_1' />{' '}
                  </p>
                </div>
                <div className={styles.visionSection}>
                  <p className={styles.visionHeader}>
                    {' '}
                    <FormattedMessage id='VISIONS_TITLE_ABOUT_2' />
                  </p>
                  <p>
                    {' '}
                    <FormattedMessage id='VISIONS_DESC_ABOUT_2' />{' '}
                  </p>
                </div>
                <div className={styles.visionSection}>
                  <p className={styles.visionHeader}>
                    {' '}
                    <FormattedMessage id='VISIONS_TITLE_ABOUT_3' />
                  </p>
                  <p>
                    {' '}
                    <FormattedMessage id='VISIONS_DESC_ABOUT_3' />{' '}
                  </p>
                </div>
                <Link to='/contact' className='rn-btn btn-white'>
                  <FormattedMessage id='FIND_OUT_MORE' />
                </Link>
              </div>
            </div>
            <div className='thumbnail'>
              <div className='image'>
                <img
                  src={require('../../assets/images/about/finding-us-01.png')}
                  alt='Finding Images'
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Timeline */}
      <div className={styles.timeline}>
        <h3 className={classNames('title mb--60', styles.timelineTitle)}>
          {dataAbout[7]?.title}
        </h3>
        <Timeline
          mode='alternate'
          items={[
            {
              children: (
                <span className={styles.timelineItem}>
                  <FormattedMessage id='2024' />
                </span>
              ),
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: (
                <span className={styles.timelineItem}>
                  <FormattedMessage id='CONTENT_2024' />
                </span>
              ),
            },
            {
              children: (
                <span className={styles.timelineItem}>
                  <FormattedMessage id='2023' />
                </span>
              ),
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: (
                <span className={styles.timelineItem}>
                  {' '}
                  <FormattedMessage id='CONTENT_2023' />
                </span>
              ),
            },
            {
              children: (
                <span className={styles.timelineItem}>
                  {' '}
                  <FormattedMessage id='CONTENT_2020' />
                </span>
              ),
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: (
                <span className={styles.timelineItem}>
                  <FormattedMessage id='2020' />
                </span>
              ),
            },
          ]}
        />
      </div>
      {/* Values */}
      <div className='rn-contact-top-area mt--20 mb--40 pt--20 pb--40 bg_color--8 row service-one-wrapper'>
        <div className={classNames('container', styles.values)}>
          <h3 className={classNames('title  mb--30 ', styles.valuesTitle)}>
            {dataAbout[8]?.title}
          </h3>
          {/* <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    <FormattedMessage id='VALUES_TITLE_1' />
                  </h4>
                  <p>
                    {' '}
                    <FormattedMessage id='VALUES_DESC_1' />
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    <FormattedMessage id='VALUES_TITLE_2' />
                  </h4>
                  <p>
                    {' '}
                    <FormattedMessage id='VALUES_DESC_2' />
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='rn-address'>
                <div className='icon'>
                  <FiHeadphones />
                </div>
                <div className='inner'>
                  <h4 className='title'>
                    {' '}
                    <FormattedMessage id='VALUES_TITLE_3' />
                  </h4>
                  <p>
                    {' '}
                    <FormattedMessage id='VALUES_DESC_3' />
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className='row'>
            {ValuesList.map((val, i) => (
              <div
                className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'
                key={i}
              >
                <div>
                  <div className='service service__style--2'>
                    <div className='icon'>{val.icon}</div>
                    <div className='content'>
                      <h3 className='title'>{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      {/* Projects */}
      <div className='portfolio-area pt--60 pb--60'>
        <div className='rn-slick-dot'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='section-title service-style--3 text-left mb--15 mb_sm--0'>
                  <h3 className='title'> {dataAbout[9]?.title}</h3>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='slick-space-gutter--15 slickdot--20'>
                  <Slider {...slickDot2Items}>
                    {ProjectList.map((value, index) => (
                      <div className='portfolio' key={index}>
                        <div className='thumbnail-inner'>
                          <div className={`thumbnail ${value.image}`}></div>
                          <div className={`bg-blr-image ${value.image}`}></div>
                        </div>
                        <div className='content'>
                          <div className='inner'>
                            <h4>
                             {value.title}
                            </h4>
                            <h5>{value.description}</h5>
                          </div>
                          <button
                          className={classNames(
                            'rn-button-style--2 btn-white-color',
                            styles.projectsLink
                          )}
                          onClick={()=>{}}
                        >
                          {value.link}
                        </button>
                        </div>
                     
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team members */}
      <div className='rn-team-area bg_color--1 ptb--90'>
        <div className='container'>
          {dataAbout[10]?.enable && (
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title service-style--3 text-center mb--25'>
                  <h3 className='title'>{dataAbout[10]?.title}</h3>
                  {language.includes('en-US') ? (
                    <p>{dataAbout[10]?.descriptionEng}</p>
                  ) : (
                    <p>{dataAbout[10]?.descriptionVn}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='team'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../../assets/images/team/team-01.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Anh Tu Dang</h4>
                  <p className='designation'> Managing Partner</p>
                  <p className='designation'>
                    Anh Tu Dang is a graduate from University College London
                    (UCL), majoring in Economics. He founded the business in
                    2021 when realizing various business opportunities between
                    the two countries, Vietnam and United Kingdom. Talking about
                    Dang & Associates, Ltd., he said: “...” (input company
                    vision)
                  </p>
                </div>
                <ul className='social-icon'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='http://linkedin.com/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='team'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../../assets/images/team/team-02.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Khanh Linh Dang</h4>
                  <p className='designation'>Partner</p>
                  <p className='designation'>
                    Anh Tu Dang is a graduate from University College London
                    (UCL), majoring in Economics. He founded the business in
                    2021 when realizing various business opportunities between
                    the two countries, Vietnam and United Kingdom. Talking about
                    Dang & Associates, Ltd., he said: “...” (input company
                    vision)
                  </p>
                </div>
                <ul className='social-icon'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='http://linkedin.com/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
              <div className='team'>
                <div className='thumbnail'>
                  <img
                    className='w-100'
                    src={require('../../assets/images/team/team-03.jpg')}
                    alt='Blog Images'
                  />
                </div>
                <div className='content'>
                  <h4 className='title'>Ngoc Vinh Quang Hoang</h4>
                  <p className='designation'>Partner</p>
                </div>
                <ul className='social-icon'>
                  <li>
                    <a href='https://www.facebook.com/'>
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href='http://linkedin.com/'>
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href='https://twitter.com/'>
                      <FaTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='backto-top'>
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default About;
