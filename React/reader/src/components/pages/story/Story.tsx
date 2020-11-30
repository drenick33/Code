import React, { useState, useEffect } from 'react';
import { get } from '../../../utils/httpMethods';
import StoryTrans from './StoryTrans';
import { Divider, Popover, Button } from 'antd';

//@TODO Rework Story model so that they're array of sentences, and their translations

const Story = (props: any) => {
  let [story, setStory] = useState(['']);
  let [trans, setTrans] = useState(['']);
  let [title, setTitle] = useState('');
  let [wordTrans, setWordTrans] = useState(['']);
  let [curSent, setCurSent] = useState(0);
  let [showTrans, setShowTrans] = useState(true);

  useEffect(() => {
    queryGetStoryById();
  }, []);

  async function queryGetStoryById(): Promise<any> {
    let _id = props.match.params.storyId;
    let data = await get({ url: `/story/` + _id });
    setStory(data.english);
    setTrans(data.chinese);
    setTitle(data.title);
  }

  async function queryGetWordTrans(word: string): Promise<any> {
    let data = await get({ url: '/words/translate/' + word });
    setWordTrans(data.trans.slice(0, 3).join('，'));
  }

  const handleHover = (index: number) => {
    setCurSent(index);
  };

  const handleClick = (word: string) => {
    queryGetWordTrans(word);
  };

  return (
    <div>
      <div className='mainContainer' style={{ wordWrap: 'break-word' }}>
        <StoryTrans
          chinese={trans[curSent]}
          showTrans={showTrans}
          setShowTrans={setShowTrans}
        ></StoryTrans>
        <Divider>{title}</Divider>
        {story.map((el: any, index: number) => (
          //   <div key={el}>{renderSentence(index)}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {index === curSent
              ? story[index].split(' ').map((word: string) => (
                  <Popover content={wordTrans} trigger='click'>
                    <span
                      onClick={() => handleClick(word)}
                      onMouseOver={() => handleHover(index)}
                      style={{
                        marginLeft: '.5rem',
                        fontSize: '32px',
                        color: '#15A57A',
                      }}
                    >
                      {word}
                    </span>
                  </Popover>
                ))
              : story[index].split(' ').map((word: string) => (
                  <Popover content={wordTrans} trigger='click'>
                    <span
                      onClick={() => handleClick(word)}
                      onMouseOver={() => handleHover(index)}
                      style={{
                        marginLeft: '.5rem',
                        fontSize: '32px',
                      }}
                    >
                      {word}
                    </span>
                  </Popover>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
