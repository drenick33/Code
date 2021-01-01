import React, { useState } from 'react';
import { Input, Row, Col, Button } from 'antd';
import win from './win.gif';

const Main = (props: any) => {
  let [answer, setAnswer] = useState('');
  let [finAns, setFinAns] = useState('');
  let [fin, setFin] = useState(false);
  let [won, setWon] = useState(false);

  const handleChange = (e: any) => {
    setAnswer(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    let x = answer.toLowerCase();
    console.log(x);
    if (x.includes('саша') || x.includes('саш') || x.includes('sash')) {
      setFin(true);
      setFinAns(
        'Ура! Правильно! С Новым годом!!! Я тебя очень-очень люблю и БЕЗУМНО СКУЧАЮ! Спасибо за все, что делаешь.'
      );
      setWon(true);
    } else if (
      x.includes('kate') ||
      x.includes('катя') ||
      x.includes('коша') ||
      x.includes('katya')
    ) {
      setFin(true);
      setFinAns(
        'Почти, но есть человек, который любит тебя еще больше. Попробуй еще раз.'
      );
    } else if (
      x.includes('даша') ||
      x.includes('даш') ||
      x.includes('дашка') ||
      x.includes('dash')
    ) {
      setFin(true);
      setFinAns('Боюсь, что ты ошибся буквой :(');
    } else {
      setFin(true);
      setFinAns('Неужели ' + answer + '? Попробуй еще раз.');
    }
  };

  const onRestart = () => {
    setFin(false);
    setFinAns('');
    setAnswer('');
    setWon(false);
  };

  return (
    <>
      {won ? (
        <img
          src={win}
          alt='love'
          style={{
            position: 'absolute',
            zIndex: 998,
            height: '100%',
            width: '100%',
            margin: 0,
            backgroundSize: 'cover',
          }}
        ></img>
      ) : null}
      <div className='center' style={{ height: '500px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {fin ? (
            <Col>
              <Row>
                <h1>{finAns}</h1>
              </Row>
              <Row>
                <Button
                  type='primary'
                  onClick={onRestart}
                  style={{ zIndex: 999 }}
                >
                  Попробуй еще раз
                </Button>
              </Row>
            </Col>
          ) : (
            <Col>
              <h1>Кто тебя любит больше всех на свете?</h1>
              <Row>
                <Col>
                  <Row>
                    <Input
                      value={answer}
                      onChange={handleChange}
                      onPressEnter={handleSubmit}
                      placeholder='Ввести текст'
                    ></Input>
                    <Button
                      type='primary'
                      onClick={handleSubmit}
                      style={{ marginTop: '10px' }}
                    >
                      Отправить
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Col>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
