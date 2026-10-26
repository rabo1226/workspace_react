import React, { useState } from 'react'

const Practice_5 = () => {
  const [info, setInfo] = useState({
    name : '김자바', 
    age : 20, 
    addr : '울산시'
  });
  //키 중복이면 마지막 키 값으로 변경
  //값 변경 함수
  //info.name == info['name'] 같은 호출 / [변수]를 사용하면 key를 변수로 받아서 키값으로 설정가능
  const changeInfo = (key, value) => {
    setInfo({
      ...info,
      [key] : value
    });
  };

  return (
    <div>
      <div className='p5'>이름 : {info.name}</div>
      <div className='p5'>나이 : {info.age}</div>
      <div className='p5'>주소 : {info.addr}</div>
      <div>
        <button onClick={e => changeInfo('name', '홍길동')}>이름을 홍길동으로 변경</button>
        <button onClick={e => setInfo({...info, age:30})}>나이를 30으로 변경</button>
        <button onClick={e => changeInfo('addr', '서울시')}>주소를 서울시로 변경</button>
        </div>
    </div>
  )
}

export default Practice_5