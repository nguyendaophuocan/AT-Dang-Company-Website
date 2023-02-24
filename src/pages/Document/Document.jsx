import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Content } from 'antd/es/layout/layout';
import styles from './document.module.scss';
const Document = () => {
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
                    <h1 className='title theme-gradient'>Document Sender</h1>
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
            <div className='col-lg-12'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>Form</h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='email'
                      name='email'
                      placeholder=' Email'
                      required
                    />
                  </div>

                  <div className='rn-form-group'>
                    <input
                      type='text'
                      name='subject'
                      placeholder='Subject'
                      required
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      name='description'
                      placeholder='Description'
                      required
                    ></textarea>
                  </div>

                  <div className='rn-form-group'>
                    <button
                      className='rn-button-style--2 btn-solid'
                      type='submit'
                      value='submit'
                      name='submit'
                      id='mc-embedded-subscribe'
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Document;
