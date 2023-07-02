import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { registerMicroApps, start } from "qiankun";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

//注册子应用
registerMicroApps([
  {
    name: "ReactMircoApp1",
    entry: "http://localhost:4000",
    //显示子应用容器的id
    container: "#container",
    activeRule: "/react1",
  },
]);
registerMicroApps([
  {
    name: "ReactMircoApp2",
    entry: "http://localhost:5000",
    //显示子应用容器的id
    container: "#container",
    activeRule: "/react2",
  },
]);

//启动qiankun
start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
