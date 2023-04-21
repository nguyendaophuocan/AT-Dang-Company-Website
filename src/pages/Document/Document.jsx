import React, { Fragment, useState, useEffect } from 'react';

import {
  useCreateDocumentDetailMutation,
  useGetAllDocumentFilesMutation,
} from '../../features/document-detail/documentDetailApiSlice';
import { Button, Divider, message, Select, Spin, Upload } from 'antd';
import { notification } from 'antd';
import { useGetHeaderMutation } from '../../features/header/headerApiSlice';
import { UploadOutlined } from '@ant-design/icons';
import { FILESTACK_API_KEY } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { selectCurrentToken } from '../../features/auth/authSlice';

import { PickerOverlay } from 'filestack-react';
import { FormattedMessage } from 'react-intl';
import PageHelmet from '../../components/common/Helmet';

const Document = () => {
  const [dataHeader, setDataHeader] = useState([]);

  const [createDocumentDetail, { isLoading }] =
    useCreateDocumentDetailMutation();
  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const [sectionContextList, setSectionContextList] = useState({
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
      setSectionContextList((prevArr) => {
        const result = { ...prevArr };
        result.contextList[0] = {
          ...result.contextList[0],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    } else if (
      e.target.name === 'titleSec2' ||
      e.target.name === 'descriptionSec2'
    ) {
      setSectionContextList((prevArr) => {
        const result = { ...prevArr };
        result.contextList[1] = {
          ...result.contextList[1],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    } else if (
      e.target.name === 'titleSec3' ||
      e.target.name === 'descriptionSec3'
    ) {
      setSectionContextList((prevArr) => {
        const result = { ...prevArr };
        result.contextList[2] = {
          ...result.contextList[2],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    } else if (
      e.target.name === 'titleSec4' ||
      e.target.name === 'descriptionSec4'
    ) {
      setSectionContextList((prevArr) => {
        const result = { ...prevArr };
        result.contextList[3] = {
          ...result.contextList[3],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    } else if (
      e.target.name === 'titleSec5' ||
      e.target.name === 'descriptionSec5'
    ) {
      setSectionContextList((prevArr) => {
        const result = { ...prevArr };
        result.contextList[4] = {
          ...result.contextList[4],
          [e.target.name]: e.target.value,
        };
        return result;
      });
    }
  };
  const handleSubmit = async (
    documentName,
    sectionContextList,
    appendixData,
    selectedFileVal
  ) => {
    const fomattedData = sectionContextList.contextList.map((item) => {
      return {
        title: Object.values(item)[0],
        description: Object.values(item)[1],
      };
    });
    const payload = {
      name: documentName,
      contextList: fomattedData,
      pdf: selectedFileVal.length > 0 ? selectedFileVal : '',
      totalColumns: Number(selectedOptionVal),
      appendix_tittle: appendixData.appendixTitle,
      appendix_description: appendixData.appendixContent,
      subheading_1_category: subHeadingCreateData.subHeading1.subHeading1Title,
      subHeading1: {
        items: subHeadingCreateData.subHeading1.subHeading1Items.split(','),
      },
      subheading_2_category: subHeadingCreateData.subHeading2.subHeading2Title,
      subHeading2: {
        items: subHeadingCreateData.subHeading2.subHeading2Items.split(','),
      },
      subheading_3_category: subHeadingCreateData.subHeading3.subHeading3Title,
      subHeading3: {
        items: subHeadingCreateData.subHeading3.subHeading3Items.split(','),
      },
      subheading_4_category: subHeadingCreateData.subHeading4.subHeading4Title,
      subHeading4: {
        items: subHeadingCreateData.subHeading4.subHeading4Items.split(','),
      },
      subheading_5_category: subHeadingCreateData.subHeading5.subHeading5Title,
      subHeading5: {
        items: subHeadingCreateData.subHeading5.subHeading5Items.split(','),
      },
    };
    const result = await createDocumentDetail(payload);
    // const result = '';
    if (result?.error) {
      openNotification('Create Document failed');
    } else {
      openNotification('Create Document successfuly');
      window.scrollTo(0, 0);
      // setSectionContextList({
      //   contextList: [
      //     { titleSec1: '', descriptionSec1: '' },
      //     { titleSec2: '', descriptionSec2: '' },
      //     { titleSec3: '', descriptionSec3: '' },
      //     { titleSec4: '', descriptionSec4: '' },
      //     { titleSec5: '', descriptionSec5: '' },
      //   ],
      // });
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
  const [getAllDocumentFiles, { isLoading: isLoadingAllDocumentFiles }] =
    useGetAllDocumentFilesMutation();

  const getHeaderData = async () => {
    const result = await getHeader('document').unwrap();
    setDataHeader(result);
  };

  const [selectedFileVal, setSelectedFileVal] = useState([]);
  const [selectFileOptions, setSelectFileOptions] = useState([]);

  const getPdfFiles = async () => {
    const result = await getAllDocumentFiles();
    let options = [];
    const totalOptions = result.data.length;
    for (let i = 0; i < totalOptions; i++) {
      if (result.data[i])
        options.push({ value: result.data[i], label: result.data[i] });
    }
    setSelectFileOptions(options);
  };

  const handleSelectPdfFile = (name) => {
    openNotification('Upload file successfuly');
    setSelectedFileVal(name);
  };

  const [showFilestackUploader, setShowFilestackUploader] = useState(false);
  // const [pdfFileId, setPdfFileId] = useState('');

  const handleShowFilestack = (value) => {
    setShowFilestackUploader(value);
  };

  const [optionsColumns, setOptionsColumns] = useState([
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
  ]);

  const [selectedOptionVal, setSelectedOptionVal] = useState('');
  const handleChangeSelectColumn = (value) => {
    setSelectedOptionVal(value);
  };
  const [showSubheadingItemsForm, setShowSubheadingItemsForm] = useState({
    showSubheadingItem1: false,
    showSubheadingItem2: false,
    showSubheadingItem3: false,
    showSubheadingItem4: false,
    showSubheadingItem5: false,
  });

  const [subHeadingCreateData, seteSubHeadingCreateData] = useState({
    subHeading1: { subHeading1Title: '', subHeading1Items: '' },
    subHeading2: { subHeading2Title: '', subHeading2Items: '' },
    subHeading3: { subHeading3Title: '', subHeading3Items: '' },
    subHeading4: { subHeading4Title: '', subHeading4Items: '' },
    subHeading5: { subHeading5Title: '', subHeading5Items: '' },
    subHeading6: { subHeading6Title: '', subHeading6Items: '' },
  });

  const [appendixData, setAppendixData] = useState({
    appendixTitle: '',
    appendixContent: '',
  });

  const [documentName, setDocumentName] = useState('');

  const handleChangeDocumentName = (e) => {
    setDocumentName(e.target.value);
  };

  const handleChangeAppendix = (e) => {
    setAppendixData({ ...appendixData, [e.target.name]: e.target.value });
  };

  const handleAddSubheadingItems = (value, number) => {
    if (number === 1) {
      setShowSubheadingItemsForm({
        ...showSubheadingItemsForm,
        showSubheadingItem1: value,
      });
    } else if (number === 2) {
      setShowSubheadingItemsForm({
        ...showSubheadingItemsForm,
        showSubheadingItem2: value,
      });
    } else if (number === 3) {
      setShowSubheadingItemsForm({
        ...showSubheadingItemsForm,
        showSubheadingItem3: value,
      });
    } else if (number === 4) {
      setShowSubheadingItemsForm({
        ...showSubheadingItemsForm,
        showSubheadingItem4: value,
      });
    } else if (number === 5) {
      setShowSubheadingItemsForm({
        ...showSubheadingItemsForm,
        showSubheadingItem5: value,
      });
    }
  };

  const handleChangeValueSubheadingItems = (e, number) => {
    if (number === 1) {
      seteSubHeadingCreateData({
        ...subHeadingCreateData,
        subHeading1: {
          ...subHeadingCreateData.subHeading1,
          [e.target.name]: e.target.value,
        },
      });
    } else if (number === 2) {
      seteSubHeadingCreateData({
        ...subHeadingCreateData,
        subHeading2: {
          ...subHeadingCreateData.subHeading2,
          [e.target.name]: e.target.value,
        },
      });
    } else if (number === 3) {
      seteSubHeadingCreateData({
        ...subHeadingCreateData,
        subHeading3: {
          ...subHeadingCreateData.subHeading3,
          [e.target.name]: e.target.value,
        },
      });
    } else if (number === 4) {
      seteSubHeadingCreateData({
        ...subHeadingCreateData,
        subHeading4: {
          ...subHeadingCreateData.subHeading4,
          [e.target.name]: e.target.value,
        },
      });
    } else if (number === 5) {
      seteSubHeadingCreateData({
        ...subHeadingCreateData,
        subHeading5: {
          ...subHeadingCreateData.subHeading5,
          [e.target.name]: e.target.value,
        },
      });
    } else if (number === 6) {
      seteSubHeadingCreateData({
        ...subHeadingCreateData,
        subHeading6: {
          ...subHeadingCreateData.subHeading6,
          [e.target.name]: e.target.value,
        },
      });
    }
  };
  useEffect(() => {
    getHeaderData();
    getPdfFiles();
  }, []);

  return (
    <Fragment>
      <PageHelmet pageTitle='Document' />
      <div
        className='slider-activation slider-creative-agency with-particles'
        id='home'
      >
        <div className='bg_image bg_image--25' data-black-overlay='4'>
          <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className={`inner text-center`}>
                    <h2 className='title theme-gradient'>
                      {dataHeader?.title}
                    </h2>
                    <p> {dataHeader?.description}</p>
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
                <h2 className='title'>
                  <FormattedMessage id='COMPANY_NAME' />
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='text'
                      name='companyName'
                      placeholder="Company's name"
                      value={documentName}
                      onChange={handleChangeDocumentName}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>
                  {' '}
                  <FormattedMessage id='SECTION' /> 1
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='titleSec1'
                      placeholder='Title'
                      value={sectionContextList.contextList[0].titleSec1}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec1'
                      placeholder='Content'
                      value={sectionContextList.contextList[0].descriptionSec1}
                      onChange={handleChangeDocumentData}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>
                  {' '}
                  <FormattedMessage id='SECTION' /> 2
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='titleSec2'
                      placeholder='Title'
                      value={sectionContextList.contextList[1].titleSec2}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec2'
                      placeholder='Content'
                      value={sectionContextList.contextList[1].descriptionSec2}
                      onChange={handleChangeDocumentData}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>
                  {' '}
                  <FormattedMessage id='SECTION' /> 3
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='titleSec3'
                      placeholder='Title'
                      value={sectionContextList.contextList[2].titleSec3}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec3'
                      placeholder='Content'
                      value={sectionContextList.contextList[2].descriptionSec3}
                      onChange={handleChangeDocumentData}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>
                  {' '}
                  <FormattedMessage id='SECTION' /> 4
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='titleSec4'
                      placeholder='Title'
                      value={sectionContextList.contextList[3].titleSec4}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec4'
                      placeholder='Content'
                      value={sectionContextList.contextList[3].descriptionSec4}
                      onChange={handleChangeDocumentData}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>
                  {' '}
                  <FormattedMessage id='SECTION' /> 5
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group'>
                    <input
                      type='title'
                      name='titleSec5'
                      placeholder='Title'
                      value={sectionContextList.contextList[4].titleSec5}
                      onChange={handleChangeDocumentData}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='descriptionSec5'
                      placeholder='Content'
                      value={sectionContextList.contextList[4].descriptionSec5}
                      onChange={handleChangeDocumentData}
                    />
                  </div>
                </form>
              </div>{' '}
            </div>
            <div className='col-lg-12 mb--50'>
              <div className='section-title text-left mb--50'>
                <h2 className='title'>
                  {' '}
                  <FormattedMessage id='APPENDIX' />
                </h2>
              </div>
              <div className='form-wrapper'>
                <form action='' onSubmit={'sendEmail'}>
                  <div className='rn-form-group mb--20'>
                    <h4>
                      {' '}
                      <FormattedMessage id='TOTAL_COLUMNS' />
                    </h4>
                    <Select
                      style={{ width: 120 }}
                      onChange={handleChangeSelectColumn}
                      options={optionsColumns}
                      value={selectedOptionVal}
                      defaultValue={selectedOptionVal}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <input
                      type='text'
                      name='appendixTitle'
                      placeholder='Title'
                      value={appendixData.appendixTitle}
                      onChange={handleChangeAppendix}
                    />
                  </div>

                  <div className='rn-form-group'>
                    <textarea
                      type='content'
                      name='appendixContent'
                      placeholder='Content'
                      value={appendixData.appendixContent}
                      onChange={handleChangeAppendix}
                    />
                  </div>
                  <Divider />
                  <div className='rn-form-group'>
                    <input
                      className='mt--30'
                      type='title'
                      name='subHeading1Title'
                      placeholder={'Subheading 1'}
                      value={subHeadingCreateData.subHeading1.subHeading1Title}
                      onChange={(e) => handleChangeValueSubheadingItems(e, 1)}
                    />
                    <Button
                      onClick={() => handleAddSubheadingItems(true, 1)}
                      className='mb--20'
                    >
                      <FormattedMessage id='ADD_SUBHEADING_ITEMS' /> 1 (
                      <FormattedMessage id='SPLIT_BY_COMMA' /> )
                    </Button>
                    {showSubheadingItemsForm.showSubheadingItem1 && (
                      <input
                        className={''}
                        type='title'
                        name={'subHeading1Items'}
                        placeholder={'Subheading items 1'}
                        value={
                          subHeadingCreateData.subHeading1.subHeading1Items
                        }
                        onChange={(e) => handleChangeValueSubheadingItems(e, 1)}
                      />
                    )}
                  </div>
                  <div className='rn-form-group'>
                    <input
                      className='mt--50'
                      type='title'
                      name='subHeading2Title'
                      placeholder={'Subheading 2'}
                      value={subHeadingCreateData.subHeading2.subHeading2Title}
                      onChange={(e) => handleChangeValueSubheadingItems(e, 2)}
                    />
                    <Button
                      onClick={() => handleAddSubheadingItems(true, 2)}
                      className='mb--20'
                    >
                      <FormattedMessage id='ADD_SUBHEADING_ITEMS' />
                      2 ( <FormattedMessage id='SPLIT_BY_COMMA' /> )
                    </Button>

                    {showSubheadingItemsForm.showSubheadingItem2 && (
                      <input
                        className={''}
                        type='title'
                        name={'subHeading2Items'}
                        placeholder={'Subheading itemss 2'}
                        value={
                          subHeadingCreateData.subHeading2.subHeading2Items
                        }
                        onChange={(e) => handleChangeValueSubheadingItems(e, 2)}
                      />
                    )}
                  </div>
                  <div className='rn-form-group'>
                    <input
                      className='mt--50'
                      type='title'
                      name='subHeading3Title'
                      placeholder={'Subheading 3'}
                      value={subHeadingCreateData.subHeading3.subHeading3Title}
                      onChange={(e) => handleChangeValueSubheadingItems(e, 3)}
                    />
                    <Button
                      onClick={() => handleAddSubheadingItems(true, 3)}
                      className='mb--20'
                    >
                      <FormattedMessage id='ADD_SUBHEADING_ITEMS' />
                      3 ( <FormattedMessage id='SPLIT_BY_COMMA' /> )
                    </Button>
                    {showSubheadingItemsForm.showSubheadingItem3 && (
                      <input
                        className={''}
                        type='title'
                        name={'subHeading3Items'}
                        placeholder={'Subheading itemss 3'}
                        value={
                          subHeadingCreateData.subHeading3.subHeading3Items
                        }
                        onChange={(e) => handleChangeValueSubheadingItems(e, 3)}
                      />
                    )}
                  </div>
                  <div className='rn-form-group'>
                    <input
                      className='mt--50'
                      type='title'
                      name='subHeading4Title'
                      placeholder={'Subheading 4'}
                      value={subHeadingCreateData.subHeading4.subHeading4Title}
                      onChange={(e) => handleChangeValueSubheadingItems(e, 4)}
                    />
                    <Button
                      onClick={() => handleAddSubheadingItems(true, 4)}
                      className='mb--20'
                    >
                      <FormattedMessage id='ADD_SUBHEADING_ITEMS' />
                      4 ( <FormattedMessage id='SPLIT_BY_COMMA' /> )
                    </Button>
                    {showSubheadingItemsForm.showSubheadingItem4 && (
                      <input
                        className={''}
                        type='title'
                        name={'subHeading4Items'}
                        placeholder={'Subheading itemss 4'}
                        value={
                          subHeadingCreateData.subHeading4.subHeading4Items
                        }
                        onChange={(e) => handleChangeValueSubheadingItems(e, 4)}
                      />
                    )}
                  </div>
                  <div className='rn-form-group'>
                    <input
                      className='mt--50'
                      type='title'
                      name='subHeading5Title'
                      placeholder={'Subheading 5'}
                      value={subHeadingCreateData.subHeading5.subHeading4Title}
                      onChange={(e) => handleChangeValueSubheadingItems(e, 5)}
                    />
                    <Button
                      onClick={() => handleAddSubheadingItems(true, 5)}
                      className='mb--20'
                    >
                      <FormattedMessage id='ADD_SUBHEADING_ITEMS' />
                      5 ( <FormattedMessage id='SPLIT_BY_COMMA' /> )
                    </Button>
                    {showSubheadingItemsForm.showSubheadingItem5 && (
                      <input
                        className={''}
                        type='title'
                        name={'subHeading5Items'}
                        placeholder={'Subheading itemss 5'}
                        value={
                          subHeadingCreateData.subHeading5.subHeading5Items
                        }
                        onChange={(e) => handleChangeValueSubheadingItems(e, 5)}
                      />
                    )}
                  </div>
                  {/* <div className='rn-form-group'>
                    <Button
                      type='primary'
                      onClick={() => handleAddSubheading(true)}
                      className='mb--50'
                    >
                      Add Subheading
                    </Button>
                    {showSubheadingForm.show &&
                      subheading.map(
                        (
                          item,
                          index,
                       
                        ) => (
                          <>
                            <input
                              className={index !== 0 && 'mt--100'}
                              type='title'
                              name={'subheading' + ++index}
                              placeholder={'Subheading ' + ++index}
                              value=''
                            />
                            <Button
                              onClick={() =>
                                handleAddSubheadingItems(true, item.number)
                              }
                              className='mb--50'
                            >
                              Add Subheading items
                            </Button>
                            {showSubheadingItemsForm.show &&
                              subheadingItems.map((item, index) => (
                                <input
                                  type='title'
                                  name={'subheadingitem' + ++index}
                                  placeholder={'Item ' + ++index}
                                  value=''
                                />
                              ))}
                          </>
                        )
                      )}
                  </div> */}
                </form>
              </div>{' '}
            </div>
            <div className='col-lg-12 mb--50'></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='slide-btn mt--80'>
                <Button
                  icon={<UploadOutlined />}
                  onClick={() => handleShowFilestack(true)}
                >
                  {/* <FormattedMessage id='UPLOAD' /> */} Upload
                </Button>

                {showFilestackUploader && (
                  <PickerOverlay
                    apikey={FILESTACK_API_KEY}
                    onUploadDone={(res) =>
                      handleSelectPdfFile(res?.filesUploaded[0].handle)
                    }
                    pickerOptions={{
                      onClose: () => {
                        handleShowFilestack(false);
                      },
                    }}
                  />
                )}
              </div>

              {isLoading ? (
                <Spin className='mt--80' />
              ) : (
                <div className='slide-btn mt--80'>
                  <button
                    className='rn-button-style--2 btn-primary-color'
                    onClick={() =>
                      handleSubmit(
                        documentName,
                        sectionContextList,
                        appendixData,
                        selectedFileVal
                      )
                    }
                  >
                    <FormattedMessage id='CREATE' />
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
