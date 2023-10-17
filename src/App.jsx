import { useState } from 'react'
import { Routes, Route, Outlet, Link, useNavigate, useLocation } from "react-router-dom";

// === Components === //
import { Layout, Menu, Button, theme } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';

// === Routers === //
import Home from './pages/Home'
import Team from './pages/Team'
import NoMatch from './pages/404'

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<Home />} />
          <Route path="battle" element={<Team />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}
const MyLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigation = useNavigate()
  const location = useLocation()
  return (
    <Layout>
      <Sider className="h-[100vh]" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[location.pathname]}
          onSelect={({ key }) => navigation(key)}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '/battle',
              icon: <AppstoreOutlined />,
              label: 'Battle',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App
