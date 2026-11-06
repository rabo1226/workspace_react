import React, { useEffect, useState } from 'react'
import BoardList from './BoardList'
import BoardSearch from './BoardSearch'
import axios from 'axios'
import { getBoardList } from '../../apis/board_api'
import { useNavigate } from 'react-router-dom'


//게시글 목록 페이지 전체를 표현하는 컴포넌트

//1. 게시글 목록 띄우기
// - 테이블 컬럼 : NO, 제목, 작성자, 작성일 / 게시글이 없다면 '등록된 게시글이 없습니다.'를 띄운다

//2. 게시글 등록

const BoardListPage = () => {
  //게시글 목록은 BoardListPage에서 조회하고, props로 List에 전달한다?
  
  //게시글 목록을 저장할 useState변수
  const [boardList, setBoardList] = useState([]);

  //게시글 목록 조회 호출 함수
  const getList = async () => {
    const response = await getBoardList();
    console.log(response.data);
    setBoardList(response.data);
  }
  
  //컴포넌트 마운트 시 게시글 목록 조회
  useEffect( () => {
    getList();
  } , []);

  //게시글 등록 페이지 이동 함수
  const nav = useNavigate();

  return (
    <>
      {/* 게시글 검색 페이지의 글 검색 영역 */}
      <BoardSearch/>

      {/* 게시글 목록 페이지의 표 영역 */}
      < BoardList boardList={boardList} />

      {/* 게시글 목록 페이지의 버튼 영역 */}
      <div>
        <button type='button' onClick={ e => {nav('/write')}}>글쓰기</button>
      </div>
    </>
  )
}

export default BoardListPage