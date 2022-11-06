import React from 'react';
import { Layout } from 'antd';
import { GITHUB_URL } from '@constants/constant';
const { Footer } = Layout;

const RootFooter = () => {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      <p>
        <a href={GITHUB_URL}> QingWheel </a>
        @Copyright 2022
      </p>
      <p>仅供学习使用；未经授权不得用于商业用途</p>
    </Footer>
  );
};

export default RootFooter;
