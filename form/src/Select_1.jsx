import React, { useState } from 'react'

const Select_1 = () => {
  //선택한 값을 저장할 state 변수 = form 요소는 state 변수에 담는다!
  //변수의 초기값은 화면 로딩 시 최초로 보여질 옵션 태그의 value 값을 넣는다!
  const [fruit, setFruit] = useState('orange');
  console.log(`fruit = ${fruit}`)
  return (
    <>
      <h2>select 태그 다루기</h2>
      {/* select 태그의 value 값과 동일한  value를 지닌 option이 선택 */}
      <select value={fruit} onChange={e => setFruit(e.target.value)}>
        <option value={'apple'} >사과</option>
        <option value={'orange'}>오렌지</option>
        <option value={'banan'}>바나나</option>
      </select>
    </>
  )
}

export default Select_1