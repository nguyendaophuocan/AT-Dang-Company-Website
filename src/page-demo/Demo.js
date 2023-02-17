import React, {Component, Fragment} from "react";
import ScrollToTop from 'react-scroll-up';
import Particles from "react-tsparticles";
import Slider from "react-slick";
import { innerPageDemo } from "../page-demo/script";
import { testimonialActivation } from "../page-demo/script";
import { ProgressBar } from 'react-bootstrap';

import {
    FaReact,
    FaSass
} from "react-icons/fa";
import {
    FiSmartphone,
    FiCode,
    FiDownload,
    FiCommand,
    FiHeadphones,
    FiBold,
    FiArrowUp
} from "react-icons/fi";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



const singleDemo = [
    {
        url: 'interior-landing',
        imageUrl: 'interior-design.png',
        title: 'Dang & Assosiates, LTD.',
        description: '',
        label: 'New'
    },    
]


class Demo extends Component {
    render() {
        return (
            <Fragment>
                {/* Start Banner Area  */}
                <div className="prv-banner-wrapper"
                     style={{backgroundImage: `url("assets/images/preview/preview-bg.jpg")`}}>
                    <div className="container-fluid">
                        <div className="plr--120">
                            <div className="row">
                                <div className="col-lg-8 col-xl-5">
                                    <div className="inner">
                                        <div className="logo text-left">
                                            <a href="/">
                                                <img src="../assets/assets/images/logo/logo-all-dark.png" alt="Trydo Images"/>
                                            </a>
                                        </div>
                                        <p className="title">Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!</p>
                                        <div className="purshase-btn">
                                            <a href="https://themeforest.net/checkout/from_item/25457315?license=regular" target="_blank" className="rn-button-style--2 btn-solid" rel="noreferrer">BUY Now</a>
                                            <a href="#demo" className="rn-button-style--2 btn-border rn-btn-dark border-opacity-half">View Demos</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fullscreen empty-div gradient-overlay"></div>
                {/* End Banner Area  */}

                {/* Start Preview Main Wrapper */}
                <div className="main-wrapper" id="demo">

                    {/* Start Main Demo Area  */}
                    <div className="home-demo-area bg_color--1 ptb--120">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Home Demo</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas. <br/> More
                                            demos are coming soon.</p>
                                    </div>
                                </div>
                            </div>
                            <Tabs>
                                <div className="row text-center">
                                    <div className="col-lg-12">
                                        <div className="tablist-inner">
                                            <TabList className="pv-tab-button text-center">
                                                <Tab><span>All Demo</span></Tab>
                                                <Tab><span>Agency</span></Tab>
                                                <Tab><span>Corporate</span></Tab>
                                                <Tab><span>Portfolio</span></Tab>
                                                <Tab><span>Landing</span></Tab>
                                                <Tab><span>New</span></Tab>
                                            </TabList>
                                        </div>
                                    </div>
                                </div>
                                
                                <TabPanel className="row">
                                    {singleDemo.map((value , index) => (
                                        // Start Single Demo 
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="single-demo">
                                                <a target="_blank" rel="noopener noreferrer" href={`/${value.url} `}>
                                                    <img src={`../assets/assets/images/preview/${value.imageUrl}`} alt="Creative Agency Images"/>
                                                    <h3 className="title">{value.title}</h3>
                                                    <p className="info">{value.description}</p>
                                                    {value.label ? <div className="label-new"><span>{value.label}</span></div> : ''}
                                                </a>
                                            </div>
                                        </div>
                                        // End Single Demo
                                    ))}
                                </TabPanel>
                            </Tabs>

                        </div>
                    </div>
                    {/* End Main Demo Area  */}

                    {/* Start Main Demo  */}
                    <div className="home-demo-area bg_color--3 pt--120 pb--130 pt_md--80 pb_md--90 pt_sm--80 pb_sm--90">
                        <div className="wrapper plr--120">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30">
                                        <h2 className="theme-gradient">Inner Pages</h2>
                                        <p>Choose one of styles or cutomize easily your site following your ideas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Demo  */}

                    {/* Start Feature Area  */}
                    <div className="prv-feature service-area bg_color--7 ptb--120">
                        <div className="wrapper plr--120">

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center pb--30 pb_sm--0 pb_md--0">
                                        <h2 className="theme-gradient"><span>Awesome Feature</span></h2>
                                        <p className="text-white">Trydo are designed for everyone. It doesn’t matter if you’re a React <br />Guru
                                        or just a complete beginner.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Feature Area  */}

