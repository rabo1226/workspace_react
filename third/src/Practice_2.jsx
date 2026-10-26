import React, { useState } from 'react'

const Practice_2 = () => {
  // on/off 버튼을 누를때마다 text on/off도 변경

  //useState 2개 선언
  const [text1, setText1] = useState('ON');
  const [text2, setText2] = useState('OFF');

  return (
    <>
      <h2 className='h2'>{text1}</h2>
      <button 
        type='button'
        onClick={() => {
          text1 === 'ON' ? setText1('OFF') : setText1('ON')
          , text2 === 'OFF' ? setText2('ON') : setText2('OFF')
        }}
      >{text2}</button>
    </>
  )
}

export default Practice_2