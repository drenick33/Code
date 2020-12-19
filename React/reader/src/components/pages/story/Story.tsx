import React, { useState, useEffect } from 'react';
import { get } from '../../../utils/httpMethods';
import StoryTrans from './StoryTrans';
import { Divider, Popover, Button, Col, Row } from 'antd';

//@TODO Rework Story model so that they're array of sentences, and their translations

const Story = (props: any) => {
  let [story, setStory] = useState(['']);
  let [trans, setTrans] = useState(['']);
  let [title, setTitle] = useState('');
  let [wordTrans, setWordTrans] = useState(['']);
  let [curSent, setCurSent] = useState(0);
  let [showTrans, setShowTrans] = useState(true);
  let [isPop, setIsPop] = useState(false);

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
    setWordTrans(['']);
    let data = await get({ url: '/words/translate/' + word });
    setWordTrans(data.trans.slice(0, 3).join('，'));
    popContent(word);
    console.log(wordTrans);
  }

  const popContent = (word: string) => {
    if (wordTrans == ['']) {
      setWordTrans(['没有翻译']);
    }
    return (
      <div>
        <span
          style={{
            width: '100%',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}
        >
          {word}:
        </span>
        <br />
        <span>{wordTrans}</span>
        <br />
        <Button type='primary'>Save</Button>
      </div>
    );
  };

  const handleHover = (index: number) => {
    if (!isPop) {
      setCurSent(index);
    }
  };

  const handleClick = (word: string) => {
    queryGetWordTrans(word);
  };

  return (
    <div>
      <div className='mainContainer'>
        <header style={{ marginTop: '47px', backgroundColor: 'white' }}>
          <StoryTrans
            chinese={trans[curSent]}
            showTrans={showTrans}
            setShowTrans={setShowTrans}
          ></StoryTrans>
        </header>
        <Divider style={{ fontSize: '24px' }}>{title}</Divider>
        {story.map((el: any, index: number) => (
          //   <div key={el}>{renderSentence(index)}</div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {index === curSent
              ? story[index].split(' ').map((word: string) => (
                  <Popover
                    content={popContent(word)}
                    title={word}
                    trigger='click'
                    onVisibleChange={() => setIsPop(!isPop)}
                  >
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
                  <>
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
                  </>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
