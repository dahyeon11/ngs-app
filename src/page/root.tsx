import { useNavigate } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Space } from "antd";

const { Sider, Content } = Layout;

export const Root = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <>
      <Space />
      <Layout style={{ width: "100%", height: "100%", margin: 0 }}>
        <Sider
          trigger={null}
          //   width={200}
          style={{
            // overflowX: "hidden",
            // overflowY: "scroll",
            height: "100%",
            // position: "fixed",
            width: "40px",
            minWidth: "40px",
            flex: "0 0 40px",
            left: 0,
            // top: 0,
            // bottom: 0,
            // backgroundColor: "#f3f3f5",
          }}
          collapsible
          collapsed={true}
          collapsedWidth={40}
          defaultCollapsed={true}
          theme="light"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Account",
                onClick: () => {
                  navigate(`greeting`);
                },
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "nav 2",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "nav 3",
              },
              {
                key: "4",
                icon: <SettingOutlined />,
                label: "Settings",
                onClick: () => {
                  navigate(`setting`);
                },
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              //   margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>asdfasdfs</div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
