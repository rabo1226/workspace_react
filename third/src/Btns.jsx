import React, { useState } from 'react'
import Counter from './Counter'
import { use } from 'react'

export const Btns = ({cnt, setCnt}) => {

  return (
    <>
      <div className='gray_back'>
        <button type='button' onClick={e => setCnt(cnt = cnt - 1)}>-1</button>
        <button type='button' onClick={e => setCnt(cnt = cnt - 10)}>-10</button>
        <button type='button' onClick={e => setCnt(cnt = cnt - 100)}>-100</button>
        <button type='button' onClick={e => setCnt(cnt = cnt + 100)}>+100</button>
        <button type='button' onClick={e => setCnt(cnt = cnt + 10)}>+10</button>
        <button type='button' onClick={e => setCnt(cnt = cnt + 1)}>+1</button>
      </div>
    </>
  )
}
