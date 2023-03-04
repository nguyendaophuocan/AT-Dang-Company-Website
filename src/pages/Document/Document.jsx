import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';

import { useCreateDocumentDetailMutation } from '../../features/document-detail/documentDetailApiSlice';
import { Spin } from 'antd';
import { notification } from 'antd';

const Document = () => {
  const [createDocumentDetail, { isLoading }] =
    useCreateDocumentDetailMutation();

  const [createDocumentData, setCreateDocumentData] = useState({
    contextList: [
      { titleSec1: '', descriptionSec1: '' },
      { titleSec2: '', descriptionSec2: '' },
      { titleSec3: '', descriptionSec3: '' },
      { titleSec4: '', descriptionSec4: '' },
      { titleSec5: '', descriptionSec5: '' },
    ],
  });
  const handleChangeDocumentData = (e) => {
    if (e.target.name === 'titleSec1' || e.target.name === 'descriptionSec1') {
      setCreateDocumentData((prevArr) => {
        const result = { ...prevArr };
        result.contextList[0] = {
          ...result.contextList[0],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    }
    if (e.target.name === 'titleSec2' || e.target.name === 'descriptionSec2') {
      setCreateDocumentData((prevArr) => {
        const result = { ...prevArr };
        result.contextList[1] = {
          ...result.contextList[1],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    }
    if (e.target.name === 'titleSec3' || e.target.name === 'descriptionSec3') {
      setCreateDocumentData((prevArr) => {
        const result = { ...prevArr };
        result.contextList[2] = {
          ...result.contextList[2],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    }
    if (e.target.name === 'titleSec4' || e.target.name === 'descriptionSec4') {
      setCreateDocumentData((prevArr) => {
        const result = { ...prevArr };
        result.contextList[3] = {
          ...result.contextList[3],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    }
    if (e.target.name === 'titleSec5' || e.target.name === 'descriptionSec5') {
      setCreateDocumentData((prevArr) => {
        const result = { ...prevArr };
        result.contextList[4] = {
          ...result.contextList[4],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    }
  };
  const handleSubmit = async (data) => {
    const fomattedData = data.contextList.map((item) => {
      return {
        title: Object.values(item)[0],
        description: Object.values(item)[1],
      };
    });
    const payload = { contextList: fomattedData };
    const result = await createDocumentDetail(payload);
    if (result?.error) {
      openNotification('Create Document failed');
    } else {
      openNotification('Create Document successfuly');
      window.scrollTo(0, 0);
      setCreateDocumentData({
        contextList: [
          { titleSec1: '', descriptionSec1: '' },
          { titleSec2: '', descriptionSec2: '' },
          { titleSec3: '', descriptionSec3: '' },
          { titleSec4: '', descriptionSec4: '' },
          { titleSec5: '', descriptionSec5: '' },
        ],
      });
    }
  };

  const key = 'updatable';

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (value) => {
    setTimeout(() => {
      api.open({
        key,
        message: value,
      });
    }, 500);
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
      {contextHolder}
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
                      name='titleSec1'
                      placeholder='Title'
                      value={createDocumentData.contextList[0].titleSec1}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec1'
                      placeholder='Content'
                      value={createDocumentData.contextList[0].descriptionSec1}
                      onChange={handleChangeDocumentData}
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
                      name='titleSec2'
                      placeholder='Title'
                      value={createDocumentData.contextList[1].titleSec2}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec2'
                      placeholder='Content'
                      value={createDocumentData.contextList[1].descriptionSec2}
                      onChange={handleChangeDocumentData}
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
                      name='titleSec3'
                      placeholder='Title'
                      value={createDocumentData.contextList[2].titleSec3}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec3'
                      placeholder='Content'
                      value={createDocumentData.contextList[2].descriptionSec3}
                      onChange={handleChangeDocumentData}
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
                      name='titleSec4'
                      placeholder='Title'
                      value={createDocumentData.contextList[3].titleSec4}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec4'
                      placeholder='Content'
                      value={createDocumentData.contextList[3].descriptionSec4}
                      onChange={handleChangeDocumentData}
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
                      name='titleSec5'
                      placeholder='Title'
                      value={createDocumentData.contextList[4].titleSec5}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec5'
                      placeholder='Content'
                      value={createDocumentData.contextList[4].descriptionSec5}
                      onChange={handleChangeDocumentData}
                    />
                  </div>
                </form>
              </div>{' '}
              {isLoading ? (
                <Spin className='mt--80' />
              ) : (
                <div className='slide-btn mt--80'>
                  <button
                    className='rn-button-style--2 btn-primary-color'
                    onClick={() => handleSubmit(createDocumentData)}
                  >
                    Create
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Document;
