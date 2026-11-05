import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
  //회원을 조회했을 때 app에서 조회한 뒤 List, Detail로 props로 전달하는 거 가능 (이는 bb 1회만 조회해서 응용 가능 / 잘 변하지 않는 데이터면 이 방식이 좋다)
  //but 변화가 있는 데이터는 다시 조회해서 그리는 방식이 맞다!

  //url parameter 데이터 받기, 구조분해할당으로 데이터 받는다
  const {memId} = useParams();

  //조회한 상세 정보를 저장할 state 변수
  const [memberInfo, setMemberInfo] = useState({});
 
  //null, undefined는 화면에 출력을 하지 않는다! 화면은 데이터가 '빈'상태로 그린다!!
  
  //마운트 시 회원 상태 조회 진행
  useEffect(e => {
    getDetail();
  }, []);

  //회원 상세 조회 함수 -> 동기였다가 async로 비동기
  const getDetail = async () => {
    //비동기 통신으로 진행
    try{
      const respose = await axios.get(`http://localhost:8080/members/${memId}`);
      console.log(respose.data);
      setMemberInfo(respose.data);
    }catch(e){
      console.log(e);
      console.log('상세 조회 시 오류 발생!');
    }
  }

  //삭제버튼 클릭 -> 정말 삭제할? -> 삭제 -> 목록페이지
  //삭제 버튼 클릭 시 실핼함수
  const del_member = () => {
    if( confirm('삭제 하시겠습니까?') ){
      doDelete();
    }
  }

  //삭제하러 가야지!
  const doDelete = async () => {
    try{
        await axios.delete(`http://localhost:8080/members/${memberInfo.memId}`);
        nav('/');
      }catch(e){
        console.log(e);
        console.log('회원 삭제 중 오류 발생!');
      }
  }

  //가야쥐!
  const nav = useNavigate();

  //수정버튼 클릭 -> 수정 페이지 이동 + 원본 데이터 가져가지 -> input 태그 내용 변경 후 수정 실행 -> 상세페이지 이동

  //react 버전 -> onclick 했을 때 input태그를 바꾸면 원본데이터를 가지고 이동할 필요가 없다!


  return (
    <>
      <h3>회원 상세 정보</h3>
      <p>회원 아이디    :  {memberInfo.memId}</p>
      <p>회원 이름      :  {memberInfo.memName} </p>
      <p>회원 나이      :  {memberInfo.memAge} </p>
      <p>회원 성별      :  {memberInfo.gender === 'male' ? '남성' : '여성'} </p>
      <p>회원 소개글    :  {memberInfo.intro} </p>

      <br />

      <button type='button' onClick={ e => nav('/') }>목록가기</button>

      <button type='button' onClick={ e => nav(`/update/${memberInfo.memId}`) }>수정하기</button>

      <button type='button' onClick={ e => del_member() }>삭제하기</button>
    </>
  )
}

export default Detail