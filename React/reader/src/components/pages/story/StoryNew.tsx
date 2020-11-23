import React, { useState, useEffect } from 'react';
import { get } from '../../../utils/httpMethods';
import StoryTransNew from './StoryTransNew';
import { Divider } from 'antd';
import StoryFoot from './StoryFoot';

//@TODO Rework Story model so that they're array of sentences, and their translations

const StoryNew = (props: any) => {
  let [story, setStory] = useState(['']);
  let [trans, setTrans] = useState(['']);
  let [title, setTitle] = useState('');
  let [curSent, setCurSent] = useState(0);

  useEffect(() => {
    queryGetStoryById();
  }, []);

  async function queryGetStoryById(): Promise<any> {
    let _id = props.match.params.storyId;
    console.log(_id);
    let data = await get({ url: `/story/` + _id });
    console.log(data);
    setStory(data.english);
    setTrans(data.chinese);
    setTitle(data.title);
  }

  const handleHover = (index: number) => {
    setCurSent(index);
  };

  const handleClick = (word: string) => {
    console.log(word);
  };

  const renderSentence = (index: number) => {
    if (index === curSent) {
      return story[index].split(' ').map((word: string) => (
        <span
          onClick={() => handleClick(word)}
          onMouseOver={() => handleHover(index)}
          style={{
            marginLeft: '.5rem',
            fontSize: '26px',
            color: '#15A57A',
          }}
        >
          {word}
        </span>
      ));
    } else {
      return story[index].split(' ').map((word: string) => (
        <span
          onClick={() => handleClick(word)}
          onMouseOver={() => handleHover(index)}
          style={{
            marginLeft: '.5rem',
            fontSize: '26px',
          }}
        >
          {word}
        </span>
      ));
    }
  };

  return (
    <div>
      <div className='mainContainer' style={{ wordWrap: 'break-word' }}>
        <StoryTransNew chinese={trans[curSent]}></StoryTransNew>
        <Divider>{title}</Divider>
        {story.map((el: any, index: number) => (
          //   <div key={el}>{renderSentence(index)}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {index === curSent
              ? story[index].split(' ').map((word: string) => (
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
                ))
              : story[index].split(' ').map((word: string) => (
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
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryNew;
