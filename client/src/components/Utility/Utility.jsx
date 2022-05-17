//* 현재 작성된 구성 요소 로컬스토리지에 저장하기
const handleLocals = (data) => {
  new Promise((resolve, reject) => {
    localStorage.setItem("data", JSON.stringify(data));
    resolve();
  }).then(() => {
    alert("저장 되었습니다.");
  });
};

export { handleLocals };
