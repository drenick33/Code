//Todo: add state for play or pause audio. If playing switch icon in footer <PauseCircleTwoTone />
//Todo: refactor code, move parts to different components
//Todo: get story from somewhere else as a prop [end goal: from backend/server]

import React, { useState, useEffect } from 'react';
import StoryTrans from './StoryTrans';
import StoryWords from './StoryWords';
import StorySentences from './StorySentences';
import { Divider, Pagination, Menu } from 'antd';
import { PlayCircleTwoTone } from '@ant-design/icons';
import StoryFoot from './StoryFoot';

const Story = (props: any) => {
  let [focus, setFocus] = useState(0);
  let [elements, setElements] = useState(['']); //what goes in the current page
  let [pageCount, setPageCount] = useState(1); //total pages
  let [perPage] = useState(100);
  let [curPage, setCurPage] = useState(1);
  let [isWord, setIsWord] = useState(true);
  let [sentFocus, setSentFocus] = useState(false);

  let story: string =
    'Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint.';
  let words: string[] = story.split(' ');
  let sentences: string[] = story
    .replace(/([.?!])\s*(?=[A-Z])/g, '$1|')
    .split('|');

  useEffect(() => {
    recievePageData();
    setElementsForCurPage(1);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const recievePageData = () => {
    let story: string =
      'Reprehenderit assumenda veniam officiis dignissimos, aborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint.';
    let words: string[] = story.split(' ');
    setPageCount(Math.ceil(words.length / perPage));
  };

  const setElementsForCurPage = (page: number) => {
    const indexOfLastWord = page * perPage;
    const indexOfFirstWord = indexOfLastWord - perPage;
    let elements = words.slice(indexOfFirstWord, indexOfLastWord);
    setElements(elements);
  };

  const handlePageChange = (page: any) => {
    setElementsForCurPage(page);
    console.log(page);
    setFocus(0);
  };

  let handleHover = (el: any, index: any) => {
    setFocus(index);
    setIsWord(true);
  };
  return (
    <div>
      {isWord ? (
        <StoryWords
          setIsWord={setIsWord}
          isWord={isWord}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      ) : (
        <StorySentences
          setIsWord={setIsWord}
          isWord={isWord}
          curPage={curPage}
          setCurPage={setCurPage}
        ></StorySentences>
      )}
    </div>
  );
};

export default Story;
