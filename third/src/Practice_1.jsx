import React, { useState } from 'react'

const Practice_1 = () => {
  //초기값 0을 가진 state 변수
  const [num, setNum] = useState(0);

  return (
    <>
      <div className='d1'>{num}</div>
      <button 
        type='button'
        onClick={() => {
          setNum(num + 1)
      }}>클릭</button>
    </>
  )
}

export default Practice_1