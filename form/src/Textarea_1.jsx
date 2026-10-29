import React, { useState } from 'react'

const Textarea_1 = () => {
  //textarea에 입력한 값을 저장할 stste 변수
  //초기 값은 textarea에 보여질 최초 문자열로 세팅 -> textarea. value의 값
  const [text, setText] = useState('');
  console.log(`text = ${text}`);
  return (
    <>
      <h2>textarea 다루기</h2>
      <textarea 
        cols={30} 
        rows={5} 
        value={text}
        onChange={e => setText(e.target.value)}
      ></textarea>
    </>
  )
}

export default Textarea_1