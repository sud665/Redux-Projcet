import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLocals, handleExport } from "../Utility/Utility";
import {
  addImportConfig,
  selectConfig,
  pastConfig,
  futureConfig,
} from "../../store/configSlice";
import { ActionCreators } from "redux-undo";

export default function Header() {
  //* view 페이지로 이동
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //* 현재 만들어진 구성요소 가져오기
  const selectData = useSelector(selectConfig);

  //* 과거 구성요소 가져오기
  const pastData = useSelector(pastConfig);

  //* 미래 구성요소 가져오기
  const futureData = useSelector(futureConfig);

  //* Undo기능 함수
  const handleUndo = () => {
    dispatch(ActionCreators.undo());
  };

  //* Redo기능 함수
  const handleRedo = () => {
    dispatch(ActionCreators.redo());
  };

  //* Import 후 디스플레이로 보내는 함수
  const handleImport = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0], "UTF-8");
    reader.onload = (e) => {
      let state = JSON.parse(e.target.result);
      dispatch(addImportConfig(state));
    };
  };

  return (
    <Container>
      <HeaderBox>
        <Button key="Save" onClick={() => handleLocals(selectData)}>
          Save
        </Button>
        <Button
          key="Undo"
          disabled={pastData.length === 0 ? "disabled" : null}
          onClick={() => handleUndo()}
        >
          Undo
        </Button>
        <Button
          key="Redo"
          disabled={futureData.length === 0 ? "disabled" : null}
          onClick={() => handleRedo()}
        >
          Redo
        </Button>
        <Button key="Export" onClick={() => handleExport(selectData)}>
          Export
        </Button>
        <Label>
          Import
          <input
            className="upload"
            type="file"
            onChange={(e) => handleImport(e)}
          ></input>
        </Label>
        <Button
          onClick={() => {
            navigate("/consumer");
          }}
        >
          View
        </Button>
      </HeaderBox>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 10px 10px 10px 10px;
  border-bottom: 1px solid black;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  background: none;
  text-align: center;
  color: tomato;
  border: 1px solid tomato;
  font-weight: 500;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
  &:hover {
    color: white;
    background: tomato;
    transition: 0.3s;
  }
`;

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
