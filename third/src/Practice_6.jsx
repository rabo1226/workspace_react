import React, { useState } from 'react'
import Header from './Header'
import Counter from './Counter'
import { Btns } from './Btns'

function Practice_6() {
  //state 변수를 어떤 컴포넌트에서 만들까?
  const [cnt, setCnt] = useState(0);

  return (
    <>
      <Header />
      <Counter cnt={cnt} />
      <Btns cnt={cnt} setCnt={setCnt}/>
    </>
  )
}

export default Practice_6