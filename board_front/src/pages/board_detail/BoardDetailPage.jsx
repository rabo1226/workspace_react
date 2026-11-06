import React, { useState } from 'react'
import BoardDetail from './boardDetail'
import ReplyList from './ReplyList'
import { useParams } from 'react-router-dom'

const BoardDetailPage = () => {
  //게시글 번호로 저장 함수
  const {boardNum} = useParams();
  const [num, setNum] = useState();
  setNum(...boardNum);

  console.log('게시글 번호');
  
  //게시글을 조회
  return (
    <div>
      <p>연결확인</p>
      {/* 게시글 상세보기 */}
        <BoardDetail/>
      {/* 게시글의 댓글 */}
        <ReplyList />
    </div>
  )
}

export default BoardDetailPage