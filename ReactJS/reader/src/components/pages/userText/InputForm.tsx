import React, { useState } from 'react';
import { Button, Input, Menu } from 'antd';
import { CopyTwoTone } from '@ant-design/icons';

const { TextArea } = Input;

const InputForm = () => {
  let [text, setText] = useState('');

  const handleInput = (e: any) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleClick = () => {
    setText('clicked');
  };

  return (
    <div className="mainContainer">
      <div
        style={{
          padding: '42px',
        }}
      >
        <TextArea
          value={text}
          placeholder="Write your text here"
          autoSize={{ minRows: 30, maxRows: 69 }}
          onChange={handleInput}
        />
      </div>
      <footer
        style={{
          backgroundColor: 'green',
        }}
      >
        <Menu theme="light" mode="horizontal">
          <Menu.Item key="1" style={{ float: 'right', paddingTop: '12px' }}>
            <Button type="primary" onClick={handleClick}>
              Submit
            </Button>
          </Menu.Item>
          <Menu.Item key="2" style={{ float: 'right', paddingTop: '12px' }}>
            <Button type="ghost" onClick={handleClick}>
              <CopyTwoTone
                twoToneColor="#1DA57A"
                style={{ paddingLeft: '12px', fontSize: 18 }}
              />
            </Button>
          </Menu.Item>
        </Menu>
      </footer>
    </div>
  );
};

export default InputForm;
