import { Fragment, useState } from 'react';

import CounterOne from '../../elements/counters/CounterTwo';
import FooterHome from '../../components/footer/FooterHome';
import Helmet from '../../components/common/Helmet';
import TeamOne from '../../blocks/team/TeamOne';
import Slider from 'react-slick';
import { portfolioSlick2 } from '../../page-demo/script';
import featureImage from '../../assets/images/featured/featured-01.jpg';
import BlogContent from '../../elements/blog/BlogContent';
import { Link } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';

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

const ServiceListOne = [
  {
    icon: 'icon-01.png',
    title: 'Item 1',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: 'icon-02.png',
    title: 'Item 2',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
  {
    icon: 'icon-03.png',
    title: 'Item 3',
    description:
      'I throw myself down among the tall grass by the stream as I lie close to the earth.',
  },
];

const Home = () => {
  const [sectionValue, setSetionValue] = useState({
    first: 'Dang & Assosiates, LTD.',
    second: "Our selective retailing project is dedicated to the class and modern lifestyle of yours – our customers. We will collect and hand-deliver all the finest pieces that you are looking for, from fashion and luxury, watches and accessories, wines and spirits, and more. ",
    third: 'SHOP NOW',
  });

  const PostList = BlogContent.slice(0, 3);

  const handleShopNow = () => {
    window.location.href = 'https://collectibles.atdang.com';
  };

  const handleChangeEditableContent = (section) => {};
  return (
    <Fragment>
      <Helmet pageTitle='Company website' />
      <>
        {/* Start Slider Area   */}
        <div className='slider-activation slider-creative-agency'>
          <div className='bg_image bg_image--29' data-black-overlay='4'>
            <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className={`inner text-center`}>
                      <h1 className='title theme-gradient'>
                        <ContentEditable
                          html={`<span> ${sectionValue.first}</span>`}
                          disabled={false}
                          onChange={() => handleChangeEditableContent('')}
                        />
                      </h1>
                      <p className='description'>
                        <ContentEditable
                          html={`<span> ${sectionValue.second}</span>`}
                          disabled={false}
                          onChange={() => handleChangeEditableContent('')}
                        />
                      </p>
                      <div className='slide-btn'>
                        <button
                          className='rn-button-style--2 btn-primary-color'
                          onClick={handleShopNow}
                        >
                          SHOP NOW
                        </button>
                      </div>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div className='service-area creative-service-wrapper ptb--120 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='feature-area'>
                  <span>Lorem ipsum </span>
                  <h3 className='title mt--20 fontWeight500 lineheight--1-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </h3>
                </div>
              </div>
            </div>
            <div className='row service-one-wrapper mt--30'>
              {ServiceListOne.map((val, i) => (
                <div
                  className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'
                  key={i}
                >
                  <a href='/service-details'>
                    <div className='service service__style--1'>
                      <div className='icon'>
                        <img
                          src={require(`../../assets/images/icons/${val.icon}`)}
                          alt='Service Icon'
                        />
                      </div>
                      <div className='content'>
                        <h4 className='title'>{val.title}</h4>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Call To Action Area  */}
        <div className='call-to-action-wrapper call-to-action bg_image bg_image--30 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='inner text-left'>
                  <h2>Let's explore</h2>
                  <Link
                    className='rn-button-style--2 mt--70 mt_sm--30 mt_md--30'
                    to='/contact'
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Call To Action Area  */}

        {/* Start CounterUp Area */}
        <div className='rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1'>
          <div className='container'>
            <CounterOne />
          </div>
        </div>
        {/* End CounterUp Area */}

        {/* Start Content Box  */}
        <div className='rn-content-box-area rn-content-box-style--1 pb--120 bg_color--1'>
          <div className='row row--0 align-items-center'>
            <div className='col-lg-12 col-xl-6'>
              <div className='thumbnail'>
                <img src={featureImage} alt='Featured Images' />
              </div>
            </div>
            <div className='col-lg-12 col-xl-6 mt_lg--50 mt_md--30 mt_sm--30'>
              <div className='content'>
                <p className='subtitle'>
                  <span>Lorem ipsum </span>{' '}
                </p>
                <h2 className='fontWeight500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,.
                </p>
                <ul className='list-style mt--30'>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tem
                  </li>
                  <li>Goldfinch realistic sporadic ingenuous</li>
                  <li>
                    Abominable this abidin far successfully then like piquan
                  </li>
                  <li>Risus commodo viverra</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Content Box  */}

        <div className='portfolio-area ptb--120 bg_color--1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='section-title text-left service-style--3 mb--30'>
                  <h2 className='title'>All Works</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam,.
                  </p>
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

        {/* Start Blog Area */}
        <div className='rn-blog-area pt--120 pb--80 bg_color--1'>
          <div className='container'>
            <div className='row align-items-end'>
              <div className='col-lg-12'>
                <div className='section-title service-style--3 text-center'>
                  <h2 className='title'>Latest News</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt--60'>
              {PostList.map((value, i) => (
                <div className='col-lg-4 col-md-6 col-sm-6 col-12' key={i}>
                  <div className='blog blog-style--1'>
                    <div className='thumbnail'>
                      <a href='/blog-details'>
                        <img
                          className='w-100'
                          src={require(`../../assets/images/blog/blog-${value.images}.jpg`)}
                          alt='Blog Images'
                        />
                      </a>
                    </div>
                    <div className='content'>
                      <p className='blogtype'>{value.category}</p>
                      <h4 className='title'>
                        <a href='/blog-details'>{value.title}</a>
                      </h4>
                      <div className='blog-btn'>
                        <a className='rn-btn text-white' href='/blog-details'>
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start Team Area  */}
        <div className='rn-team-wrapper pb--120 bg_color--1'>
          <div className='rn-team-area'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='section-title text-left mb--30'>
                    <h2> Dang and Associates, Ltd. – Our stories</h2>
                    <p>
                    Dang & Associates, Ltd. operates based on trust from the ground up
                    </p>
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

        <FooterHome />
      </>
    </Fragment>
  );
};

export default Home;
