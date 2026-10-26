
import React, { useState } from 'react'

const UsseState_1 = () => {
  // let num = 0;
  //js는 함수도 자료형
  //변수의 변화가 화면에 반영이 되려면 그 변수는 useState()를 이용해서 만들어야 함.
  //useState() 함수는 배열값을 [리턴]
  //useState() 함수의 매개변수에는 변수에 적용할 초기값을 넣어준다.
  //배열의 0번째 : useState() 함수의 매개변수로 전달할 값을 초기값으로 가지는 변수
  //배열의 1번째 : 변수의 값을 변경하는 함수
  //useState로 선언된 변수의 값을 state 변경함수로 변경을 하게되면 리랜더링을 실행한다.
  console.log('UseState_1 컴포넌트 실행')

  //num : state 변수
  //setNum : state 변경함수
  //useState를 사용한 코드는 리랜더링되어도 실행하지 않는다.
  const [num, setNum] = useState(0);
  console.log(`초기 num 값 : ${num}`);

  let name = '홍길동';

  const test = () => {
    alert(1);
    alert(2);
  }

  return (
    <>
      <h3>{num}</h3>
      <button 
        type='button'
        onClick={() => {
          //onClick 할 때마다 1씩 증가
          setNum(num + 1); //매개변수로 변경하려는 값을 전달
          console.log(`변경된 num 값 : ${num}`);
        }}
      >+1</button>

      <button 
        type='button'
        onClick={() => {
          test();
        }}
      >연습용버튼</button>

      <button 
        type='button'
        onClick={() => {
          name = '이순신'
        }}
      >연습용버튼2</button>
    </>
  )
}

export default UsseState_1