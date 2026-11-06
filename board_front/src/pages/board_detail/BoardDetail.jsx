import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const BoardDetail = () => {
  const boardNum = useParams();
  // console.log('게시글 번호');
  // console.log(boardNum);
  //게시글 저장 함수
  const [boardData, setBoardDate] = useState({});

  //마운트 시 게시글 조회하러 가기!
  //게시글번호
  //글종류
  //제목
  //작성자
  //작성일
  //내용
  return (
    <div>BoardDetail</div>
  )
}

export default BoardDetail