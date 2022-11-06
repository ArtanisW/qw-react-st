import React from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { GITHUB_URL } from '@constants/constant';

const { Header } = Layout;

const tabs = [
  {
    key: 'home',
    label: '主页',
  },
  {
    key: 'request',
    label: 'Ajax示例',
  },
  {
    key: 'router',
    label: '路由跳转示例',
  },
];

const RootHeader = ({ path }) => {
  const navigate = useNavigate();
  const onMenuClick = ({ item, key }) => {
    navigate('/' + key);
  };

  return (
    <Header>
      <a className="q-logo" href={GITHUB_URL} title="will jump to github">
        Q<span>ing</span>
      </a>
      <Menu
        theme="dark"
        mode="horizontal"
        items={tabs}
        selectedKeys={path}
        onClick={onMenuClick}
      />
    </Header>
  );
};

export default RootHeader;
