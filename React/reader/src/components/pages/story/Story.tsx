//Todo: add state for play or pause audio. If playing switch icon in footer <PauseCircleTwoTone />
//Todo: refactor code, move parts to different components
//Todo: get story from somewhere else as a prop [end goal: from backend/server]

import React, { useState, useEffect } from 'react';
import StoryTrans from './StoryTrans';
import { Divider } from 'antd';
import StoryFoot from './StoryFoot';

const Story = (props: any) => {
  let [story, setStory] = useState('');
  let [focus, setFocus] = useState([0, 1]);
  let [curWord, setCurWord] = useState(0);
  let [elements, setElements] = useState(['']); //what goes in the current page
  let [pageCount, setPageCount] = useState(1); //total pages
  let [perPage] = useState(100);
  let [curPage, setCurPage] = useState(1);
  let [isWord, setIsWord] = useState(false);
  let [curSent, setCurSent] = useState(['']);
  let [sentenceIndices] = React.useState<Array<Array<number>>>([]);

  story = story.replace(/--/, ''); //Get from Link in Browser component
  var words: string[] = story.split(/\s+/); //Turn a string into an array of strings seperated by spaces and new lines

  useEffect(() => {
    if (props.location.state.story) {
      //If you get the text passed from the browser
      console.log('ran');
      var text = props.location.state.story.replace(/--/, '');
      console.log(props.location.state.story);
      setStory(text); //Get from Link in Browser component
      words = text.split(/\s+/); //Turn a string into an array of strings seperated by spaces and new lines
    } else {
      console.log('get from server');
    }
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

    if (words.length >= indexOfLastWord) {
      while (!words[indexOfLastWord].endsWith('.' || '?' || '!')) {
        indexOfLastWord = indexOfLastWord - 1;
        console.log(indexOfLastWord);
      }
    }

    let elements = words.slice(indexOfFirstWord, indexOfLastWord + 1);

    setElements(elements);
    getWordCount(elements.join(' '));
  };

  console.log(story);

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
    setCurWord(0);
  };

  let handleHover = (index: number) => {
    if (isWord) {
      //Actions for if the word is focused and being translated
      if (index === curWord) {
        //Clicked the same word
        setIsWord(false); //Changes translation to sentence mode
      } else {
        //In word mode but user clicks a different word
        setCurWord(index); //Changes the word highlighted
        getCurSentence(index); //Make sure the sentence that word is in is highlighted
      }
    } else {
      //Actions if you're in sentence mode
      if (focus.includes(index)) {
        //If the word is currently highlighted
        if (index === curWord) {
          //Change to word mode if same word is clicked in sentence mode
          setIsWord(true);
        } else {
          //Change the word focused but doesn't change to word mode since that's jarring
          setCurWord(index);
        }
      } else {
        //If you click a word in a sentence that isn't highlighted
        setCurWord(index);
        getCurSentence(index); //Updates sentence
      }
    }
  };

  return (
    <div>
      <div className='mainContainer'>
        {isWord ? (
          <StoryTrans
            text={words[curWord].split('')}
            setIsWord={setIsWord}
            isWord={isWord}
          />
        ) : (
          <StoryTrans text={curSent} setIsWord={setIsWord} isWord={isWord} />
        )}
        <Divider>{props.location.state.title}</Divider>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {elements.map((el: any, index: number) => (
            <div key={index}>
              {focus.includes(index) ? (
                <div style={{ background: '#EFEFEF' }}>
                  {index === curWord ? (
                    <p
                      onClick={() => handleHover(index)}
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
                      onClick={() => handleHover(index)}
                      style={{
                        marginLeft: '.5rem',
                        fontSize: '24px',
                      }}
                    >
                      {el}
                    </p>
                  )}
                </div>
              ) : (
                <p
                  onClick={() => handleHover(index)}
                  style={{
                    marginLeft: '.5rem',
                    fontSize: '24px',
                  }}
                >
                  {el}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <StoryFoot
        handlePageChange={handlePageChange}
        page={curPage}
        pageCount={pageCount}
      />
    </div>
  );
};

export default Story;