                    <div className="gt-matrik-score-area ptb--120 bg_color--1">
                        <div className="container">
                            <div className="row row--35">
                                
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="inner">
                                        <h2 className="title">Trydo <br />Performance</h2>
                                        <p>Trydo Page speed is so faster and takes byte times for load each page.
                                            It's is very easy to use, loads faster and provides better performance for your
                                            wedsite.</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12 col-12 mt_md--40 mt_sm--40">
                                    <div className="progress-wrapper">
                                        <h3 className="heading">Gtmetrix Scores</h3>
                                        <div className="rn-progress-bar progress-bar--3 large-bar">
                                            <div className="single-progress">
                                                <h6 className="title">PageSpeed</h6>
                                                <ProgressBar now={100} />
                                                <span className="label">100%</span>
                                            </div>

                                            <div className="single-progress">
                                                <h6 className="title">YSlow</h6>
                                                <ProgressBar now={100} />
                                                <span className="label">100%</span>
                                            </div>

                                            <div className="single-progress">
                                                <h6 className="title">Fully Loaded</h6>
                                                <ProgressBar now={100} />
                                                <span className="label">100%</span>
                                            </div>

                                        </div>   
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="shape-images">
                            <img src="../assets/assets/images/icons/wave-icon.png" alt="Wave Images" />
                        </div>
                    </div>

