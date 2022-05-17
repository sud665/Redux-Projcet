//* 현재 작성된 구성 요소 로컬스토리지에 저장하기
const handleLocals = (data) => {
  new Promise((resolve, reject) => {
    localStorage.setItem("data", JSON.stringify(data));
    resolve();
  }).then(() => {
    alert("저장 되었습니다.");
  });
};

//* 마우스 경로 확인 기능 함수 저장
const setMousePosition = (e) => {
  let pointer = e.target.getBoundingClientRect();
  let x = parseInt(e.clientX - pointer.left);
  let y = parseInt(e.clientY - pointer.top);
  if (x <= 0 || y <= 0) {
    x = 0;
    y = 0;
  }
  return { x, y };
};

//* export 기능 함수
const handleExport = (data) => {
  if (data) {
    const json = JSON.stringify(data);
    const element = document.createElement("a");
    const textFile = new Blob([json], { type: "text/plain" });
    element.href = URL.createObjectURL(textFile);
    element.download = "consumer.json";
    document.body.appendChild(element);
    element.click();
  }
};

export { handleLocals, handleExport, setMousePosition };
