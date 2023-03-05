import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Button,
  Form,
  Input,
  Layout,
  Modal,
  Select,
  Space,
  Spin,
  Table,
  Tag,
} from 'antd';
import { Content } from 'antd/es/layout/layout';
import {
  useGetHomePageContentMutation,
  useUpdateHomePageContentMutation,
  useUpdateNewsContentMutation,
} from '../../features/admin/adminApiSlice';
import {
  useCreateNewsMutation,
  useGetNewsMutation,
} from '../../features/news/newsApiSlice';
import {
  useGetAllDocumentsMutation,
  useGetDocumentDetailMutation,
} from '../../features/document-detail/documentDetailApiSlice';
import TextArea from 'antd/es/input/TextArea';
import { FormattedMessage } from 'react-intl';
import {
  useGetHeaderMutation,
  useUpdateHeaderMutation,
} from '../../features/header/headerApiSlice';
import {
  useGetContactUsMutation,
  useUpdateContactUsMutation,
} from '../../features/contact-us/contactUsApiSlice';
import { useGetCareerMutation } from '../../features/career/careerApiSlice';

const Admin = () => {
  const columnsHomepage = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Enable',
      dataIndex: 'enable',
      key: 'enable',
      render: (text) =>
        text === true ? (
          <Tag color='green'>{String(text)}</Tag>
        ) : (
          <Tag color='red'>{String(text)}</Tag>
        ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description1',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'homepage', 'title', record?.title)
            }
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(
                record?.id,
                'homepage',
                'description',
                record?.description
              )
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button
            danger
            onClick={() =>
              handleEnalbeDisable('homepage', 'disable', record.id)
            }
          >
            Disable
          </Button>
          <Button
            onClick={() => handleEnalbeDisable('homepage', 'enable', record.id)}
            type='primary'
          >
            Enable
          </Button>
        </Space>
      ),
    },
  ];
  const columnsNews = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Enable',
      dataIndex: 'enable',
      key: 'enable',
      render: (text) =>
        text === true ? (
          <Tag color='green'>{String(text)}</Tag>
        ) : (
          <Tag color='red'>{String(text)}</Tag>
        ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Updated by',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'news', 'title', record?.title)
            }
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'news', 'description', record?.description)
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button
            danger
            onClick={() => handleEnalbeDisable('news', 'disable', record.id)}
          >
            Disable
          </Button>
          <Button
            type='primary'
            onClick={() => handleEnalbeDisable('news', 'disable', record.id)}
          >
            Enable
          </Button>
        </Space>
      ),
    },
  ];

  const columnsCareer = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Enable',
      dataIndex: 'enable',
      key: 'enable',
      render: (text) =>
        text === true ? (
          <Tag color='green'>{String(text)}</Tag>
        ) : (
          <Tag color='red'>{String(text)}</Tag>
        ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Updated by',
      dataIndex: 'updatedBy',
      key: 'updatedBy',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'career', 'title', record?.title)
            }
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(
                record?.id,
                'career',
                'description',
                record?.description
              )
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button
            danger
            onClick={() => handleEnalbeDisable('career', 'disable', record.id)}
          >
            Disable
          </Button>
          <Button
            type='primary'
            onClick={() => handleEnalbeDisable('career', 'disable', record.id)}
          >
            Enable
          </Button>
        </Space>
      ),
    },
  ];

  const columnsContactUs = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Enable',
      dataIndex: 'enable',
      key: 'enable',
      render: (text) =>
        text === true ? (
          <Tag color='green'>{String(text)}</Tag>
        ) : (
          <Tag color='red'>{String(text)}</Tag>
        ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'contactus', 'title', record?.title)
            }
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(
                record?.id,
                'contactus',
                'description',
                record?.description
              )
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button
            danger
            onClick={() =>
              handleEnalbeDisable('contactus', 'disable', record.id)
            }
          >
            Disable
          </Button>
          <Button
            type='primary'
            onClick={() =>
              handleEnalbeDisable('contactus', 'disable', record.id)
            }
          >
            Enable
          </Button>
        </Space>
      ),
    },
  ];

  const columnsNewsTitle = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        record && (
          <Space size='middle'>
            <Button
              primary
              onClick={() =>
                handleModalHeader(record?.id, 'news', 'title', record?.title)
              }
            >
              Update TITLE
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  'news',
                  'description',
                  record?.description
                )
              }
            >
              Update DESCRIPTION
            </Button>
          </Space>
        ),
    },
  ];
  const columnsDocumentDetail = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },

    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },

    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'news', 'title', record?.title)
            }
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(record?.id, 'news', 'description', record?.description)
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button
            danger
            onClick={() => handleEnalbeDisable('news', 'disable', record?.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const columnsContactUsTitle = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        record && (
          <Space size='middle'>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  'contactus',
                  'title',
                  record?.title
                )
              }
            >
              Update TITLE
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  'contactus',
                  'description',
                  record?.description
                )
              }
            >
              Update DESCRIPTION
            </Button>
          </Space>
        ),
    },
  ];

  const columnsCareerTitle = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        record && (
          <Space size='middle'>
            <Button
              primary
              onClick={() =>
                handleModalHeader(record?.id, 'career', 'title', record?.title)
              }
            >
              Update TITLE
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  'career',
                  'description',
                  record?.description
                )
              }
            >
              Update DESCRIPTION
            </Button>
          </Space>
        ),
    },
  ];

  const columnsHomeTitle = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        record && (
          <Space size='middle'>
            <Button
              primary
              onClick={() =>
                handleModalHeader(record?.id, 'home', 'title', record?.title)
              }
            >
              Update TITLE
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  'home',
                  'description',
                  record?.description
                )
              }
            >
              Update DESCRIPTION
            </Button>
          </Space>
        ),
    },
  ];

  const columnsAboutUsTitle = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) =>
        record && (
          <Space size='middle'>
            <Button
              primary
              onClick={() =>
                handleModalHeader(record?.id, 'aboutus', 'title', record?.title)
              }
            >
              Update TITLE
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  'aboutus',
                  'description',
                  record?.description
                )
              }
            >
              Update DESCRIPTION
            </Button>
          </Space>
        ),
    },
  ];
  //update homepage, news
  const [open, setOpen] = useState({
    homepage: { id: '', title: false, description: false },
    news: { id: '', title: false, description: false },
    contactUs: { id: '', title: false, description: false },
  });
  const [editingValue, setEditingValue] = useState({
    id: '',
    value: '',
    page: '',
    type: '',
  });

  //create news
  const [isCreateNewsOpen, setIsCreateNewsOpen] = useState(false);

  const [homePageData, setHomepageData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [documentDetailData, setDocumentDetailData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [careerData, setCareerData] = useState([]);

  const [contactUsData, setContactUsData] = useState([]);

  const [selectedDocumentVal, setSelectedDocumentVal] = useState(1);
  const [selectDocumentOptions, setSelectDocumentOptions] = useState([]);
  const [createNewsData, setCreateNewsData] = useState({
    title: '',
    description: '',
  });
  const [headerHome, setHeaderHome] = useState([]);
  const [headerAboutUs, setHeaderAboutUs] = useState([]);

  const [headerNews, setHeaderNews] = useState([]);
  const [headerCareer, setHeaderCareer] = useState([]);

  const [headerContactUs, setHeaderContactUs] = useState([]);

  const [isOpenModalHeader, setIsOpenModalHeader] = useState({
    home: { title: false, description: false },
    aboutUs: { title: false, description: false },

    news: { title: false, description: false },
    career: { title: false, description: false },
    contactUs: { title: false, description: false },
  });
  const [editingHeaderValue, setEditingHeaderValue] = useState({
    id: '',
    type: '',
    position: '',
    value: '',
  });

  const [getDocumentDetail, { isLoading: isLoadingDocument }] =
    useGetDocumentDetailMutation();

  const [getAllDocuments] = useGetAllDocumentsMutation();

  const [getHomePageContent, { isLoading: isLoadingHomepage }] =
    useGetHomePageContentMutation();

  const [updateHomePageContent, { isLoading: isLoadingUpdateHomepage }] =
    useUpdateHomePageContentMutation();

  const [updateNewsContent, { isLoading: isLoadingUpdateNews }] =
    useUpdateNewsContentMutation();

  const [updateContactUs, { isLoading: isLoadingUpdateContactUs }] =
    useUpdateContactUsMutation();

  const [updateHeader, { isLoading: isLoadingUpdateHeader }] =
    useUpdateHeaderMutation();

  const [createNews, { isLoading: isLoadingCreateNews }] =
    useCreateNewsMutation();

  const [getNews, { isLoading: isLoadingNews }] = useGetNewsMutation();
  const [getCareer, { isLoading: isLoadingCareer }] = useGetCareerMutation();

  const [getContactUs, { isLoading: isLoadingContactUs }] =
    useGetContactUsMutation();

  const [getHeader, { isLoading: isLoadingHeader }] = useGetHeaderMutation();

  const showModal = (id, page, type, value) => {
    if (page === 'homepage') {
      if (type === 'title') {
        setOpen({ ...open, homepage: { ...open.homepage, title: true } });
        setEditingValue({ id, value, page: 'homepage', type: 'title' });
      }

      if (type === 'description') {
        setOpen({ ...open, homepage: { ...open.homepage, description: true } });
        setEditingValue({ id, value, page: 'homepage', type: 'description' });
      }
    } else if (page === 'news') {
      if (type === 'title') {
        setOpen({ ...open, news: { ...open.news, title: true } });
        setEditingValue({ id, value, page: 'news', type: 'title' });
      }
      if (type === 'description') {
        setOpen({ ...open, news: { ...open.news, description: true } });
        setEditingValue({ id, value, page: 'news', type: 'description' });
      }
    } else if (page === 'contactus') {
      if (type === 'title') {
        setOpen({ ...open, contactUs: { ...open.contactUs, title: true } });
        setEditingValue({ id, value, page: 'contactus', type: 'title' });
      }
      if (type === 'description') {
        setOpen({
          ...open,
          contactUs: { ...open.contactUs, description: true },
        });
        setEditingValue({ id, value, page: 'contactus', type: 'description' });
      }
    }
  };
  const hideModal = (cancel) => {
    setOpen({
      ...open,
      homepage: { id: '', title: false, description: false },
      news: { id: '', title: false, description: false },

      contactUs: { id: '', title: false, description: false },
    });
    if (!cancel) {
      getHomepageData();
      getNewsData();
      getContactUsData();
    }
  };

  const getHomepageData = async () => {
    let data = await getHomePageContent().unwrap();
    const homepageData = data.slice(0, 5);
    const dataAbout = data.slice(5, data.length);
    setHomepageData(homepageData);
    setAboutData(dataAbout);
  };
  const getNewsData = async () => {
    const queryParams = { off_set: 0, page_size: 5 };

    const data = await getNews(queryParams).unwrap();
    setNewsData(data?.content);
  };

  const getCareerData = async () => {
    const queryParams = { off_set: 0, page_size: 5 };

    const data = await getCareer(queryParams).unwrap();
    setCareerData(data?.content);
  };

  const getContactUsData = async () => {
    const data = await getContactUs().unwrap();
    setContactUsData(data);
  };

  const getDocumentDetailData = async (id) => {
    const result = await getDocumentDetail(id).unwrap();
    if (result) {
      setDocumentDetailData(result?.contextList);
    }
  };

  const getAllDocumentsData = async () => {
    const result = await getAllDocuments().unwrap();
    const totalOptions = result?.length;
    let options = [];
    for (let i = 1; i <= totalOptions; i++) {
      options.push({ value: i, label: i });
    }
    if (result) {
      setSelectDocumentOptions(options);
    }
  };

  const handleUpdate = async (editingValue) => {
    const { id, value, page, type } = editingValue;
    let payload;
    let result;
    if (page === 'homepage') {
      if (type === 'title') {
        payload = {
          title: value,
        };
        result = await updateHomePageContent({ id, payload }).unwrap();
      }
      if (type === 'description') {
        payload = {
          description: value,
        };
        result = await updateHomePageContent({ id, payload }).unwrap();
      }
    } else if (page === 'news') {
      if (type === 'title') {
        payload = {
          title: value,
        };
        result = await updateNewsContent({ id, payload }).unwrap();
      }
      if (type === 'description') {
        payload = {
          description: value,
        };
        result = await updateNewsContent({ id, payload }).unwrap();
      }
    } else if (page === 'contactus') {
      if (type === 'title') {
        payload = {
          title: value,
        };
        result = await updateContactUs({ id, payload }).unwrap();
      }
      if (type === 'description') {
        payload = {
          description: value,
        };
        result = await updateContactUs({ id, payload }).unwrap();
      }
    }
    if (result) hideModal();
  };

  const handleEnalbeDisable = async (type, value, id) => {
    let payload;
    let result;
    if (type === 'homepage') {
      if (value === 'enable') {
        payload = {
          enable: true,
        };
        result = await updateHomePageContent({ id, payload }).unwrap();
      } else if (value === 'disable') {
        payload = {
          enable: false,
        };
        result = await updateHomePageContent({ id, payload }).unwrap();
      }
      if (result) {
        getHomepageData();
      }
    }
    if (type === 'news') {
      if (value === 'enable') {
        payload = {
          enable: true,
        };
        result = await updateNewsContent({ id, payload }).unwrap();
      } else if (value === 'disable') {
        payload = {
          enable: false,
        };
        result = await updateNewsContent({ id, payload }).unwrap();
      }
      if (result) {
        getNewsData();
      }
    }
  };
  const handleInputChange = (e) => {
    setEditingValue({ ...editingValue, value: e.target.value });
  };

  const handleModalCreateNews = (value) => {
    setIsCreateNewsOpen(value);
  };

  const handleChangeValueCreateNews = (e) => {
    setCreateNewsData({ ...createNewsData, [e.target.name]: e.target.value });
  };

  const handleCreateNews = async (data) => {
    const result = await createNews(data);
    if (result) {
      handleModalCreateNews(false);
      getNewsData();
    }
  };

  const handleSelectDocumentDetail = async (id) => {
    setSelectedDocumentVal(id);
    await getDocumentDetailData(id);
  };

  const getHeaderNews = async (value = 'news') => {
    const result = await getHeader(value);
    setHeaderNews([result?.data]);
  };

  const getHeaderContactUs = async (value = 'contactus') => {
    const result = await getHeader(value);
    setHeaderContactUs([result?.data]);
  };

  const getHeaderCareer = async (value = 'career') => {
    const result = await getHeader(value);
    setHeaderCareer([result?.data]);
  };

  const getHeaderHome = async (value = 'home') => {
    const result = await getHeader(value);
    setHeaderHome([result?.data]);
  };

  const getHeaderAboutUs = async (value = 'aboutus') => {
    const result = await getHeader(value);
    setHeaderAboutUs([result?.data]);
  };

  const getHeaderData = () => {
    getHeaderNews('news');
    getHeaderContactUs('contactus');
    getHeaderCareer('career');
    getHeaderHome('home');
    getHeaderAboutUs('aboutus');
  };
  useEffect(() => {
    getHomepageData();
    getNewsData();
    getDocumentDetailData(selectedDocumentVal);
    getAllDocumentsData();
    getHeaderData();
    getContactUsData();
    getCareerData();
  }, []);

  const handleModalHeader = (id, position, type, payload) => {
    if (position === 'news' && type === 'title') {
      setIsOpenModalHeader({ ...isOpenModalHeader, news: { title: true } });
    } else if (position === 'news' && type === 'description') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        news: { description: true },
      });
    }

    if (position === 'contactus' && type === 'title') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        contactUs: { title: true },
      });
    } else if (position === 'contactus' && type === 'description') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        contactUs: { description: true },
      });
    }

    if (position === 'career' && type === 'title') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        career: { title: true },
      });
    } else if (position === 'career' && type === 'description') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        career: { description: true },
      });
    }

    if (position === 'home' && type === 'title') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        home: { title: true },
      });
    } else if (position === 'home' && type === 'description') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        home: { description: true },
      });
    }

    if (position === 'aboutus' && type === 'title') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        aboutUs: { title: true },
      });
    } else if (position === 'aboutus' && type === 'description') {
      setIsOpenModalHeader({
        ...isOpenModalHeader,
        aboutUs: { description: true },
      });
    }

    setEditingHeaderValue({
      ...editingHeaderValue,
      id: id,
      type,
      position,
      value: payload,
    });
  };

  const handleInputHeaderChange = (e) => {
    setEditingHeaderValue({ ...editingHeaderValue, value: e.target.value });
  };

  const handleUpdateHeader = async (editingHeaderValue) => {
    const { id, position, type, value } = editingHeaderValue;
    let result;
    let payload;
    if (type === 'title') {
      payload = { title: value };
      result = await updateHeader({ id, position, type, payload });
      if (result?.data) {
        hideModalHeader();
      }
    } else if (type === 'description') {
      payload = { description: value };
      result = await updateHeader({ id, position, type, payload });
      if (result?.data) {
        hideModalHeader();
      }
    }
  };

  const hideModalHeader = (postion) => {
    setIsOpenModalHeader({
      ...isOpenModalHeader,
      news: { title: false, description: false },
      contactUs: { title: false, description: false },
      career: { title: false, description: false },
      home: { title: false, description: false },
      aboutUs: { title: false, description: false },
    });
    getHeaderData();
  };
  return (
    <Fragment>
      <Helmet pageTitle='Admin' />
      <div
        className='slider-activation slider-creative-agency with-particles'
        id='home'
      >
        <div className='bg_image bg_image--27'>
          <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className={`inner text-center`}>
                    <h1 className='title theme-gradient'>Admin One Pager</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layout className='layout'>
        <Content style={{ padding: '100px 100px 0 100px' }}>
          <h2>Homepage</h2>

          <Table
            loading={isLoadingHomepage}
            columns={columnsHomepage}
            dataSource={homePageData}
          />
        </Content>
      </Layout>
      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>
            {' '}
            <FormattedMessage id='ABOUT_US' />
          </h2>

          <Table
            loading={isLoadingHomepage}
            columns={columnsHomepage}
            dataSource={aboutData}
          />
        </Content>
      </Layout>
      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>
            {' '}
            <FormattedMessage id='NEWS' />
          </h2>
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={() => handleModalCreateNews(true)}>
              <FormattedMessage id='CREATE_NEWS' />
            </Button>
          </Space>
          <Table
            columns={columnsNews}
            loading={isLoadingNews}
            dataSource={newsData}
          />
        </Content>
      </Layout>

      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>
            {' '}
            <FormattedMessage id='CAREERS' />
          </h2>
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={() => handleModalCreateNews(true)}>
              <FormattedMessage id='CREATE_CAREER' />
            </Button>
          </Space>
          <Table
            columns={columnsCareer}
            loading={isLoadingCareer}
            dataSource={careerData}
          />
        </Content>
      </Layout>

      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>
            {' '}
            <FormattedMessage id='CONTACT_US' />
          </h2>
          <Table
            columns={columnsContactUs}
            loading={isLoadingContactUs}
            dataSource={contactUsData}
          />
        </Content>
      </Layout>

      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>Document</h2>{' '}
          <Select
            className=''
            defaultValue={selectedDocumentVal}
            value={selectedDocumentVal}
            style={{ width: 120 }}
            onChange={handleSelectDocumentDetail}
            options={selectDocumentOptions}
          />
          <span className='ml--40'>
            <Link to={{ pathname: `/document/${selectedDocumentVal}` }}>
              {' '}
              Go to Document {selectedDocumentVal}
            </Link>
          </span>
          <Table
            className='pt--20'
            columns={columnsDocumentDetail}
            dataSource={documentDetailData}
            loading={isLoadingDocument}
          />
        </Content>
      </Layout>

      <Layout className='layout'>
        <Content style={{ padding: '80px 100px' }}>
          <h2>
            {' '}
            <FormattedMessage id='HOME_HEADING' />
          </h2>
          <Table
            columns={columnsHomeTitle}
            loading={isLoadingHeader}
            dataSource={headerHome}
            pagination={false}
          />
          <h2>
            {' '}
            <FormattedMessage id='ABOUT_US_HEADING' />
          </h2>
          <Table
            columns={columnsAboutUsTitle}
            loading={isLoadingHeader}
            dataSource={headerAboutUs}
            pagination={false}
          />
          <h2>
            {' '}
            <FormattedMessage id='NEWS_HEADING' />
          </h2>
          <Table
            columns={columnsNewsTitle}
            loading={isLoadingHeader}
            dataSource={headerNews}
            pagination={false}
          />
          <h2>
            {' '}
            <FormattedMessage id='CAREER_HEADING' />
          </h2>
          <Table
            columns={columnsCareerTitle}
            loading={isLoadingHeader}
            dataSource={headerCareer}
            pagination={false}
          />
          <h2>
            {' '}
            <FormattedMessage id='CONTACT_US_HEADING' />
          </h2>
          <Table
            columns={columnsContactUsTitle}
            loading={isLoadingHeader}
            dataSource={headerContactUs}
            pagination={false}
          />
        </Content>
      </Layout>

      {/* Modal title homepage/news */}
      <Modal
        centered
        title={'Update title'}
        open={open.homepage.title || open.news.title || open.contactUs.title}
        onOk={() => handleUpdate(editingValue)}
        onCancel={() => hideModal('cancel')}
      >
        <Input value={editingValue.value} onChange={handleInputChange} />
      </Modal>
      {/* Modal desc homepage/news */}
      <Modal
        centered
        title='Update description'
        open={
          open.homepage.description ||
          open.news.description ||
          open.contactUs.description
        }
        onOk={() => handleUpdate(editingValue)}
        onCancel={() => hideModal('cancel')}
      >
        <TextArea
          style={{ height: '200px' }}
          value={editingValue.value}
          onChange={handleInputChange}
        />
      </Modal>
      {/* Modal create news*/}
      <Modal
        centered
        title='Create news'
        open={isCreateNewsOpen}
        okText='Create'
        onOk={() => handleCreateNews(createNewsData)}
        onCancel={() => handleModalCreateNews(false)}
      >
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '10px' }}
          initialValues={{ remember: true }}
          onFinish={''}
          onFinishFailed={''}
          autoComplete='off'
        >
          <Form.Item label='Title'>
            <Input
              name='title'
              onChange={handleChangeValueCreateNews}
              value={createNewsData.title}
            />
          </Form.Item>

          <Form.Item label='Description'>
            <TextArea
              name='description'
              style={{ height: '100px' }}
              onChange={handleChangeValueCreateNews}
              value={createNewsData.description}
            />
          </Form.Item>
        </Form>
      </Modal>
      {/* Modal update title/desc document */}
      <Modal
        centered
        title={'Update document title'}
        open={open.homepage.title || open.news.title}
        onOk={() => handleUpdate(editingValue)}
        onCancel={() => hideModal('cancel')}
      >
        <Input value={editingValue.value} onChange={handleInputChange} />
      </Modal>

      {/* Modal update heading section */}
      <Modal
        centered
        title='Update title'
        open={
          isOpenModalHeader.news.title ||
          isOpenModalHeader.contactUs.title ||
          isOpenModalHeader.career.title ||
          isOpenModalHeader.home.title ||
          isOpenModalHeader.aboutUs.title
        }
        onOk={() => handleUpdateHeader(editingHeaderValue)}
        onCancel={() => hideModalHeader()}
      >
        <Input
          value={editingHeaderValue.value}
          onChange={handleInputHeaderChange}
        />
      </Modal>
      <Modal
        centered
        title='Update description'
        open={
          isOpenModalHeader.news.description ||
          isOpenModalHeader.contactUs.description ||
          isOpenModalHeader.career.description ||
          isOpenModalHeader.home.description ||
          isOpenModalHeader.aboutUs.description
        }
        onOk={() => handleUpdateHeader(editingHeaderValue)}
        onCancel={() => hideModalHeader()}
      >
        <TextArea
          value={editingHeaderValue.value}
          onChange={handleInputHeaderChange}
          style={{ height: '100px' }}
        />
      </Modal>
    </Fragment>
  );
};
export default Admin;
