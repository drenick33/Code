//Todo: add state for play or pause audio. If playing switch icon in footer <PauseCircleTwoTone />
//Todo: refactor code, move parts to different components
//Todo: get story from somewhere else as a prop [end goal: from backend/server]

import React, { useState, useEffect } from 'react';
import StoryTrans from './StoryTrans';
import { Divider, Pagination, Menu } from 'antd';
import { PlayCircleTwoTone } from '@ant-design/icons';

const Story = (props: any) => {
  let [focus, setFocus] = useState(0);
  let [elements, setElements] = useState(['']); //what goes in the current page
  let [pageCount, setPageCount] = useState(1); //total pages
  let [perPage] = useState(100);

  let story: string =
    'Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint.';
  let words: string[] = story.split(' ');

  useEffect(() => {
    recievePageData();
    setElementsForCurPage(1);
  }, []);

  const recievePageData = () => {
    let story: string =
      'Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint. Reprehenderit assumenda veniam officiis dignissimos, laborum facilis illum dolores nam modi, quibusdam ea! Rem temporibus doloribus iste illum dolorem vitae sint.';
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
    // console.log('the page is: ', page)
    // console.log('old curpage is: ' curPage)
    //console.log(page);
    // setCurPage(page);
    setElementsForCurPage(page);
    setFocus(0);
  };

  let handleHover = (el: any, index: any) => {
    setFocus(index);
  };

  return (
    <div>
      <div className="mainContainer">
        {elements.map((el: any, index: number) => (
          <div>{focus === index ? <StoryTrans text={el} /> : null}</div>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap' }}></div>
        <Divider>Title</Divider>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {elements.map((el: any, index: number) => (
            <div>
              {focus === index ? (
                <p
                  onMouseEnter={() => handleHover(el, index)}
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
                  onMouseEnter={() => handleHover(el, index)}
                  style={{ marginLeft: '.5rem', fontSize: '24px' }}
                >
                  {el}
                </p>
              )}
              <p
                onMouseEnter={() => handleHover(el, index)}
                style={{ marginLeft: '.5rem', fontSize: '24px' }}
              ></p>
            </div>
          ))}
        </div>
      </div>
      <footer
        style={{
          backgroundColor: 'green',
        }}
      >
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1" style={{ float: 'right', paddingTop: '12px' }}>
            <Pagination
              simple
              onChange={handlePageChange}
              defaultCurrent={1}
              total={pageCount * 10}
            />
          </Menu.Item>
          <Menu.Item key="3" style={{ marginLeft: '42px', paddingTop: '6px' }}>
            <PlayCircleTwoTone
              twoToneColor="#1DA57A"
              style={{ fontSize: 24 }}
            />
          </Menu.Item>
        </Menu>
      </footer>
    </div>
  );
};

export default Story;
