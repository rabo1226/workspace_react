import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Input_1 from './Input_1'
import Input_2 from './Input_2'
import Input_3 from './Input_3'
import Join from './Join'
import Practice_1 from './Practice_1'
import Radio_1 from './Radio_1'
import Select_1 from './Select_1'
import Textarea_1 from './Textarea_1'
import Textarea_ from './Textarea_1'
import UseEffect_1 from './UseEffect_1'
import Login from './Login'
import Header from './Header'
import Detail from './Detail'

function App() {
  //<Route path='*' element={<div>찾을 수 없는 페이지 입니다;;</div>} /> 입력된 url외에 모든url은 '찾을 수 없는 페이지 입니다.'를 띄운다~
  // a href 대체 Link
  //useNavigate() 훅을 호출하면 페이지 라우팅 기능을 제공하는 함수를 리턴
  //location.href 대체 useNavigate
  const nav = useNavigate();

  return (
    <>

      <Header />

      <button 
        type='button' 
        onClick={e => {nav('/join')}}>
        회원가입 페이지로 이동
      </button>

      <Routes>
        <Route path='/' element={<div>메인 페이지</div>} />
        <Route path='/login' element={ <Login /> } />
        <Route path='/join' element={<div>join 페이지</div>} />
        <Route path='/detail/:num/:name' element={ <Detail /> } />
        <Route path='*' element={<div>찾을 수 없는 페이지 입니다;;</div>} />
      </Routes>
    </>
  )
}

export default App
