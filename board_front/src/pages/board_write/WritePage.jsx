import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './WritePage.module.css'
import { getCategoryListAPI, regBoardAPI } from '../../apis/category_api';

const WritePage = () => {
  //게시글 페이지 마운트하면 게시글 카테고리 조회
  const [categorys, setCategorys] = useState([]);

  useEffect( () => {
    getCateList();
  }, []);

  //카테고리 목록 조회 함수
  const getCateList = async () => {
   const response = await getCategoryListAPI();
   console.log(response);
   setCategorys(response);
  }

  //입력한 게시글을 저장하는 State함수
  const[board, setBoard] = useState({
    cateNum : '',
    title : '',
    content : '',
    writer : ''
  });

  //게시글 변경이 있으면 그 값으로 변경하는 함수
  const boardHandle = (e) => {
    setBoard({
      ...board, 
      [e.target.name] : e.target.value
    });
  }

  //등록 버튼을 누르면 게시글 insert하러 가기!
  const goRegBoard = async () => {
    const response = await regBoardAPI(board);
    if(response.status === 201){
      alert('게시글 등록 성공');
      nav('/');
    }
    else{
      alert('오류 발생! 관리자 문의');
    }
  }

  //등록 완료되면 게시글 목록 페이지로 이동!
  const nav = useNavigate();

  console.log(board);

  return (
    <div className={styles.reg_form_div}>
      <div>
        <p>게시글 종류</p>
        <select 
          name="cateNum" 
          value={board.cateNum} 
          onChange={e => {boardHandle(e)}}
        >
          <option value="">글머리 선택</option>
          {
            categorys.map((category, i)=>{
              return(
                <option key={category.cateNum} value={category.cateNum}>{category.cateName}</option>
              )
            })
          }
        </select>
        <p>작성자 (임시)</p>
        <input 
          type="text" 
          name='writer' 
          value={board.writer} 
          onChange={e => {boardHandle(e)}}
        />
        <p>제목</p>
        <input 
          type="text" 
          name='title' 
          value={board.title} 
          onChange={e => {boardHandle(e)}}
        />
        <p>내용</p>
        <textarea 
          cols={50} rows={5} 
          name="content" 
          value={board.content} 
          onChange={e => {boardHandle(e)}}
        ></textarea>
      </div>
      <button onClick={ e => {goRegBoard()}}>등록</button>
    </div>
  )
}

export default WritePage