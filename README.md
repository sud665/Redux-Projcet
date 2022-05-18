# YMJ-pre-task
요망진연구소 사전과제물 

## 요구사항

### 내용 :

- FasDeli 기업이 E-Commerce 시장으로 확장예정
- React 또는 vue로 웹 어플리케이션 구축

### 요구사항

- 2개 사이트(페이지)가 필요 -> 관리자 페이지 & 유저페이지
- 반응형 웹 사이트 구현

### 관리자 페이지 요구사항

- textArea 와 button 요소를 선택해 Drop & Drag 기능 구현
- 단락의 텍스트 / 버튼 경고 메세지 변경 가능
- 실행 취소 및 다시 실행 기능
- 저장기능 (post 요청) 바로 랜더링 페이지로 이동하지 않을것 
- Import & Export 기능이 있을것 

### 고객 페이지 요구사항

- 완성된 페이지만 랜더링 될 것 
- 버튼 클릭시 알람창에 작성했던 문구가 나올것 

### 선택사항 
- 이미지 삽입 기능 

### Folder Structure

```
clinet
  src
    components
      Admin
        ButtonEditor.js
        Canvas.js
        ConsumerDisplay.js
        header.js
        ParagraphEditor.js
        Sidebar.js
      Consumer
        ConsumerView.js
      Utility
        Utility.js
    pages
      Adminpage.js
      Consumerpage.js
      Mainpage.js
    store
      choiceIconSlice.js
      clickElementSlice.js
      configSlice.js
    App.css
    App.js
    index.js
    store.js
```

## Available Scripts
In the project directory, you can run:

### npm install
Install packages to setup app

### npm run start
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Result 

- Admin 페이지 
![기본기능](https://user-images.githubusercontent.com/89363048/168965846-42ae540f-7eb1-44cb-aa7c-cdca7acfda39.gif)

- Consumer 페이지 
![저장뷰기능](https://user-images.githubusercontent.com/89363048/168966051-48f6a589-078b-4b9f-a238-b729962914bb.gif)

- Undo & Redo 기능 
![undo기능](https://user-images.githubusercontent.com/89363048/168966147-80dbdfad-ac58-465e-8867-b0efbc573871.gif)


- export & import 기능 
![export기능](https://user-images.githubusercontent.com/89363048/168966265-ab351cac-165f-4dcf-be69-ba3986a695f3.gif)


