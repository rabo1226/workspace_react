import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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

  return (
    <>
      <h3>회원 상세 정보</h3>
      <p>회원 아이디    :  {memberInfo.memId}</p>
      <p>회원 이름      :  {memberInfo.memName} </p>
      <p>회원 나이      :  {memberInfo.memAge} </p>
      <p>회원 성별      :  {memberInfo.gender === 'male' ? '남성' : '여성'} </p>
      <p>회원 소개글    :  {memberInfo.intro} </p>

      <br />

      <button type='button'>목록가기</button>
      <button type='button'>수정하기</button>
      <button type='button'>삭제허기</button>
    </>
  )
}

export default Detail