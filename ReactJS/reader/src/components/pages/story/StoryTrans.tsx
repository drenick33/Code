import React from 'react';
import { Space, Button } from 'antd';
import {
  SoundTwoTone,
  SaveTwoTone,
  CloseCircleTwoTone,
} from '@ant-design/icons';
import { get } from 'lodash';

const StoryTrans = (props: any) => {
  const text = get(props, 'text', '');
  //  const setIsWord = get(props, '');

  let trans: string = text.replace(/\W/g, '');
  trans = trans.replace(/^\w/, (c) => c.toUpperCase());

  const playAudio = () => {
    //say.speak(trans);
  };

  return (
    <div>
      {props.isWord ? (
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
              <SoundTwoTone twoToneColor="#1DA57A" />
              Play Audio
            </Button>
            <Button>
              <SaveTwoTone twoToneColor="#1DA57A" />
              Save Word
            </Button>
            <Button onClick={() => props.setIsWord(false)}>
              <CloseCircleTwoTone twoToneColor="#1DA57A" />
              Close
            </Button>
          </Space>
        </div>
      ) : (
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
              <SoundTwoTone twoToneColor="#1DA57A" />
              Play Audio
            </Button>
            <Button>
              <SaveTwoTone twoToneColor="#1DA57A" />
              Save Word
            </Button>
          </Space>
        </div>
      )}
    </div>
  );
};

export default StoryTrans;
