import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Button,
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
import { useGetNewsMutation } from '../../features/news/newsApiSlice';
import { useGetDocumentDetailMutation } from '../../features/document-detail/DocumentDetailApiSlice';

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
            onClick={() => handleEnalbeDisable('news', 'disable', record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const [open, setOpen] = useState({
    homepage: { id: '', title: false, description: false },
    news: { id: '', title: false, description: false },
  });
  const [editingValue, setEditingValue] = useState({
    id: '',
    value: '',
    page: '',
    type: '',
  });

  const [homePageData, setHomepageData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [documentDetailData, setDocumentDetailData] = useState({});
  const [newsData, setNewsData] = useState([]);
  const [selectDocumentVal, setSelectDocumentVal] = useState(1);

  const [getDocumentDetail] = useGetDocumentDetailMutation();

  const [getHomePageContent, { isLoading: isLoadingHomepage }] =
    useGetHomePageContentMutation();

  const [updateHomePageContent, { isLoading: isLoadingUpdateHomepage }] =
    useUpdateHomePageContentMutation();

  const [updateNewsContent, { isLoading: isLoadingUpdateNews }] =
    useUpdateNewsContentMutation();

  const [getNews, { isLoading: isLoadingNews }] = useGetNewsMutation();

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
    }
  };
  const hideModal = (cancel) => {
    setOpen({
      ...open,
      homepage: { id: '', title: false, description: false },
      news: { id: '', title: false, description: false },
    });
    if (!cancel) {
      getHomepageData();
      getNewsData();
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

  const getDocumentDetailData = async () => {
    const result = await getDocumentDetail(1).unwrap();
    if (result) {
      setDocumentDetailData(result?.contextList);
    }
  };

  useEffect(() => {
    getHomepageData();
    getNewsData();
    getDocumentDetailData();
  }, []);

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
          <h2>About us</h2>

          <Table
            loading={isLoadingHomepage}
            columns={columnsHomepage}
            dataSource={aboutData}
          />
        </Content>
      </Layout>
      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>News</h2>
          <Table
            columns={columnsNews}
            loading={isLoadingNews}
            dataSource={newsData}
          />
        </Content>
      </Layout>
      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>Document</h2>{' '}
          <Select
            className=''
            defaultValue={selectDocumentVal}
            style={{ width: 120 }}
            onChange={''}
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
              { value: '3', label: '...' },
              { value: '...', label: '...' },
            ]}
          />
          <Table
            className='pt--20'
            columns={columnsDocumentDetail}
            loading={isLoadingNews}
            dataSource={documentDetailData}
          />
        </Content>
      </Layout>
      <Modal
        centered
        title={'Update title'}
        open={open.homepage.title || open.news.title}
        onOk={() => handleUpdate(editingValue)}
        onCancel={() => hideModal('cancel')}
      >
        <Input value={editingValue.value} onChange={handleInputChange} />
      </Modal>

      <Modal
        centered
        title='Update description'
        open={open.homepage.description || open.news.description}
        onOk={() => handleUpdate(editingValue)}
        onCancel={() => hideModal('cancel')}
      >
        <Input value={editingValue.value} onChange={handleInputChange} />
      </Modal>
    </Fragment>
  );
};
export default Admin;
