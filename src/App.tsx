import React, { useState } from 'react';
import { ConfigProvider, Button } from 'antd';
import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';
import './App.less';
function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === 'default' ? 'dark' : 'default');
  };

  return (
    <ConfigProvider
      {...{
        prefixCls: 'mzy',
        theme: currentTheme === 'default' ? lightTheme : darkTheme,
      }}
    >
      <div style={{ padding: 20 }}>
        <Button onClick={handleThemeChange}>切换主题</Button>
        <Button type={'primary'}>Primary</Button>
        <p>当前主题：{currentTheme === 'default' ? '默认' : '暗色'}</p>
      </div>
    </ConfigProvider>
  );
}

export default App;
