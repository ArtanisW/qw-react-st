import React, { useEffect, useState } from 'react';
import { Table, Input, PageHeader } from 'antd';
import { get } from '../../common/request';
import { TEST_URL } from '@constants/url';
import styles from './index.less';
import { capitalize } from '../../common/util';

const { Search } = Input;
const columns = [
  {
    title: '学号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{capitalize(text)}</span>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '家庭住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const RequestTab = () => {
  const [data, setData] = useState([]);
  const handleBack = () => {
    history.go(-1);
  };
  const onSearch = (value) => fetchData(value);
  async function fetchData(id) {
    const res = await get(TEST_URL, { id, pageNo: 1, pageSize: 10 });
    // console.log(res.data);
    setData(res.data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Ajax-Get请求示例"
        subTitle={
          <>
            使用<a href="https://www.npmjs.com/package/axios">axios</a>发送Ajax,
            并返回
            <a href="https://www.npmjs.com/package/mock-middleware-plugin">
              mock
            </a>{' '}
            数据
          </>
        }
        onBack={handleBack}
      />
      <div className={styles['page-container']}>
        <div style={{ textAlign: 'right' }}>
          <Search
            placeholder="输入学号并按回车"
            onSearch={onSearch}
            enterButton
            style={{ width: 300, marginTop: '-50px', marginBottom: 30 }}
            size="large"
            allowClear
          />
        </div>
        <Table columns={columns} dataSource={data} rowKey="id" />
      </div>
    </div>
  );
};

export default RequestTab;
