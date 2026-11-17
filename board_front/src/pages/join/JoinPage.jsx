import React, { useState } from 'react'
import { joinAPI } from '../../apis/member_api';

const JoinPage = () => {
  //입력한 모든 정보를 저장할 state 변수
  const [joindata, setJoinData] = useState({
    memEmail : '',
    memPw : '',
    memName : '',
    memTel : '',
    memAddr : ''
  });

  //값 입력 시 실행되는 함수
  const handleJoinDat = e => {
    setJoinData({
      ...joindata,
      [e.target.name] : e.target.value
    });
  }

  //회원가입 실행 함수
  const join = async () => {
    const response = await joinAPI(joindata);
    if(response.status === 201){
      alert('회원가입 성공!');
    }
    else{
      console.log('회원가입 실패!!');
    }
  }
  

  //console.log(joindata);

  return (
    <div>
      이메일 :  
      <input 
        type="text"
        name='memEmail'
        value={joindata.memEmail}
        onChange={ e => handleJoinDat(e)}
      /> <br />
      비밀번호 : 
      <input 
        type="password"
        name='memPw'
        value={joindata.memPw}
        onChange={ e => handleJoinDat(e)}
      /> <br />
      이름 : 
      <input 
        type="text"
        name='memName'
        value={joindata.memName}
        onChange={ e => handleJoinDat(e)}
      /> <br />
      연락처 : 
      <input 
        type="text"
        name='memTel'
        value={joindata.memTel}
        onChange={ e => handleJoinDat(e)}
      /> <br />
      주소 : 
      <input 
        type="text"
        name='memAddr'
        value={joindata.memAddr}
        onChange={ e => handleJoinDat(e)}
      /> <br />
      <button 
        type="button"
        onClick={ e => join()}
      >회원가입</button>
    </div>
  )
}

export default JoinPage