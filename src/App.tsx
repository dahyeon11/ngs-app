import "./App.css";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Setting from "./component/setting";
import { Root } from "./page/root";
import SettingVoiceVideo from "./component/setting/setting-voice-video";
import { ConfigProvider, ThemeConfig } from "antd";
import { useEffect } from "react";
import Greeting from "./page/greeting";

function App() {
  const theme: ThemeConfig = {
    token: {
      fontFamily: "'Gothic A1', sans-serif",
      fontWeightStrong: 600,
      // Seed Token
      // colorPrimary: "#00b96b",
      borderRadius: 2,

      // Alias Token
      // colorBgContainer: "#f6ffed",
    },
  };
  useEffect(() => {
    // window.electron.store.set("foo", "bar");
    // console.log(window.electron.store.get("foo"));
    window.ipcRenderer.store.set("foo", "123");
    console.log(window.ipcRenderer.store.get("foo"));
  });
  return (
    <>
      <div className="title-bar" />
      <div className="app">
        <ConfigProvider theme={theme}>
          <MemoryRouter basename="/" future={{ v7_startTransition: true }}>
            <Routes>
              <Route path="/" element={<Root />} /> {/* 👈 Renders at /app/ */}
              <Route path="/greeting" element={<Greeting />} />
              <Route path="/setting/*" element={<Setting />}>
                <Route path="voice-video" element={<SettingVoiceVideo />} />
              </Route>
              <Route path="*" element={<div>Not Found</div>} />
            </Routes>
          </MemoryRouter>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
