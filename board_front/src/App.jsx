import './reset.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './pages/layout/Header'
import BoardList from './pages/board_list/BoardList'
import BoardListPage from './pages/board_list/BoardListPage'
import WritePage from './pages/board_write/WritePage'
import BoardDetailPage from './pages/board_detail/boardDetailPage'
import BoardDetail from './pages/board_detail/boardDetail'

//pages
//-게시글 목록 페이지 (boardList) 폴더 / boardList -> boardListPage.jsx <- boardList.jsx
//-게시글 등록 페이지 (boardWrite) 폴더 / 
//css(하나의 html에 다 그려지기 때문에 css 파일이 달라도 classname이 같으면 app에 연결되기 때문에 연결된다) -> Headr.modul.css

function App() {

  return (
    <div className='container'>
      <Header />

      <Routes>

        {/* 게시판 목록 페이지 */}
        <Route path='/' element={ <BoardListPage/> }></Route>
        {/* 게시글 등록 페이지 */}
        <Route path='/write' element={ <WritePage /> }></Route>
        {/* 게시글 상세 페이지 */}
        <Route path='/datail' element={ <BoardDetailPage/> }></Route>
      </Routes>

      

    </div>
  )
}

export default App
