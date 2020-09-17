import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { get, isEmpty } from 'lodash';
import { Avatar } from 'antd';
import { UserOutlined, EditTwoTone } from '@ant-design/icons';
import { ICurrentUser } from '@/pages/user/types';

interface IProps {
  Profile: {
    userInfo: ICurrentUser;
  };
  updateAvatar: (arg: any) => void;
  reset: () => void;
}

const UserAvatarEdit = (props: IProps) => {
  const userId = get(props, 'match.params.userId', '');
  const authUser = get(props, 'Account', '');
  const isAvatar = get(authUser, 'avatar', false);
  const avatar = get(authUser, 'avatar', '');

  const { updateAvatar, reset } = props;

  const [shadow, setShadow] = useState({});

  const changeAvatar = (e: any) => {
    if (!isEmpty(e.target.files)) {
      var data = new FormData();
      data.append('userId', userId);
      data.append('avatar', e.target.files[0]);
      data.append('userId', userId);
      updateAvatar(data);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
      onMouseEnter={() => {
        setShadow({ boxShadow: '1px 3px 1px 1px #744FDD' });
      }}
      onMouseLeave={() => {
        setShadow({});
      }}
    >
      {isAvatar ? (
        <Avatar size={64} src={avatar} style={shadow} />
      ) : (
        <Avatar size={64} icon={<UserOutlined />} style={shadow} />
      )}
      <EditTwoTone
        twoToneColor="#744FDD"
        style={{
          position: 'absolute',
          top: 40,
          left: 38,
        }}
      ></EditTwoTone>
      <input
        type="file"
        accept="image/*"
        onChange={changeAvatar}
        style={{
          //Overlap image with invisible fileselector & change cursor
          opacity: '0.0',
          position: 'absolute',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          height: '64px',
          width: '64px',
          cursor: 'pointer',
          fontSize: 0,
        }}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Profile: state.Profile,
  Account: state.Account,
  loadingEffects: state.loading.effects,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateAvatar: (payload: any) => dispatch({ type: 'Profile/updateAvatar', payload }),
  reset: () => dispatch({ type: 'Profile/reset' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatarEdit);
