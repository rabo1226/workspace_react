//rafce ->  react arrow function conponent export
import React from 'react'

const Content = () => {
  const age = 20;
  const arr = [1, 2, 3, 4, 5];
  const person = {
    name : 'hong',
    age : 20
  };
  //null, undefined 값은 화면에 출력되지 않는다.
  const null_data = null;
  const undefind_data = undefined;

  return (
    <>
      <div>나이 : {age}</div>
      <div>배열 : {arr}</div>
      <div>배열 : {arr[2]}</div>
      <div>사람이름 : {person.name}</div>
      {/* <div>사람정보 : {person}</div> 객체를 통으로 사용할 수 없음 */}
      <div>null : {null_data}</div>
      <div>undefind : {undefind_data}</div>
    </>
  )

}

export default Content
