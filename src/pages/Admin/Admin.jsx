import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, Input, Layout, Modal, Space, Spin, Table, Tag } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useGetAdminHomePageContentMutation } from '../../features/admin/adminApiSlice';
import { useGetNewsMutation } from '../../features/news/newsApiSlice';

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
      render: (text) => <Tag color='green'>{String(text)}</Tag>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
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
      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() => showModal('homepage', 'title', record?.title)}
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal('homepage', 'description', record?.description)
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button danger>Disable</Button>
          <Button type='primary'>Enable</Button>
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
      render: (text) => <Tag color='green'>{String(text)}</Tag>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
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
      // render: (_, { tags }) => (
      //   <>
      //     {tags.map((tag) => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </>
      // ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            primary
            onClick={() => showModal('news', 'category', record?.category)}
          >
            Update CATEGORY section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal('news', 'description', record?.description)
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          <Button danger>Disable</Button>
          <Button type='primary'>Enable</Button>
        </Space>
      ),
    },
  ];
  const [open, setOpen] = useState({
    homepage: { title: false, description: false },
    news: { category: false, description: false },
  });
  const [editingValue, setEditingValue] = useState('');

  const [homePageData, setHomepageData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  const [getAdminHomePageContent, { isLoading: isLoadingHomepage }] =
    useGetAdminHomePageContentMutation();

  const [getNews, { isLoading: isLoadingNews }] = useGetNewsMutation();

  const showModal = (page, type, value) => {
    if (page === 'homepage') {
      if (type === 'title')
        setOpen({ ...open, homepage: { ...open.homepage, title: true } });
      if (type === 'description')
        setOpen({ ...open, homepage: { ...open.homepage, description: true } });
    } else if (page === 'news') {
      if (type === 'category')
        setOpen({ ...open, news: { ...open.news, category: true } });
      if (type === 'description')
        setOpen({ ...open, news: { ...open.news, description: true } });
    }
    setEditingValue(value);
  };

  const hideModal = (type) => {
    setOpen({
      ...open,
      homepage: { title: false, description: false },
      news: { category: false, description: false },
    });
  };
  console.log('open', open);
  const getHomepageData = async () => {
    const data = await getAdminHomePageContent().unwrap();
    setHomepageData(data);
  };
  const getNewsData = async () => {
    const queryParams = { off_set: 1, page_size: 5 };

    const data = await getNews(queryParams).unwrap();
    setNewsData(data?.content);
  };
  useEffect(() => {
    getHomepageData();
    getNewsData();
  }, []);
  console.log('Homepagedata', homePageData);
  console.log('newsdata', newsData);
  console.log('editingvalue', editingValue);
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
          {isLoadingHomepage ? (
            <Spin style={{ width: '100%' }} />
          ) : (
            <Table columns={columnsHomepage} dataSource={homePageData} />
          )}
        </Content>
      </Layout>
      <Layout className='layout'>
        <Content style={{ padding: '0 100px' }}>
          <h2>News</h2>
          {isLoadingNews ? (
            <Spin style={{ width: '100%' }} />
          ) : (
            <Table columns={columnsNews} dataSource={newsData} />
          )}
        </Content>
      </Layout>
      <Modal
        centered
        title={open.news.category ? 'Update title' : 'Update category'}
        open={open.homepage.title || open.news.category}
        onOk={() => hideModal('title')}
        onCancel={() => hideModal('title')}
      >
        <Input value={editingValue} />
      </Modal>
      <Modal
        centered
        title='Update description'
        open={open.homepage.description || open.news.description}
        onOk={() => hideModal('description')}
        onCancel={() => hideModal('description')}
      >
        <Input value={editingValue} />
      </Modal>
    </Fragment>
  );
};
export default Admin;
