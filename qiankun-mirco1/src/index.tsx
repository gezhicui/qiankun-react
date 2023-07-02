// 引入新增的public-path 文件
import './public-path';
import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

// eslint-disable-next-line no-undef
// @ts-ignore
let root: ReactDOM.Root;

function createRoot(props: Record<string, any>) {
  // container中包含了qiankun创建的dom，它会插入一个带有id为root的dom
  const { container } = props;
  root = ReactDOM.createRoot(
    container ? container.querySelector('#root') : document.querySelector('#root')
  );
  return root;
}

// 独立运行，直接调用 createRoot函数 render
if (!(window as any)?.__POWERED_BY_QIANKUN__) {
  createRoot({});
  root!.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

// lifecycle => 初始化
export async function bootstrap(props: Record<string, any>) {
  console.log('初始化', props);
}

// lifecycle => 挂载
export async function mount(props: Record<string, any>) {
  createRoot(props);
  // qiankun环境中渲染
  root.render(
    <BrowserRouter
      // 对两种不同环境分别给出不同的基础路径
      basename={(window as any).__POWERED_BY_QIANKUN__ ? '/react1' : '/'}
    >
      <App />
    </BrowserRouter>
  );
}

// lifecycle => 卸载
export async function unmount(_props: Record<string, any>) {
  root.unmount();
}
