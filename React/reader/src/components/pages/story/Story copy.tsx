//Todo: add state for play or pause audio. If playing switch icon in footer <PauseCircleTwoTone />
//Todo: refactor code, move parts to different components
//Todo: get story from somewhere else as a prop [end goal: from backend/server]

import React, { useState, useEffect } from 'react';
import StoryTrans from './StoryTrans';
import { Divider } from 'antd';
import StoryFoot from './StoryFoot';

const Story = (props: any) => {
  let [focus, setFocus] = useState([0, 1]);
  let [elements, setElements] = useState(['']); //what goes in the current page
  let [pageCount, setPageCount] = useState(1); //total pages
  let [perPage] = useState(100);
  let [curPage, setCurPage] = useState(1);
  let [isWord, setIsWord] = useState(false);
  let [curSent, setCurSent] = useState(['']);
  let [sentenceIndices] = React.useState<Array<Array<number>>>([]);

  let story: string = props.location.state.story; //Get from Link in Browser component
  let words: string[] = story.split(' ');

  useEffect(() => {
    setPageCount(Math.ceil(words.length / perPage)); //Sets the number of pages
    setElementsForCurPage(1); //Gets text for first page on first load
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setElementsForCurPage = (page: number) => {
    //@TODO, make it so that the last word always finishes a sentence
    let indexOfLastWord = page * perPage;
    let indexOfFirstWord = indexOfLastWord - perPage;

    if (indexOfFirstWord !== 0) {
      if (!words[indexOfFirstWord - 1].endsWith('.' || '?' || '!')) {
        while (!words[indexOfFirstWord - 1].endsWith('.' || '?' || '!')) {
          if (indexOfFirstWord === 0) {
            break;
          } else {
            indexOfFirstWord = indexOfFirstWord - 1;
          }
        }
      }
    }

    console.log('Last word is: ', words[indexOfLastWord]);
    console.log('words length', words.length);
    console.log('indexofLastWord', indexOfLastWord);
    if (words.length >= indexOfLastWord) {
      while (!words[indexOfLastWord].endsWith('.' || '?' || '!')) {
        indexOfLastWord = indexOfLastWord - 1;
        console.log(indexOfLastWord);
      }
    }

    let elements = words.slice(indexOfFirstWord, indexOfLastWord + 1);
    console.log('Elements are: ', elements);
    setElements(elements);
    getWordCount(elements.join(' '));
  };

  const getWordCount = (words: string) => {
    //Got total numer of words, and find sentences
    let wordCount: number = 0;
    let firstWord: number = 0;
    for (var i = 0; i <= story.length; i++) {
      if (
        words.charAt(i) === '.' ||
        words.charAt(i) === '!' ||
        words.charAt(i) === '?'
      ) {
        let sentinceRange: number[] = [firstWord, wordCount];
        getSentenceWords(sentinceRange);
        firstWord = wordCount + 1;
      }
      if (words.charAt(i) === ' ') {
        wordCount++;
      }
    }
  };
  const getSentenceWords = (sent: number[]) => {
    sentenceIndices.push(sent);
    getCurSentence(0);
  };

  const getCurSentence = (index: number) => {
    for (let i = 0; i < sentenceIndices.length; i++) {
      if (index === sentenceIndices[i][1]) {
        //Make sure it works if you click on the last word of a sentence
        index = sentenceIndices[i][0];
      }
      if (index >= sentenceIndices[i][0] && index < sentenceIndices[i][1]) {
        //Create a new array as focus, containing all numbers within the first and last word of the sentence
        const newWords = [];
        const sentWords = [];
        for (let k = sentenceIndices[i][0]; k <= sentenceIndices[i][1]; k++) {
          newWords.push(k);
          sentWords.push();
        }
        setFocus(newWords); //Get range of word indexes to focus
        let newCurWords: string[] = [];
        newWords.forEach((index: number) => {
          newCurWords.push(words[index]);
        });
        setCurSent(newCurWords);
      }
    }
  };

  const handlePageChange = (page: any) => {
    setCurPage(page);
    setElementsForCurPage(page);
    setFocus([0]);
  };

  const handleWordClick = (index: number) => {
    //click on word in word mode
    setIsWord(false);
    getCurSentence(index);
  };

  const handleWordHover = (index: number) => {
    setFocus([index]);
  };

  let handleHover = (el: any, index: any) => {
    setIsWord(true);
    setFocus([index]);
    // console.log(sentenceIndices);
    // console.log('index is: ', index);
    // console.log('focus is: ', focus[0]);
    // if (isWord && focus[0] === index) {
    //   console.log('Ran');
    //   setIsWord(!isWord);
    //   if (isWord) {
    //     console.log('ran second');
    //     setFocus(sentenceIndices[0]);
    //   }
    // }
  };

  return (
    <div>
      {isWord ? (
        <div className="mainContainer">
          {elements.map((el: any, index: number) => (
            <div>
              {focus[0] === index ? (
                <StoryTrans text={[el]} setIsWord={setIsWord} isWord={isWord} />
              ) : null}
            </div>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
          <Divider>{props.location.state.title}</Divider>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {elements.map((el: any, index: number) => (
              <div>
                {focus[0] === index ? (
                  <p
                    onClick={() => handleWordClick(index)}
                    style={{
                      marginLeft: '.5rem',
                      fontSize: '24px',
                      color: '#1DA57A',
                    }}
                  >
                    {el}
                  </p>
                ) : (
                  <p
                    onClick={() => handleWordClick(index)}
                    onMouseEnter={() => handleWordHover(index)}
                    style={{ marginLeft: '.5rem', fontSize: '24px' }}
                  >
                    {el}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mainContainer">
          <StoryTrans text={curSent} setIsWord={setIsWord} isWord={isWord} />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
          <Divider>{props.location.state.title}</Divider>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {elements.map((el: any, index: number) => (
              <div>
                {focus.includes(index) ? (
                  <p
                    onClick={() => handleHover(el, index)}
                    style={{
                      marginLeft: '.5rem',
                      fontSize: '24px',
                      color: '#1DA57A',
                    }}
                  >
                    {el}
                  </p>
                ) : (
                  <p
                    onClick={() => handleHover(el, index)}
                    style={{ marginLeft: '.5rem', fontSize: '24px' }}
                  >
                    {el}
                  </p>
                )}
                <p
                  onClick={() => handleHover(el, index)}
                  style={{ marginLeft: '.5rem', fontSize: '24px' }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      )}
      <StoryFoot
        handlePageChange={handlePageChange}
        page={curPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Story;
