import React, { useState } from 'react';
import { ConfigProvider, Button } from 'antd';
import './App.less';
function App() {
  const [currentTheme, setCurrentTheme] = useState('default');

  const lightTheme = {
    token: {
      colorPrimary: 'red', // 修改为绿色
      button: {
        colorPrimary: 'red', // 默认蓝色
      },
    },
  };

  const darkTheme = {
    token: {
      colorPrimary: '#1DA57A', // 修改为绿色
      button: {
        colorPrimary: '#1DA57A', // 修改为绿色
      },
    },
  };

  const handleThemeChange = () => {
    setCurrentTheme(currentTheme === 'default' ? 'dark' : 'default');
  };

  // console.log('theme', theme.defaultAlgorithm);
  return (
    <ConfigProvider theme={currentTheme === 'default' ? lightTheme : darkTheme}>
      <div style={{ padding: 20 }}>
        <Button type="primary" onClick={handleThemeChange}>
          切换主题
        </Button>
        <p>当前主题：{currentTheme === 'default' ? '默认' : '暗色'}</p>
      </div>
    </ConfigProvider>
  );
}

export default App;
