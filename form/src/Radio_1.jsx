import React, { useState } from 'react'

const Radio_1 = () => {
  //선택한 radio 값을 저장할 state 변수 = form요소는 state변수~~~~
  //초기값은 화면 최초 로딩 시 선택할 태그의 value값으로 지정
  const [grade, setGrade] = useState('high');
  console.log(`grade = ${grade}`);
  
  return (
    <>
      <h2>Radio 다루기</h2>
      {/* checked 속성 값을 해석해서 true가 나오는 radio를 선택한다 */}
      <input type="radio" id='a' name='grade' 
        value={'high'} checked={grade === 'high'}
        onChange={e => setGrade(e.target.value)}
      /> 
      <label htmlFor='a'>상</label>

      <input type="radio" id='b' name='grade' 
        value={'middle'} checked={grade === 'middle'} 
        onChange={e => setGrade(e.target.value)}
      /> 
      <label htmlFor='b'>중</label>

      <input type="radio" id='c' name='grade' 
        value={'low'} checked={grade === 'low'} 
        onChange={e => setGrade(e.target.value)}
      /> 
      <label htmlFor='c'>하</label>
    </>
  )
}

export default Radio_1