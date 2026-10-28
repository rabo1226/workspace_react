import React, { useState } from 'react'

const Input_2 = () => {
  //입력한 값 저장할 useState 변수
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  //e.target -> 이벤트가 발생한 태그 자제! / value -> 그 태그의 value값

  return (
    <>
      <h2>input 데이터 입력받기 -2</h2>
      이름 <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
            />
      <br />
      나이 <input 
              type="text" 
              value={age}
              onChange={age => setAge(age.target.value)}
            />
      <br />

      {/* 버튼을 클릭하면 입력한 이름과 나이를 alert으로 띄우자 */}
      <button 
        type='button' 
        onClick={ e => alert(`이름은 ${name}, 나이는 ${age}`)}>
          입력값 확인
      </button>
    </>
  )
}

export default Input_2