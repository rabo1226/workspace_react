import React from 'react'

const Child_2 = (props) => {
  console.log(props);
  
  //전달받은 함수 호출
  //props.func();
  //구조분해할당
  //배열 
  //const arr = [1, 2, 3];
  //const [a, b, c] = arr; //순서대로 할당!
  //function aa([a, b]){
  //console.log(a);
  //console.log(b);
  // }
  //aa([1, 2])  -> [a, b] = [1, 2] -> 구주분해 할당으로 a, b호출해서 해결!
  //객체
  //const data = {name='kim', age:20}
  //const {name, age} = data;  //키 값과 변수명 일치!

  return (
    <>
      <h3>Child_2 컴포넌트</h3>
      <p>전달받은 데이터</p>
      <p>나이 : {props.age}</p>
      <p>주소 : {props.addr}</p>
    </>
  )
}

export default Child_2