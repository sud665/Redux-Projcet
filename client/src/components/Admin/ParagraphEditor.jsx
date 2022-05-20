import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { editParagraphConfig, selectConfig } from "../../store/configSlice";

const ParagraphEditor = ({ choiceID }) => {
  const dispatch = useDispatch();

  //* 선택된 config 가져오기 (잠시 보류)
  const editorElement = useSelector(selectConfig);

  //* 버튼 값 상태 변경
  const [paragraphValue, setParagraphValue] = useState(
    editorElement[choiceID].props.text
  );

  //* 알림창 메세지 값 핸들러 함수
  const handleParagraphText = useCallback(
    (e) => {
      let Payload = {
        id: choiceID,
        target: e.target.value,
      };
      setParagraphValue(e.target.value);
      dispatch(editParagraphConfig(Payload));
    },
    [choiceID]
  );

  return (
    <>
      <Title>Paragraph Text</Title>
      <Input
        name="Paragraph Text"
        value={paragraphValue}
        onChange={handleParagraphText}
      />
    </>
  );
};
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

export default React.memo(ParagraphEditor);
