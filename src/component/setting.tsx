import React from "react";
import { AppstoreOutlined, CloseOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { FloatButton, Layout, Menu, Typography, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import Paragraph from "antd/es/typography/Paragraph";
import SettingVoiceVideo from "./setting/setting-voice-video";
import SettingMyAccount from "./setting/setting-my-account";
import SettingProfile from "./setting/setting-profile";
import SettingDevices from "./setting/setting-devices";
import SettingAdvanced from "./setting/setting-advanced";
import SettingAppearance from "./setting/setting-appearance";
import styles from "./setting/setting.module.css";

const { Header, Content, Footer, Sider } = Layout;
type Context =
  | "my-account"
  | "profile"
  | "devices"
  | "appearance"
  | "voice-video"
  | "advanced";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key | Context,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "USER SETTING",
    "user-setting",
    <AppstoreOutlined />,
    [
      getItem("My Account", "my-account"),
      getItem("Profile", "profile"),
      getItem("Devices", "devices"),
    ],
    "group"
  ),
  { type: "divider" },
  getItem(
    "APPLICATION SETTING",
    "app-setting",
    <AppstoreOutlined />,
    [
      getItem("Appearance", "appearance"),
      getItem("Voice & Video", "voice-video"),
      getItem("Advanced", "advanced"),
    ],
    "group"
  ),
  { type: "divider" },
  //   getItem(
  //     "USER SETTINGS",
  //     "sub1",
  //     <AppstoreOutlined />,
  //     [
  //       getItem(
  //         "Item 1",
  //         "g1",
  //         null,
  //         [getItem("Option 1", "1"), getItem("Option 2", "2")],
  //         "group"
  //       ),
  //       getItem(
  //         "Item 2",
  //         "g2",
  //         null,
  //         [getItem("Option 3", "3"), getItem("Option 4", "4")],
  //         "group"
  //       ),
  //     ],
  //     "group"
  //   ),

  //   getItem("APPLICATION SETTINGS", "sub2", <AppstoreOutlined />, [
  //     getItem("Option 5", "5"),
  //     getItem("Option 6", "6"),
  //     getItem("Submenu", "sub3", null, [
  //       getItem("Option 7", "7"),
  //       getItem("Option 8", "8"),
  //     ]),
  //   ]),

  //   { type: "divider" },
  //   { type: "divider" },
  //   { type: "divider" },
  //   { type: "divider" },

  //   getItem("Navigation Three", "sub4", <AppstoreOutlined />, [
  //     getItem("Option 9", "9"),
  //     getItem("Option 10", "10"),
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  //   ]),

  //   getItem(
  //     "Group",
  //     "grp",
  //     null,
  //     [getItem("Option 13", "13"), getItem("Option 14", "14")],
  //     "group"
  //   ),
];

const Setting: React.FC = () => {
  //   const [currentContext, setCurrentContext] = React.useState<Context>({});
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout
      className={styles.setting}
      style={{
        backgroundColor: "#fff",
      }}
      hasSider
    >
      <Sider
        style={{
          overflowX: "hidden",
          overflowY: "scroll",
          height: "100vh",
          //   position: "fixed",
          //   left: 0,
          //   top: 0,
          //   bottom: 0,
          backgroundColor: "#f3f3f5",
        }}
        width={200}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={(event) => {
            navigate(`setting/${event.key}`);
            console.log(`setting/${event.key}`);
          }}
          style={{
            width: 300,
            textAlign: "left",
            backgroundColor: "#f3f3f5",
            fontWeight: 500,
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        <Typography>
          <Paragraph> text </Paragraph>
        </Typography>
      </Sider>
      <Layout style={{ marginLeft: 10, width: "100%" }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <FloatButton icon={<CloseOutlined />} onClick={() => navigate("/")} />
        <Content
          style={{ margin: "24px 16px 0", overflow: "initial", width: "100%" }}
        >
          <Routes>
            <Route path="setting/my-account" element={<SettingMyAccount />} />
            <Route path="setting/profile" element={<SettingProfile />} />
            <Route path="setting/devices" element={<SettingDevices />} />
            <Route path="setting/appearance" element={<SettingAppearance />} />
            <Route path="setting/voice-video" element={<SettingVoiceVideo />} />
            <Route path="setting/advanced" element={<SettingAdvanced />} />
          </Routes>
          {/* <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            
            {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? "more" : "..."}
                  <br />
                </React.Fragment>
              ))
            }
          </div> */}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Setting;
