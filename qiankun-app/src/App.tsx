import React, { useState } from "react";
import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./Home/index";

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/home">app-home</Link>, "1", <PieChartOutlined />),
  getItem(<Link to="/react1">react-app1</Link>, "2", <PieChartOutlined />),
  getItem(<Link to="/react2">react-app2</Link>, "3", <DesktopOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <Routes>
            <Route path="/home" element={<Home />} />
            {/* 将匹配的请求转发给子应用 主应用不渲染 */}
            <Route path="/react1" element={null} />
            <Route path="/react2" element={null} />
          </Routes>
          {/* 子应用容器 */}
          <div id="container" />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;

// const App: React.FC = (): JSX.Element => {
//   return (
//     <div className="App">
//       测试
//       {/* 先做一个简单的路由跳转 */}
//       <BrowserRouter>
//         <h3>
//           <Link to="/react">微前端react</Link>
//         </h3>
//       </BrowserRouter>
//       {/* <h3>
//           <Link to='/qk-micro-vue'>微前端vue</Link>
//         </h3> */}
//       {/* </BrowserRouter> */}
//       {/* id要与 registerMicroApps 当中的container 对齐 */}
//       {/* react子应用挂载容器 id=qk-micro-react */}
//       <div id="container"></div>
//     </div>
//   );
// };

// export default App;
