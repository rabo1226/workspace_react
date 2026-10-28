import React, { useState } from 'react'

const Input_3 = () => {
  //입력한 모든 데이터를 저장할 state 변수
  const [data, setData] = useState({
    name : '',
    age : '',
    tel : '', 
    addr : ''
  });

  console.log(data);

  //input 태그의 값 변경 시 실행되는 함수 / e를 매개변수로 받아서 e 태그의 name 속성값, value 속성값을 사용한다!
  const handleData = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  }

  return (
    <>
      <h3>다수의 input 데이터 입력받기</h3>
      이름 <input 
            type="text" 
            value={data.name} 
            name='name'
            onChange={e => handleData(e)} />
      <br />

      나이 <input 
            type="text" 
            value={data.age} 
            name='age'
            onChange={e => handleData(e)} />
      <br />

      연락처 <input 
              type="text" 
              value={data.tel} 
              name='tel'
              onChange={e=> handleData(e)} />
      <br />

      주소 <input 
            type="text" 
            value={data.addr} 
            name='addr'
            onChange={e => handleData(e)} />
      <br />

      <h3>입력 받은 데이터</h3>
      <p>이름 : {data.name}</p>
      <p>나이 : {data.age}</p>
      <p>연락처 : {data.tel}</p>
      <p>주소 : {data.addr}</p>
    </>
  )
}

export default Input_3