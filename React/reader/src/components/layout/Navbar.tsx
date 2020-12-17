import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Button } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';
import NavDrawer from './NavDrawer';
import { logout } from '../../store/actions/authActions';
import {
  IAppNavbar,
  ILogoutProps,
  IAuthReduxProps,
} from '../../types/interfaces';
import { get } from 'lodash';

const Navbar = ({ logout, auth }: ILogoutProps) => {
  let history = useHistory();
  const role = get(auth, 'user.user.role');
  console.log(role);
  console.log(auth);

  const logoutHandler = () => {
    history.push('/');
    logout();
  };

  return (
    <Menu theme='light' mode='horizontal'>
      <Menu.Item key='1'>
        <a href='/'>
          <HomeTwoTone twoToneColor={'#1DA57A'} />
          <span>Reader</span>
        </a>
      </Menu.Item>
      <Menu.Item key='3' style={{ float: 'right' }}>
        <NavDrawer></NavDrawer>
      </Menu.Item>
      {auth.isAuthenticated ? (
        <Menu.Item key='5' style={{ float: 'right' }}>
          <Button type='text' onClick={logoutHandler}>
            Log Out
          </Button>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item key='6' style={{ float: 'right' }}>
            <Link
              to={{
                pathname: '/user/register',
              }}
            >
              Register
            </Link>
          </Menu.Item>
          <Menu.Item key='7' style={{ float: 'right' }}>
            <Link
              to={{
                pathname: '/user/login',
              }}
            >
              Login
            </Link>
          </Menu.Item>
        </>
      )}

      <Menu.Item key='2' style={{ float: 'right' }}>
        <a href='savedwords'>Saved Words</a>
      </Menu.Item>
      <Menu.Item key='4' style={{ float: 'right' }}>
        <Link
          to={{
            pathname: '/custom/',
          }}
        >
          Custom Text
        </Link>
      </Menu.Item>
      {role === 'admin' ? (
        <Menu.Item key='10' style={{ float: 'right' }}>
          <Link
            to={{
              pathname: '/addstory/',
            }}
          >
            Add Story
          </Link>
        </Menu.Item>
      ) : null}
    </Menu>
  );
};

const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
