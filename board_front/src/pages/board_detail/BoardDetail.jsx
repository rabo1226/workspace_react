import React, { useEffect, useState } from 'react'
import { deleteBoardAPI, getDetailAPI } from '../../apis/board_api';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const BoardDetail = ({boardNum}) => {
  //조회한 게시글 상세 정보를 저장할 state 변수
  const [board, setBoard] = useState({});
  
  //마운트 시 게시글 조회하러 가기!
  useEffect(() => {
    getDetail();
  }, []);

  //게시글 상세 정보 조회 / async await로 삭제 후 /로 이동 가능! 없으면 삭제하러 간 사이에 그냥 /로 이동!  
  const getDetail = async () => {
    const response = await getDetailAPI(boardNum);
    console.log(response.data);
    setBoard(response.data);
  }

  //게시글 목록 페이지로 이동
  const nav = useNavigate();

  //게시글번호  //글종류  //제목  //작성자  //작성일  //내용

  // Cannot read properties of undefined (reading 'cateName')
  // -> 속성값을 못찾는데 cateName어찌 찾오? 란 뜻 / board.categoryDTO가 undefined!

  //1. 삭제 기능 구현 -> 상세보기에 삭제버튼 추가 -> 삭제 버튼 시 삭제 진행(confirm -> 삭제 -> 게시글 목록)
  const removeBoard = async () => {
    if(confirm('삭제 진행?')){
      await deleteBoardAPI(boardNum);
      nav('/');
    }
  }

  return (
    <div>
      <p>글번호 : {board.boardNum}</p>
      <p>카테고리명 : {board.categoryDTO === undefined ? '' : board.categoryDTO.cateName}</p>
      {/* board.categoryDTO?.cateName  -> 옵셔널 체이닝, 객체를 받을 때 사용한다.*/}
      <p>카테고리명 : {board.categoryDTO?.cateName}</p>
      <p>제목 : {board.title}</p>
      <p>작성자 : {board.writer}</p>
      <p>작성일(년월일 시분) : {dayjs(board.crateDate).format('YYYY-MM-DD HH:mm')}</p>
      <p>내용 : {board.content}</p>
      <div>
        <button 
          type='button' 
          onClick={e => {removeBoard()}}
        >삭제</button>
      </div>
    </div>
  )
}

export default BoardDetail