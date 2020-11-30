import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import { get } from '../../../utils/httpMethods';
const { Meta } = Card;

const Browser = (props: any) => {
  const [focus, setFocus] = useState(Number);
  const [stories, setStories] = useState([{}]);

  useEffect(() => {
    queryGetAllStories();
  }, []);

  async function queryGetAllStories(): Promise<any> {
    let data = await get({ url: `/story` });
    data = data.stories;
    setStories(data);
  }

  const handleHover = (_id: any) => {
    setFocus(_id);
  };

  const handleExit = () => {
    setFocus(0);
  };

  return (
    <div className='mainContainer'>
      <div className='site-card-wrapper'>
        <Row>
          {stories &&
            stories.map((el: any) => (
              <Col key={el._id}>
                {el._id === focus ? (
                  <Link
                    to={{
                      pathname: '/story/' + el._id,
                      state: { story: el.text, title: el.title },
                    }}
                  >
                    <Card
                      bordered={true}
                      style={{
                        height: 'auto',
                        marginLeft: '10px',
                        marginBottom: '10px',
                        boxShadow: '1px 3px 1px 1px rgba(29, 165, 122, 0.5)',
                      }}
                      onMouseLeave={handleExit}
                      cover={
                        <img
                          alt='example'
                          src={el.image}
                          style={{
                            height: 'auto',
                            maxHeight: '250px',
                            width: 'auto',
                            maxWidth: '250px',
                          }}
                        />
                      }
                    >
                      <Meta title={el.title} description={el.author} />
                      {el.level}
                    </Card>
                  </Link>
                ) : (
                  <Card
                    bordered={true}
                    style={{
                      height: 'auto',
                      marginLeft: '10px',
                      marginBottom: '10px',
                    }}
                    onMouseOver={() => {
                      handleHover(el._id);
                    }}
                    cover={
                      <img
                        alt='example'
                        src={el.image}
                        style={{
                          height: 'auto',
                          maxHeight: '250px',
                          width: 'auto',
                          maxWidth: '250px',
                        }}
                      />
                    }
                  >
                    <Meta title={el.title} description={el.author} />
                    {el.level}
                  </Card>
                )}
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};
export default Browser;
