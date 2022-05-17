import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import { handleLocals, onExport, onImport } from "../Utility/Utility";
import { addImportConfig } from "../../store/configSlice";
import store from "../../store";

export default function Header() {
  //* view 페이지로 이동
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //* 현재 만들어진 구성요소 가져오기
  const selectData = useSelector((state) => state.config);

  //* Undo기능
  const handleUndo = () => {
    console.log("온두 되나?");
    store.dispatch(ActionCreators.undo());
  };

  //* Import 후 디스플레이로 보내는 함수
  // const handleImport = (e) => {
  //   console.log("d임폴트 되나?");
  //   if (e) {
  //     dispatch(addConfig());
  //   }
  // };

  // 이미지 미리보기 삽입 기능
  const handleImport = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
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
        <Button key="Undo" onClick={() => handleUndo()}>
          Undo
        </Button>
        <Button key="Redo">Redo</Button>
        <Button key="Export" onClick={() => onExport(selectData)}>
          Export
        </Button>
        <Label>
          Import
          <input
            className="upload"
            type="file"
            accept="*json"
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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  background: none;
  text-align: center;
  color: tomato;
  border: 1px solid tomato;
  font-weight: 500;
  cursor: pointer;
  margin-left: 5px;
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
  width: 60px;
  height: 30px;
  background: none;
  text-align: center;
  color: tomato;
  border: 1px solid tomato;
  font-weight: 500;
  cursor: pointer;
  margin-left: 5px;
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
