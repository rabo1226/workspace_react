import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const {memId} = useParams();

  //조회한 상세 정보를 저장할 state 변수
  const [memberData, setMemberData] = useState({});

  //value에는 undefined 값이 들어가면 안된다, useState로 {빈 객체의 undefined}의 값이 들어가고 리랜더링 후 다시 setMemberData로 다시 값이 설정된다.

  //마운트 시점[]에 상세정보 조회
  useEffect(() => {
    getDetail();
  }, []);

  //상세정보 조회 함수
  const getDetail = async () => {
    try{
      const respose = await axios.get(`http://localhost:8080/members/${memId}`);
      setMemberData(respose.data);
    }catch(e){
      console.log(e);
      console.log('상세 정보 중 조회 실패!');
    }
  }

  //확인 클릭 시 데이터 저장
  const handleMemberDate = e => {
    setMemberData({
      ...memberData, 
      [e.target.name] : e.target.value
    });
  }
  
  //확인버튼 클릭 시 수정 실행 함수
  const updateMemberData = () => {
    if(confirm('수정하시겠습니까?')){
      goUpdate();
    }

  }
  //등록 실행
  const goUpdate = async () => {
    try{
      await axios.put(`http://localhost:8080/members/${memberData.memId}`, {
        memName : memberData.memName,
        gender : memberData.gender,
        intro : memberData.intro
      });
      //상세페이지 이동
      nav(`/detail/${memberData.memId}`);
    }catch(e){
      console.log(e);
      console.log('수정 실패!');
    }
  }

  const nav = useNavigate();

  //console.log(memberData);

  return (
    <>
      <h3>회원 정보 수정 페이지</h3>
      
      <p>회원 아이디 : {memberData.memId}</p>

      <p>회원 이름 : 
        <input 
          type="text"
          name="memName"
          value={memberData.memName === undefined ? '' : memberData.memName}
          onChange={ e => {handleMemberDate(e)} }
        /></p>

      <p>회원 나이 : {memberData.memAge}</p>

      <p>회원 성별 : 
        <input 
          type="radio" 
          name="gender" 
          value={'male'} 
          id='male'
          checked={memberData.gender === 'male'}
          onChange={ e => {handleMemberDate(e)} }
        />
          <label htmlFor='male'>남성</label>

        <input 
          type="radio" 
          name="gender" 
          value={'female'} 
          id='female'
          checked={memberData.gender === 'female'}
          onChange={ e => {handleMemberDate(e)} }
        />
        <label htmlFor='female'>여성</label>
      </p>

      <p>회원 소개글 : 
        <textarea 
          name="intro" 
          value={memberData.intro === undefined ? '' : memberData.intro}
          onChange={ e => {handleMemberDate(e)} }
        ></textarea>
      </p>

      <button 
        type='button' 
        onClick={ e => {updateMemberData()} }
      >확인</button>
    </>
  )
}
export default Update