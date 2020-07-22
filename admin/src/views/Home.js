import React, {useState} from 'react';
import {Route} from 'react-router-dom'
import AddArticle from './AddArticle'
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <div className="Home">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              工作台
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              添加文章
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="文章管理">
              <Menu.Item key="3">添加文章</Menu.Item>
              <Menu.Item key="4">文章别表</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} >留言管理</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理系统</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: '#FFFFFF' }}>
              <Route path="/" component={AddArticle} />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
