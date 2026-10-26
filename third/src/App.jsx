import Practice_1 from "./Practice_1"
import UsseState_1 from "./UsseState_1"
import './App.css'
import Practice_2 from "./Practice_2"
import Practice_3 from "./Practice_3"
import Practice_4 from "./Practice_4"
import Practice_5 from "./Practice_5"
//css파일, main.jsx(import.css)/APP.jsx(import.css) 삭제
function App() {

  return (
    <>
      <h2>값 변화를 화면에 반영하기 : useState</h2>
      {/* <UsseState_1 /> */}
      <div className="c-div">
        <div><Practice_1 /></div>
        <div><Practice_2 /></div>
      </div>
      <Practice_3 />
      <Practice_4 />
      <Practice_5 />
    </>
  )
}

export default App
