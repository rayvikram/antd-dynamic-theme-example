import React from 'react';
import { Button } from 'antd';
import './App.css';
import DynamicAntdTheme from 'dynamic-antd-theme';
import Table from "./Table"

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <div className='theme-container'>
  <span>Change antd theme(primary color): </span>
  <Table />
  <DynamicAntdTheme />
</div>
  </div>
);

export default App;