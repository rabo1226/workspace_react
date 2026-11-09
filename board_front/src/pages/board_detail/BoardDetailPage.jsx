import React, { useState } from 'react'
import ReplyList from './ReplyList'
import { useParams } from 'react-router-dom'
import BoardDetail from './BoardDetail';

const BoardDetailPage = () => {
  //url Paramete 저장 함수
  const {boardNum} = useParams();

    
  //댓글 목록 조회 -> 댓글이 없으면 '댓글이 없습니다.' / Reply.jsx -> 댓글 하나의 형태 / ReplyList에 Reply.jsx를 반복해서 그린다.
  //글번호 props로 전달!


  return (
    <div>
      <h2>게시글 상세 보기 페이지</h2>
      {/* 게시글 상세 정보 컴포넌트 */}
      <BoardDetail boardNum={boardNum}/>
      {/* 댓글 목록 정보 컴포넌트 */}
      <ReplyList boardNum={boardNum}/>
    </div>
  )
}

export default BoardDetailPage