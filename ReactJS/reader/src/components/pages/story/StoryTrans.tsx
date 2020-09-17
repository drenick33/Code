import React from 'react';
import { Space, Button } from 'antd';
import { SoundTwoTone, SaveTwoTone } from '@ant-design/icons';
import { get } from 'lodash';

const StoryTrans = (props: any) => {
  const text = get(props, 'text', '');

  let trans: string = text.replace(/\W/g, '');
  trans = trans.replace(/^\w/, (c) => c.toUpperCase());

  const playAudio = () => {
    //say.speak(trans);
  };

  return (
    <div>
      <Space
        direction="horizontal"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <p style={{ fontSize: '18px' }}>{trans}</p>
      </Space>
      <Space
        direction="horizontal"
        style={{ width: '100%', justifyContent: 'center' }}
      >
        <Button type="default" onClick={playAudio}>
          Play Audio
          <SoundTwoTone twoToneColor="#1DA57A" />
        </Button>
        <Button>
          Save Word
          <SaveTwoTone twoToneColor="#1DA57A" />
        </Button>
      </Space>
    </div>
  );
};

export default StoryTrans;
