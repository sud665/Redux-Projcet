import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import { handleLocals } from "../Utility/Utility";
import store from "../../store";

export default function Header() {
  const dispatch = useDispatch();
  //* view 페이지로 이동
  const navigate = useNavigate();

  //* 현재 만들어진 구성요소 가져오기
  const selectData = useSelector((state) => state.config);

  //* Undo
  const handleUndo = () => {
    console.log("온두 되나?");
    store.dispatch(ActionCreators.undo());
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
        <Button key="Export">Export</Button>
        <Button key="Import">Import</Button>
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
