// const dispatch = useDispatch();

//* 현재 작성된 구성 요소 로컬스토리지에 저장하기
const handleLocals = (data) => {
  new Promise((resolve, reject) => {
    localStorage.setItem("data", JSON.stringify(data));
    resolve();
  }).then(() => {
    alert("저장 되었습니다.");
  });
};

// * import 기능 함수
const onImport = (e) => {
 
};

//* export 기능 함수
const onExport = (data) => {
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

export { handleLocals, onExport, onImport };
