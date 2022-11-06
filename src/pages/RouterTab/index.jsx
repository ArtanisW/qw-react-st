import React from 'react';
import { PageHeader, Row, Col, Card } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import styles from './index.less';

const RouterTab = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="React-Router v6"
        subTitle="路由代表了不同页面"
        onBack={handleBack}
      />
      <div className={styles['page-container']}>
        <Row>
          <Col span={8}>
            <Card
              title="跳转示例"
              extra={
                <a href="https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md">
                  官方文档
                </a>
              }
              style={{ width: 300 }}
            >
              <div>使用 {'<Link />'} 组件来跳转到其他页面</div>
              <div>
                <Link to="/request">Ajax示例页</Link>
              </div>
              <div>
                <Link to="/">主页</Link>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default RouterTab;
