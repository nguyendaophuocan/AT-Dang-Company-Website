import { Button, Space, Tag } from 'antd';
export const columnsHomepage = (showModal, handleEnalbeDisable) => {
  return [
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
      title: 'Description English',
      key: 'descriptionEng',
      dataIndex: 'descriptionEng',
    },
    {
      title: 'Description Vietnamese',
      key: 'descriptionVn',
      dataIndex: 'descriptionVn',
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
            Update TITLE
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(
                record?.id,
                'homepage',
                'descriptionEng',
                record?.descriptionEng
              )
            }
          >
            Update description Eng
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(
                record?.id,
                'homepage',
                'descriptionVn',
                record?.descriptionVn
              )
            }
          >
            Update description Vn
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
};

export const columnsNews = (showModal, handleEnalbeDisable) => {
  return [
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
};

export const columnsCareer = (showModal, handleEnalbeDisable) => {
  return [
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
};

export const columnsContactUs = (showModal, handleEnalbeDisable) => {
  return [
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
};

export const columnsDocumentDetails = (showModal, handleEnalbeDisable) => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id, record, index) => {
        ++index;
        return index;
      },
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
              showModal(record?.id, 'documentdetail', 'title', record?.title)
            }
          >
            Update TITLE section {record.id}
          </Button>
          <Button
            primary
            onClick={() =>
              showModal(
                record?.id,
                'documentdetail',
                'description',
                record?.description
              )
            }
          >
            Update DESCRIPTION section {record.id}
          </Button>
          {/* <Button
            danger
            onClick={() =>
              handleEnalbeDisable('documentdetail', 'disable', record?.id)
            }
          >
            Delete
          </Button> */}
        </Space>
      ),
    },
  ];
};

export const columnsHeader = (page, handleModalHeader) => {
  return [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description English',
      key: 'descriptionEng',
      dataIndex: 'descriptionEng',
    },
    {
      title: 'Description Vn',
      key: 'descriptionVn',
      dataIndex: 'descriptionVn',
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
                handleModalHeader(record?.id, page, 'title', record?.title)
              }
            >
              Update TITLE
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  page,
                  'descriptionEng',
                  record?.descriptionEng
                )
              }
            >
              Update description English
            </Button>
            <Button
              primary
              onClick={() =>
                handleModalHeader(
                  record?.id,
                  page,
                  'descriptionVn',
                  record?.descriptionVn
                )
              }
            >
              Update description Vn
            </Button>
          </Space>
        ),
    },
  ];
};
