import React from 'react';
import { Menu } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import NavDrawer from './NavDrawer';

const Navbar = () => {
  return (
    <Menu theme="light" mode="horizontal">
      <Menu.Item key="1">
        <a href="/">
          <HomeTwoTone twoToneColor={'#1DA57A'} />
          <span>Reader</span>
        </a>
      </Menu.Item>
      <Menu.Item key="3" style={{ float: 'right' }}>
        <NavDrawer></NavDrawer>
      </Menu.Item>
      <Menu.Item key="2" style={{ float: 'right' }}>
        <a href="savedwords">Saved Words</a>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
