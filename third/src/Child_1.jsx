import React from 'react'

const Child_1 = (props) => {
  console.log(props);
  //전달받은 데이터는 props라는 이름으로만 받을 수 있다. 그리고 {} 객체로 받는다. 
  //=> 데이터의 갯수와 상관없이 1개의 props로만 받을 수 있다! 왜냐 {}니까!!
  //부모 컴포넌트에서 전달되는 데이터의 
  //자식 컴포넌트의 매개변수 자리에 props를 선언해서 받을 수 있다. porps는 {객체}다.
  return (
    <>
      <div>Child_1</div>
      <p>전달받은 데이터</p>
      <p>전달받은 이름 : {props.name}</p>
    </>

  )
}

export default Child_1