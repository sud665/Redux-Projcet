import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { editButtonConfig, editButtonMSGConfig } from "../../store/configSlice";

export default function ButtonEditor({ choiceID }) {
  const dispatch = useDispatch();

  //* 선택된 config 가져오기
  const editorElement = useSelector((state) => state.config[choiceID]);

  //* 버튼 값 상태 변경
  const [buttonValue, setButtonValue] = useState(editorElement.props.text);

  //* 메세지 값 상태 변경
  const [messageValue, setMessageValue] = useState(editorElement.props.message);

  //* 버튼요소의 값 핸들러 함수
  const handleButtonText = useCallback((e) => {
    let buttonPayload = {
      id: choiceID,
      target: e.target.value,
    };

    setButtonValue(e.target.value);
    dispatch(editButtonConfig(buttonPayload));
  }, []);

  //* 알림창 메세지 값 핸들러 함수
  const handleMessageText = useCallback((e) => {
    let messagePayload = {
      id: choiceID,
      target: e.target.value,
    };
    setMessageValue(e.target.value);
    dispatch(editButtonMSGConfig(messagePayload));
  }, []);

  return (
    <>
      <Title>Button Text</Title>
      <Input
        name="Button Text"
        value={buttonValue}
        onChange={handleButtonText}
      />
      <Title>Alert Text</Title>
      <Input
        name="Alert Text"
        value={messageValue}
        onChange={handleMessageText}
      />
    </>
  );
}
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: 3px;
  width: 200px;
  height: 20px;
`;
