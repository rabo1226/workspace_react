import './reset.css'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MemberList from './MemberList'

function App() {

  return (
    <>
      <h2>회원 관리 프로그램</h2>
      
      <Routes>
        {/* 회원 목록 페이지 localhost:5173/ */}
        <Route path='/' element={ <MemberList /> } />
      </Routes>


    </>
  )
}

export default App