                    {/* Start Responsive Device Area  */}
                    <div className="responsive-device-area bg_image bg_image--34">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-xl-6 offset-xl-6">
                                    <div className="inner">
                                        <div className="section-title">
                                            <h2 className="title theme-gradient">Trydo works perfectly on any device.</h2>
                                            <p>Trydo site works seamlessly on any device without a single compromise, will
                                                always looks cool and great on any
                                                mobile device or browsers. Its easily adapt your content for mobile, tablet
                                                and so on.</p>
                                        </div>
                                        <div className="responsive-layout-mokup">
                                            <div className="mokup-list">
                                                <div className="icon">
                                                    <img src="../assets/assets/images/icons/phone.png" alt="icon Images" />
                                                </div>
                                                <h6>Phone</h6>
                                            </div>
                                            <div className="mokup-list">
                                                <div className="icon">
                                                    <img src="../assets/assets/images/icons/tablet.png" alt="icon Images" />
                                                </div>
                                                <h6>Tablet</h6>
                                            </div>
                                            <div className="mokup-list">
                                                <div className="icon">
                                                    <img src="../assets/assets/images/icons/desktop.png" alt="icon Images" />
                                                </div>
                                                <h6>Desktop</h6>
                                            </div>
                                        </div>
                                        <p className="subtitle">- Separate Options for Each Screen Size</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Responsive Device Area  */}

                     {/* Start Faq Area */}
                    <div className="rn-accordion-area pv-feaq-area bg_color--1 ptb--120">
                        <div className="container">
                            <div className="row row--35">
                                <div className="col-lg-8 col-sm-12">
                                    <div className="section-title text-left mb--30">
                                        <h2 className="title">Have a <span className="theme-color">Question?</span>
                                        </h2>
                                        <p>Check out our FAQ section to see if we can help.</p>
                                    </div>
                                    <div className="faq-area">
                                        <Accordion className="accodion-style--1" preExpanded={'0'}>
                                            <AccordionItem >
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        1. What is tryDo ? How does it work?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>Welcome to TryDO React Creative Agency, React Portfolio and Corporate Multi Purpose Template Built With React JS. NO jQuery!. It works too much faster loading speed and you can works too much comfortability.Trydo create your website so much faster, use to use and Well Documented Codes for your customization.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        2. How can I run trydo react template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>You can run trydo easily.
                                                    First You'll need to have node and npm on your machine.
                                                    So Please open your command prompt then check your node -v and npm -v Version.
                                                    Goes To Your your command prompt: then
                                                    First: <strong>yarn install</strong></p>
                                                    <p>At Last: <strong>yarn start</strong>. By the following way you can be run your project easily.</p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        3. How can I change my demo page instead of splash page?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <div>
                                                        <p>
                                                            You can be presenting any home page instead of splash page. http://localhost:3000 you can showing any page as your you are like. First you have to go index.js page then:
                                                        </p>
                                                        <p>First Step (replace your choose demo page): Example: import Demo form './home/MainDemo' Instead of './home/PortfolioLanding'</p>
                                                        <p>Example: <a className="theme-gradient" href="https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0">https://www.dropbox.com/s/ysornwsweh836wi/change-home-page.png?dl=0</a></p>
                                                    </div>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        4. How can I get the customer support?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        After purchasing the product  need you any support you can be share with us with sending mail to <a className="theme-gradient" href="mailto:rainbowit10@gmail.com">rainbowit10@gmail.com</a>.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        5. Can I get update regularly and For how long do I get updates?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, We will get update the Trydo. And you can get it any time. Next time we will comes with more feature.
                                                        You can be get update for unlimited times. Our dedicated team works for update.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        6. Can I change any component as I like?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, You can change any component as you like. And By the way you can build your website which you are choose.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>

                                            <AccordionItem>
                                                <AccordionItemHeading>
                                                    <AccordionItemButton>
                                                        7. Can I build a complete project with this template?
                                                    </AccordionItemButton>
                                                </AccordionItemHeading>
                                                <AccordionItemPanel>
                                                    <p>
                                                        Yes, Why not. You can build a project and complete website as you are like. More component are available include in this templete. And you can be use it following documentation.
                                                    </p>
                                                </AccordionItemPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-12 mt_md--40 mt_sm--40">
                                    <div className="card-box text-left">
                                        <div className="service">
                                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg></div>
                                            <div className="content">
                                                <h3 className="title">Online Documentation</h3>
                                                <p>Well organized and up to date</p>
                                                <a target="_blank" href="#" className="rbt-button rn-button-style--2 rn-btn-small-2 btn-solid-border"><span className="button-text">Online Documentation</span></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-box text-left mt--40 support">
                                        <div className="service">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                                            </div>
                                            <div className="content">
                                                <h3 className="title">Dedicated Support</h3>
                                                <p>Need support ? Submit a ticket. We will be happy to assist you.</p>
                                                <a target="_blank" href="https://support.rainbowit.net/support/login" className="rbt-button rn-button-style--2 rn-btn-small-2 btn-solid-border" rel="noreferrer"><span className="button-text">Get Support</span></a>
                                                <ul className="liststyle">
                                                    <li><span>Support Time:</span> Monday – Friday</li>
                                                    <li><span>Response Time:</span> Maximum 24 hours</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>        
                    </div>
                     {/* Start Faq Area */}
                                    

                    
                    {/* Start Gallery Area  */}
                    <div className="rn-gallery-area bg_image--35 pt--120 pb--70">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center text-white">
                                    <h2 className="title theme-gradient">Say Hello To <br />Trydo Elements</h2>
                                    <p className="text-white">Our Fantastic Trydo Template Elements</p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt--50 mt_sm--20">
                            <div className="col-lg-12">
                                <div className="thumbnai">
                                    <img src="assets/images/bg/gallery.png" alt="Gallery Images" />
                                </div>
                            </div>
                        </div>
                    </div>   
                    {/* End Gallery Area  */}   


                    <div className="testimonial-area bg_color--1 pt--120 pb--150 pt_md--80 pb_md--110 pt_sm--80 pb_sm--110">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-center mb--30">
                                        <h2 className="title theme-gradient">Our Customer feedback</h2>
                                        <p>Our Fantastic Envato Customers Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <Slider className="mt--30 mt_sm--5 mt_md--5 testimonial-activation rn-slick-dot slick-gutter-15" {...testimonialActivation}>

                                        {/* Start Single Testimonial  */}
                                        <div className="single-testimonial">
                                            <div className="pv-testimonial">
                                                <div className="inner">
                                                    <div className="inner-top">
                                                        <div className="thumbnail">
                                                            <img src="../assets/assets/images/icons/download.png" alt="Download Images" />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">The4</h4>
                                                            <p>@The4</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Design Quality</h5>
                                                        <p>The product is of good quality and easy to use, We are also the
                                                            author on Envato and our requirement is very high, Affordable
                                                            and excellent...</p>
                                                        <div className="rating">
                                                            <img src="../assets/assets/images/icons/rating.png" alt="Rating Images" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Testimonial  */}
                                        

                                        {/* Start Single Testimonial  */}
                                        <div className="single-testimonial">
                                            <div className="pv-testimonial">
                                                <div className="inner">
                                                    <div className="inner-top">
                                                        <div className="thumbnail">
                                                            <img src="../assets/assets/images/icons/download.png" alt="Download Images" />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">wimm-x</h4>
                                                            <p>@wimm-x</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Design Quality</h5>
                                                        <p>The configuration of the contact form was problematic, but the
                                                            support of
                                                            the Rainbow team helped a lot. That convinced me! Thanks!</p>
                                                        <div className="rating">
                                                            <img src="../assets/assets/images/icons/rating.png" alt="Rating Images" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Testimonial  */}
                                        

                                        {/* Start Single Testimonial  */}
                                        <div className="single-testimonial">
                                            <div className="pv-testimonial">
                                                <div className="inner">
                                                    <div className="inner-top">
                                                        <div className="thumbnail">
                                                            <img src="../assets/assets/images/icons/download.png" alt="Download Images" />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">Cloudcapped</h4>
                                                            <p>@Cloudcapped</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Customizability</h5>
                                                        <p>Excellent design template and easy to customize if you know
                                                            React. Good
                                                            value.</p>
                                                        <div className="rating">
                                                            <img src="../assets/assets/images/icons/rating.png" alt="Rating Images" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Testimonial  */}

                                        {/* Start Single Testimonial  */}
                                        <div className="single-testimonial">
                                            <div className="pv-testimonial">
                                                <div className="inner">
                                                    <div className="inner-top">
                                                        <div className="thumbnail">
                                                            <img src="../assets/assets/images/icons/download.png" alt="Download Images" />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">piotrgrz</h4>
                                                            <p>@piotrgrz</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Customer Support</h5>
                                                        <p>Perfectly support. Well deserved 5 star for code and design
                                                            quality.</p>
                                                        <div className="rating">
                                                            <img src="../assets/assets/images/icons/rating.png" alt="Rating Images" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Testimonial  */}

                                        {/* Start Single Testimonial  */}
                                        <div className="single-testimonial">
                                            <div className="pv-testimonial">
                                                <div className="inner">
                                                    <div className="inner-top">
                                                        <div className="thumbnail">
                                                            <img src="assets/images/icons/download.png" alt="Download Images" />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">xBoot</h4>
                                                            <p>@xBoot</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Customer Support</h5>
                                                        <p>The best customer support I've ever received on Envato. The
                                                            author is absolutely great and he's always so fast to answer...
                                                        </p>
                                                        <div className="rating">
                                                            <img src="assets/images/icons/rating.png" alt="Rating Images" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Testimonial  */}

                                        {/* Start Single Testimonial  */}
                                        <div className="single-testimonial">
                                            <div className="pv-testimonial">
                                                <div className="inner">
                                                    <div className="inner-top">
                                                        <div className="thumbnail">
                                                            <img src="assets/images/icons/download.png" alt="Download Images" />
                                                        </div>
                                                        <div className="info">
                                                            <h4 className="title">mindcycle001</h4>
                                                            <p>@mindcycle001</p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Customer Support</h5>
                                                        <p>Simply amazing support... TOP Seller in terms of support...
                                                            Thanks a
                                                            lot... I will keep buying your products... amazing work... bug
                                                            free...
                                                            thanks a lot...</p>
                                                        <div className="rating">
                                                            <img src="assets/images/icons/rating.png" alt="Rating Images" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Testimonial  */}

                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>          


                    {/* Start Footer Area  */}
                    <footer className="call-to-action-wrapper text-white-wrapper call-to-action ptb--120 with-particles">
                        <div className="frame-layout__particles">
                            <Particles className="particle"  
                                options={{
                                    style:{
                                        position: "absolute"
                                    },
                                    fpsLimit: 100,
                                    interactivity: {
                                    detectsOn: "canvas",
                                    events: {
                                        onClick: {
                                        enable: true,
                                        mode: "push",
                                        },
                                        onHover: {
                                        enable: true,
                                        mode: "repulse",
                                        },
                                        resize: true,
                                    },
                                    modes: {
                                        bubble: {
                                            distance: 100,
                                            duration: 2,
                                            opacity: 0.8,
                                            size: 10,
                                            color: "#ffffff",
                                        },
                                        push: {
                                        quantity: 4,
                                        },
                                        repulse: {
                                            distance: 100,
                                            duration: 0.4,
                                            color: "#ffffff",
                                        },
                                    },
                                    },
                                    particles: {
                                    color: {
                                        value: "#ffffff",
                                    },
                                    links: {
                                        color: "#ffffff",
                                        distance: 150,
                                        enable: true,
                                        opacity: 0.5,
                                        width: 1,
                                    },
                                    collisions: {
                                        enable: true,
                                    },
                                    move: {
                                        direction: "none",
                                        enable: true,
                                        outMode: "bounce",
                                        random: false,
                                        speed: 6,
                                        straight: false,
                                       
                                    },
                                    number: {
                                        density: {
                                            enable: true,
                                            value_area: 2000,
                                        },
                                        value: 80,
                                    },
                                    opacity: {
                                        value: 0.5,
                                    },
                                    shape: {
                                        type: "circle",
                                    },
                                    size: {
                                        random: true,
                                        value: 5,
                                    },
                                    },
                                    detectRetina: true,
                                }}
                            />
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner text-center">
                                        <span>Purchase The TryDo and Make Your Site super faster and easy.</span>
                                        <h2>Let's go to Purchase</h2>
                                        <a className="rn-button-style--2" target="_blank" href="https://themeforest.net/checkout/from_item/25457315?license=regular" rel="noreferrer"><span>Purchase Now</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/* End Footer Area  */}
                </div>
                {/* End Preview Main Wrapper */}
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiArrowUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
        )
    }
}
export default Demo;