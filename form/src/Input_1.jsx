import React, { useState } from 'react'

const Input_1 = () => {
  //입력받은 값을 저장할 변수를 선언해야한다! -> 일반변수, useState를 선택해야한다!
  //입력한 데이터를 저장할 state 변수
  const [data, setData] = useState('');
  console.log(`data = ${data}`);
  //입력된 데이터를 useState제외하고 리랜더링 실행!

  return (
    <>
      <h3>input 데이터 입력 예제 1</h3>
      <input 
        type='text' 
        value={data} 
        onChange={e => {
          //e.target.value = input의 value값 뽑는 것 (this = e.target)
          //console.log(e.target.value)
          setData(e.target.value)
        }}
      />
      <br/>
      <p>입력받은 값 : {data}</p>
    </>
  )
}

export default Input_1