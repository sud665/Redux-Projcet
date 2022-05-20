import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { editImageConfig } from "../../store/configSlice";

export default function ImageEditor({ choiceID }) {
  const dispatch = useDispatch();

  //* 선택된 config 가져오기 (잠시 보류)
  // const editorElement = useSelector(selectConfig);

  //* 알림창 메세지 값 핸들러 함수
  const handleParagraphText = useCallback((fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        let buttonPayload = {
          id: choiceID,
          target: reader.result,
        };
        console.log("dd", buttonPayload);
        dispatch(editImageConfig(buttonPayload));
        resolve();
      };
    });
  }, []);

  return (
    <>
      <Label>
        Image Insert
        <input
          className="upload"
          type="file"
          accept="image/*"
          onChange={(e) => handleParagraphText(e.target.files[0])}
        ></input>
      </Label>
    </>
  );
}

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
