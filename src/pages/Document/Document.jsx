import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Content } from 'antd/es/layout/layout';
import styles from './document.module.scss';
const Document = () => {
  const [dataCreate, setDataCreate] = useState({
    contextList: [],
  });
  const [inputValue1, setInputValue1] = useState({
    title: '',
    content: '',
  });
  const [inputValue2, setInputValue2] = useState({
    title: '',
    content: '',
  });
  const [inputValue3, setInputValue3] = useState({
    title: '',
    content: '',
  });
  const [inputValue4, setInputValue4] = useState({
    title: '',
    content: '',
  });
  const [inputValue5, setInputValue5] = useState({
    title: '',
    content: '',
  });
  const handleChangeValue1 = (e) => {
    setInputValue1({
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeValue2 = (e) => {
    setInputValue2({
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeValue3 = (e) => {
    setInputValue3({
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeValue4 = (e) => {
    setInputValue4({
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeValue5 = (e) => {
    setInputValue5({
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    let data;
    let inputValue;
    let i;
    for (i = 1; i < 6; i++) {
      dataCreate.contextList.push(inputValue + `${i}`);
    }
  };
  return (
    <Fragment>
      <Helmet pageTitle='Document' />
      <div
        className='slider-activation slider-creative-agency with-particles'
        id='home'
      >
        <div className='bg_image bg_image--25'>
          <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className={`inner text-center`}>
                    <h1 className='title theme-gradient'>Document Creator</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact-form--1 ptb--100'>
        <div className='container'>
          <div className='row row--35 align-items-start'>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Section 1</h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='title1'
                      placeholder='Title'
                      value={inputValue1.title}
                      onChange={handleChangeValue1}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='content1'
                      placeholder='content'
                      value={inputValue1.content}
                      onChange={handleChangeValue1}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Section 2</h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='title2'
                      placeholder='Title'
                      value={inputValue2.title}
                      onChange={handleChangeValue2}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='content2'
                      placeholder='content'
                      value={inputValue2.content}
                      onChange={handleChangeValue2}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Section 3</h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='title3'
                      placeholder='Title'
                      value={inputValue3.title}
                      onChange={handleChangeValue3}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='content3'
                      placeholder='content'
                      value={inputValue3.content}
                      onChange={handleChangeValue3}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Section 4</h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='title4'
                      placeholder='Title'
                      value={inputValue4.title}
                      onChange={handleChangeValue4}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='content4'
                      placeholder='content'
                      value={inputValue4.content}
                      onChange={handleChangeValue4}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Section 5</h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='title5'
                      placeholder='Title'
                      value={inputValue5.title}
                      onChange={handleChangeValue5}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='content5'
                      placeholder='content'
                      value={inputValue5.content}
                      onChange={handleChangeValue5}
                    />
                  </div>
                </form>
              </div>{' '}
              <div className='slide-btn mt--80'>
                <button
                  className='rn-button-style--2 btn-primary-color'
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Document;
