//* 현재 작성된 구성 요소 로컬스토리지에 저장하기
const handleLocals = (data) => {
  new Promise((resolve, reject) => {
    localStorage.setItem("data", JSON.stringify(data));
    resolve();
  }).then(() => {
    alert("저장 되었습니다.");
  });
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

//* 이미지 삽입 기능 함수
const encodeFileTobase64 = (fileBlob) => {
  const reader = new FileReader();
  const dd = reader.readAsDataURL(fileBlob);
  console.log(dd);
};

export { handleLocals, handleExport, encodeFileTobase64 };
