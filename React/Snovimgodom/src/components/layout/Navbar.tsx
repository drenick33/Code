import React from 'react';
import { Menu, Button } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';

const Navbar = () => {
  return (
    <Menu theme='light' mode='horizontal'>
      <Menu.Item key='1'>
        <a href='/'>
          <HomeTwoTone twoToneColor={'#1DA57A'} />
          <span>Podarok</span>
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
