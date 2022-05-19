import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { editImageConfig } from "../../store/configSlice";

export default function ImageEditor({ choiceID }) {
  const dispatch = useDispatch();

  //* 선택된 config 가져오기 (잠시 보류)
  // const editorElement = useSelector(selectConfig);

  //* 버튼 값 상태 변경
  const [paragraphValue, setParagraphValue] = useState("Paragraph");

  //* 알림창 메세지 값 핸들러 함수
  const handleParagraphText = useCallback((e) => {
    let buttonPayload = {
      id: choiceID,
      target: e.target.value,
    };
    setParagraphValue(e.target.value);
    dispatch(editImageConfig(buttonPayload));
  }, []);

  return (
    <>
      <Label>
        Import
        <input
          className="upload"
          type="file"
          onChange={(e) => handleParagraphText(e)}
        ></input>
      </Label>
    </>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 28px;
  background: none;
  text-align: center;
  color: tomato;
  border: 1px solid tomato;
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  &:hover {
    color: white;
    background: tomato;
    transition: 0.3s;
  }
  > input.upload {
    display: none;
  }
`;
