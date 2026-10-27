import React from 'react'

const Child_3 = ({stuNum, korScore, grade}) => {
 //{stuNum, korScore, grade} = porops; 구조분해 할당으로 저장!
  return (
    <>
      <h3>Child_3 컴포넌트</h3>
      <p>전달받은 데이터</p>
      <p>학번 : {stuNum}</p>
      <p>국어점수 : {korScore}</p>
      <p>등급 : {grade}</p>
    </>
  )
}

export default Child_3