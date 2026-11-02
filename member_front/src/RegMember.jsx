import axios from 'axios';
import React, { useState } from 'react'
import { data, useNavigate } from 'react-router-dom';

const RegMember = () => {
  //회원등록 기능 -> 성공하면 목록을 보여줌

  //회원의 정보를 저장 (joinData)
  const [member, setMember] = useState({
    memId : '',
    memPw : '',
    memName : '',
    memAge : '',
    gender : 'male',
    intro : ''
  });

  console.log(member);

  //변경 값 저장하는 함수 (handleJoinData)
  const chandgeMember = (e) => {
    setMember({...member, [e.target.name] : e.target.value})
  }

  //버튼 클릭 시 비동기 통신 함수 (insertData)
  const goReg = async () =>{
    try{
      await axios.post(`http://localhost:8080/members`, member);
      alert('신규회원 등록 성공');
      nav('/');
    }catch(e){
      console.log(e);
      console.log('회원 등록 중 오류');
      alert('회원 정보를 확인하세요.');
    }
  }

  //주소로 가야해!
  const nav = useNavigate();


  return (
    <>
      <h3>회원 등록 화면</h3>
      아이디  
      <input 
        type="text" 
        name='memId' 
        value={member.memId} 
        onChange={e=>{chandgeMember(e)}}
      />
      <br />

      비밀번호  
      <input 
        type="password" 
        name='memPw' 
        value={member.memPw} 
        onChange={e => chandgeMember(e)}
      />
      <br />

      이름  
      <input 
        type="text" 
        name='memName' 
        value={member.memName} 
        onChange={e => chandgeMember(e)}
      />
      <br />
      
      나이  
      <input 
        type="text" 
        name='memAge' 
        value={member.memAge} 
        onChange={e => chandgeMember(e)}
      />
      <br />

      성별  
      <input 
        type="radio" 
        id='male' 
        name='gender' 
        value={'male'} 
        checked={member.gender === 'male'}  
        onChange={e => chandgeMember(e)}
      />
      <label htmlFor="male">남성</label>

      <input 
        type="radio" 
        id='female' 
        name='gender' 
        value={'female'} 
        checked={member.gender === 'female'} 
        onChange={e => chandgeMember(e)}
      />
      <label htmlFor="female">여성</label>
      <br />

      자기소개 
      <textarea 
        cols={50} 
        rows={5} 
        value={member.intro} 
        name="intro" 
        onChange={e => chandgeMember(e)}
      ></textarea>
      <br />

      <button 
        type='button' 
        onClick={ e => {
          console.log(member);
          goReg();
      }}>회원 등록</button>
    </>
  )
}

export default RegMember