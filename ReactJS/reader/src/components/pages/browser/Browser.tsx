import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

//@TODO Add shadow feature

const Browser = (props: any) => {
  const [focus, setFocus] = useState(Number);

  const handleHover = (_id: any) => {
    setFocus(_id);
  };

  const handleExit = () => {
    setFocus(0);
  };

  return (
    <div className="mainContainer">
      <div className="site-card-wrapper">
        <Row>
          {props.stories &&
            props.stories.map((el: any) => (
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
                          alt="example"
                          src={el.link}
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
                        alt="example"
                        src={el.link}
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

const mapStateToProps = (state: any) => {
  return {
    stories: state.stories.stories,
  };
};

export default connect(mapStateToProps, null)(Browser);

// <div className="mainContainer">
//   <div className="site-card-wrapper">
//     <Row>
//       {props.stories.map((el: any) => (
//         <Col span={8}>
//           <Card
//             title={el.title}
//             bordered={true}
//             style={{ textAlign: 'center' }}
//           >
//             {el.author}
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </div>
// </div>;
