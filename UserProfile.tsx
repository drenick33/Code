import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { get, isEmpty } from 'lodash';
import Links from '../links/Links';
import { Col, Row, Avatar } from 'antd';
import { UserOutlined, EditTwoTone } from '@ant-design/icons';
import UserGroups from './UserGroup';
import UserRoles from '@/pages/user/profile/UserRoles';
import UserDiaryList from '@/pages/user/profile/UserDiaryList';
import UserCodewarsKataList from '@/pages/user/profile/UserCodewarsKataList';
import UserCodewarsProgressChart from '@/pages/user/profile/UserCodewarsProgressChart';
import UserMoraleProgressChart from '@/pages/user/profile/UserMoraleProgressChart';
import { IDiary } from '@/pages/diary/types';
import { ICourseProgress, ICurrentUser, IKata } from '@/pages/user/types';
import UserCourses from '@/pages/user/profile/UserCourses';

interface IProps {
  Profile: {
    userInfo: ICurrentUser;
    userDiary: IDiary[];
    userKatas: IKata[];
    coursesProgress: ICourseProgress[];
  };
  coursesGetProgressById: (userId: string) => void;
  userGetById: (id: string) => void;
  userDiaryGetByUserId: (id: string) => void;
  userCodewarsKatasGetByUserId: (id: string) => void;
  updateAvatar: (arg: any) => void;
  reset: () => void;
}

const UserProfile = (props: IProps) => {
  const userId = get(props, 'match.params.userId', '');
  const accountId = get(props, 'Account._id', '');

  const acl = get(props, 'Account.acl', []);

  const isLoadingUserInfo = get(props, 'loadingEffects.Profile/userGetById', false);
  const isLoadingDiary = get(props, 'loadingEffects.Profile/userDiaryGetByUserId', false);
  const isLoadingKatas = get(props, 'loadingEffects.Profile/userCodewarsKatasGetByUserId', false);

  const userName = get(props, 'Profile.userInfo.name', '');
  const links = get(props, 'Profile.userInfo.links', []);
  const groups = get(props, 'Profile.userInfo.groups', []);
  const courses = get(props, 'Profile.coursesProgress', []);
  const roles = get(props, 'Profile.userInfo.roles', []);
  const about = get(props, 'Profile.userInfo.about', '');
  const goals = get(props, 'Profile.userInfo.goals', '');
  const affiliates = get(props, 'Profile.userInfo.affiliates', []);
  const codewarsUsername = get(props, 'Profile.userInfo.links.codewarsUsername', '');
  const codewarsData = get(props, 'Profile.userInfo.codewarsAnalytics', []);

  const userDiary = get(props, 'Profile.userDiary', []);

  const userKatas = get(props, 'Profile.userKatas', []);

  const authUser = get(props, 'Account', '');
  const isAvatar = get(authUser, 'avatar', false);
  const avatar = get(authUser, 'avatar', '');

  const {
    userGetById,
    userDiaryGetByUserId,
    userCodewarsKatasGetByUserId,
    coursesGetProgressById,
    updateAvatar,
    reset,
  } = props;

  useEffect(() => {
    userGetById(userId);
    userCodewarsKatasGetByUserId(userId);

    return () => {
      reset();
    };
  }, [userId]);

  useEffect(() => {
    if (acl.includes('diary.get.all')) userDiaryGetByUserId(userId);
    if (acl.includes('course.get.all')) coursesGetProgressById(userId);
  }, [userId]);

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

  if (isLoadingUserInfo) return null;

  return (
    <div>
      <Row>
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
        <h1 className="mt-2">{userName}</h1>
      </Row>

      <Row className="mb-3">
        {!isEmpty(links) && <Links {...links} />}

        {!isEmpty(groups) && <UserGroups groups={groups} />}

        {!isEmpty(roles) && <UserRoles roles={roles} />}

        {userId === accountId && <span data-qa="referalLink">https://localcoding.us?r={userId}</span>}
        {userId === accountId && !isEmpty(affiliates) && <span>Affiliates:{affiliates.length}</span>}
      </Row>

      {!isEmpty(courses) && <UserCourses courses={courses} />}

      {!isEmpty(codewarsData) && (
        <Row>
          <Col span={16} offset={4}>
            <UserCodewarsProgressChart data={codewarsData} />
          </Col>
        </Row>
      )}
      <Row>
        <Col span={16} offset={4}>
          <UserMoraleProgressChart
            reports={
              userDiary.length && userDiary.filter((el: { hours: number }) => el && el.hours !== undefined).reverse()
            }
          />
        </Col>
      </Row>
      <Row>
        {about && (
          <Col span={12} className="mb-3">
            <h3>About</h3>
            <div>{about}</div>
          </Col>
        )}

        {goals && (
          <Col span={12} className="mb-3">
            <h3>Goals</h3>
            <div>{goals}</div>
          </Col>
        )}

        <Col span={12}>
          {!isLoadingKatas && (
            <UserCodewarsKataList
              userId={userId}
              codewarsUsername={codewarsUsername}
              katas={userKatas}
              handleKatasUpdate={userCodewarsKatasGetByUserId}
            />
          )}
        </Col>

        <Col span={12}>{!isLoadingDiary && <UserDiaryList userDiary={userDiary} />}</Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  Profile: state.Profile,
  Account: state.Account,
  loadingEffects: state.loading.effects,
});

const mapDispatchToProps = (dispatch: any) => ({
  userGetById: (payload: string) => dispatch({ type: 'Profile/userGetById', payload }),
  coursesGetProgressById: (payload: string) => dispatch({ type: 'Profile/coursesGetProgressById', payload }),
  userDiaryGetByUserId: (payload: string) => dispatch({ type: 'Profile/userDiaryGetByUserId', payload }),
  userCodewarsKatasGetByUserId: (payload: string) =>
    dispatch({ type: 'Profile/userCodewarsKatasGetByUserId', payload }),
  updateAvatar: (payload: any) => dispatch({ type: 'Profile/updateAvatar', payload }),
  reset: () => dispatch({ type: 'Profile/reset' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
