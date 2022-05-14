//마우스 커서 움직임 확인 함수
export const setMousePosition = (e) => {
  let rect = e.target.getBoundingClientRect();
  console.log("1", e.clientX);
  console.log("2", rect);
  let x = parseInt(e.clientX - rect.left);
  let y = Math.floor(e.clientY - rect.top);
  if (x < 0 || y < 0) {
    x = 0;
    y = 0;
  }
  return x 
};
