import React, { useState } from 'react'
import ReplyList from './ReplyList'
import { useParams } from 'react-router-dom'
import BoardDetail from './BoardDetail';
import ReplyWrite from './ReplyWrite';

const BoardDetailPage = () => {
  //url Paramete 저장 함수
  const {boardNum} = useParams();

  //댓글 목록 조회 -> 댓글이 없으면 '댓글이 없습니다.' / Reply.jsx -> 댓글 하나의 형태 / ReplyList에 Reply.jsx를 반복해서 그린다.
  //글번호 props로 전달!

    //페이지 리랜더링을 위한 state 변수 빈{}를 주고 / 댓글 등록 후 새로운{}빈객체를 주면
    const [reload, setReload] = useState({});
    console.log('BoardDetailPage 컴포넌트 랜더링');


  return (
    <div>
      <h2>게시글 상세 보기 페이지</h2>
      {/* 게시글 상세 정보 컴포넌트 */}
      <BoardDetail boardNum={boardNum}/>

      {/* 댓글 등록 컴포넌트 */}
      <ReplyWrite boardNum={boardNum} setReload={setReload}/>

      {/* 댓글 목록 정보 컴포넌트 */}
      <ReplyList boardNum={boardNum} reload={reload}/>
    </div>
  )
}

export default BoardDetailPage