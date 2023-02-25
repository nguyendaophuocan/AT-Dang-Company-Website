import { Fragment, useState, useEffect } from 'react';

import CounterOne from '../../elements/counters/CounterTwo';
import FooterHome from '../../components/footer/FooterHome';
import Helmet from '../../components/common/Helmet';
import TeamOne from '../../blocks/team/TeamOne';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../../page-demo/script';
import featureImage from '../../assets/images/featured/featured-01.jpg';
import { Link } from 'react-router-dom';
import ServiceTwo from '../../elements/ServiceTwo';

import { useGetNewsMutation } from '../../features/news/newsApiSlice';
import { useGetHomePageContentMutation } from '../../features/admin/adminApiSlice';

const PortfolioList2 = [
  {
    image: 'image-1',
    category: 'Development',
    title: 'Lorem ipsum',
  },
  {
    image: 'image-2',
    category: 'Development',
    title: 'Lorem ipsum',
  },
  {
    image: 'image-3',
    category: 'Development',
    title: ' Lorem ipsum',
  },
  {
    image: 'image-4',
    category: 'Development',
    title: ' Lorem ipsum',
  },
  {
    image: 'image-3',
    category: 'Development',
    title: ' Lorem ipsum',
  },
  {
    image: 'image-4',
    category: 'Development',
    title: ' Lorem ipsum',
  },
];

const Home = () => {
  const [getNews, { isLoadingNews, refetch }] = useGetNewsMutation();
  const [getHomePageContent, { isLoadingContent }] =
    useGetHomePageContentMutation();

  const handleShopNow = () => {
    window.location.href = 'https://collectibles.atdang.com';
  };
  const [dataNews, setDatanews] = useState([]);
  const [dataHome, setDataHome] = useState([]);

  const getNewsData = async () => {
    const queryParams = { off_set: 1, page_size: 3 };
    const result = await getNews(queryParams).unwrap();
    setDatanews(result);
  };
  const getHomepageData = async () => {
    const result = await getHomePageContent().unwrap();
    setDataHome(result);
  };
  useEffect(() => {
    getNewsData();
    getHomepageData();
  }, []);

  return (
    <Fragment>
      <Helmet pageTitle='Company website' />
      {/* Start Slider Area   */}
      <div className='slider-activation slider-creative-agency'>
        <div className='bg_image bg_image--29' data-black-overlay='4'>
          <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className={`inner text-center`}>
                    <h1 className='title theme-gradient'>
                      <span>{dataHome[0]?.enable && dataHome[0]?.title}</span>
                    </h1>
                    <p className='description fontSize28'>
                      <span>
                        {dataHome[0]?.enable && dataHome[0]?.description}
                      </span>
                    </p>
                    {dataHome[0]?.enable && (
                      <div className='slide-btn'>
                        <button
                          className='rn-button-style--2 btn-primary-color'
                          onClick={handleShopNow}
                        >
                          SHOP NOW
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Service Area  */}
      {/*       
      <div className='service-area ptb--75  bg_image bg_image--3'>
        <div className='container'>
          <ServiceTwo />
        </div>
      </div> */}

      {/* Start CounterUp Area */}
      {dataHome[1]?.enable && (
        <div className='rn-counterup-area pt--80 pb--110 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center'>
                  <h2 className='title'>{dataHome[1]?.title}</h2>
                  <p className='title'>{dataHome[1]?.description}</p>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div>
      )}

      {/* Start Content Box  */}
      {dataHome[2]?.enable && (
        <div className='rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1'>
          <div className='row row--0 align-items-center'>
            <div className='col-lg-12 col-xl-6'>
              <div className='thumbnail'>
                <img src={featureImage} alt='Featured Images' />
              </div>
            </div>
            <div className='col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30'>
              <div className='content'>
                <h2 className='fontWeight500'>{dataHome[2]?.title}</h2>
                <p>{dataHome[2]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {dataHome[3]?.enable && (
        <div className='portfolio-area ptb--30 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='section-title text-left service-style--3 mb--30'>
                  <h2 className='title'> {dataHome[3]?.title}</h2>
                  <p>{dataHome[3]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='wrapper portfolio-sacousel-inner mb--55'>
            <div className='portfolio-slick-activation mt--30 mt_sm--30'>
              <Slider {...portfolioSlick2}>
                {PortfolioList2.map((value, index) => (
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
                          <a href='/portfolio-details'>{value.title}</a>
                        </h4>
                        <div className='portfolio-button'>
                          <a className='rn-btn' href='/portfolio-details'>
                            Case Study
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}

      {/* Start Blog Area */}
      {dataHome[4]?.enable && (
        <div className='rn-blog-area pt--120 pb--120 bg_color--1'>
          <div className='container'>
            <div className='row align-items-end'>
              <div className='col-lg-12'>
                <div className='section-title service-style--3 text-center'>
                  <h2 className='title'> {dataHome[4]?.title}</h2>
                  <p>{dataHome[4]?.description}</p>
                </div>
              </div>
            </div>
            <div className='row mt--60'>
              {dataNews?.content?.map((value, i) => (
                <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
                  <div className='blog blog-style--1'>
                    <div className='thumbnail'>
                      <span>
                        <img
                          className='w-100'
                          src={require(`../../assets/images/blog/blog-0${++i}.jpg`)}
                          alt='Blog Images'
                        />
                      </span>
                    </div>
                    <div className='content'>
                      <p className='blogtype'>{value.category}</p>
                      <h4 className='title'>
                        <a href='/blog-details'>{value.description}</a>
                      </h4>
                      <div className='blog-btn'>
                        <Link className='rn-btn text-white' to='/news'>
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* End Blog Area */}

      {/* Start Team Area  */}
      {dataHome[5]?.enbale && (
        <div className='rn-team-wrapper pb--120 mb--80 bg_color--1'>
          <div className='rn-team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-left mb--30'>
                    <h2> {dataHome[5]?.title}</h2>
                    <p className='fontSize20'>{dataHome[5]?.description}</p>
                    <div className='slide-btn'>
                      <Link
                        className='rn-button-style--2 btn-primary-color'
                        to='/contact'
                      >
                        FIND OUT MORE
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
      )}

      <FooterHome />
    </Fragment>
  );
};

export default Home;
