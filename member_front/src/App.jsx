import './reset.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MemberList from './MemberList'
import Detail from './Detail'
import RegMember from './RegMember'
import Update from './Update'

function App() {

  return (
    <>
      <h2>회원 관리 프로그램</h2>
      
      <Routes>
        {/* 회원 목록 페이지 localhost:5173/ */}
        <Route path='/' element={ <MemberList /> } />
        {/* 회원 상세 페이지 , 키 값으로 memId 이름으로 데이터 전달*/}
        <Route path='/detail/:memId' element={ <Detail />} />
        {/* 회원 등록 페이지 */}
        <Route path='/reg' element={ <RegMember /> } />
        {/* 회원 정보 수정 페이지 */}
        < Route path='/update/:memId' element={ <Update />} />
      </Routes>


    </>
  )
}

export default App
