import React, { useState } from 'react'

const Counter = ({cnt}) => {

  return (
    <>
      <div className='gray_back'>
        <p>현재 카운트 : </p>
        <div>{cnt}</div>
      </div>
    </>
  )
}

export default Counter