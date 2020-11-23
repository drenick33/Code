import React from 'react';
import { Space, Button } from 'antd';
import { SoundTwoTone, SaveTwoTone } from '@ant-design/icons';
import { get } from 'lodash';

const StoryTransNew = (props: any) => {
  let chinese = get(props, 'chinese', ['']);

  const playAudio = () => {
    //say.speak(trans);
  };

  return (
    <div>
      <Space
        direction='horizontal'
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <p style={{ fontSize: '24px' }}>{chinese}</p>
      </Space>
      <Space
        direction='horizontal'
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {/* <Button type='default' onClick={playAudio}>
          <SoundTwoTone twoToneColor='#1DA57A' />
          Play Audio
        </Button> */}
      </Space>
    </div>
  );
};

export default StoryTransNew;
