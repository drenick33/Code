import React from 'react';
import { Space, Button } from 'antd';
import {
  SoundTwoTone,
  SaveTwoTone,
  //CloseCircleTwoTone,
} from '@ant-design/icons';
import { get } from 'lodash';

const StoryTrans = (props: any) => {
  let text = get(props, 'text', ['']);
  //  const setIsWord = get(props, '');

  text[0] = text[0].replace(/^\w/, (c: any) => c.toUpperCase());
  text.map((el: any, index: number) => {
    text[index] = text[index].replace(
      /[`~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi,
      ''
    );
    return null; //prevents error
  });

  // let trans: string = text.replace(
  //   /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
  //   ''
  // );
  let translation: string[] = text;
  console.log(translation);

  const playAudio = () => {
    //say.speak(trans);
  };

  return (
    <div>
      {!props.isWord ? (
        <div>
          <Space
            direction="horizontal"
            style={{
              width: '100%',
              justifyContent: 'center',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {translation.map((el: any, index: number) => (
              <p key={index} style={{ fontSize: '24px' }}>
                {translation[index]}
              </p>
            ))}
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
      ) : (
        <div>
          <Space
            direction="horizontal"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <p style={{ fontSize: '24px' }}>{translation}</p>
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
            {/* <Button onClick={() => props.setIsWord(false)}>
              <CloseCircleTwoTone twoToneColor="#1DA57A" />
              Close
            </Button> */}
          </Space>
        </div>
      )}
    </div>
  );
};

export default StoryTrans;
