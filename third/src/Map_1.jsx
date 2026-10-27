import React from 'react'

//자바스크립트에는 반복문이 총 4가지 있음.
const Map_1 = () => {
  const arr = [1, 3, 5, 7, 9];

  //기본
  for(let i = 0; i < arr.length; i++){
    console.log(i);
  }

  //for-each
  for(const e of arr){
    console.log(e);
  }

  //forEach() 함수
  const result1 = arr.forEach((e, i) => {
    console.log(`e = ${e}, i = ${i}`);
    return e + 1;
  });

  console.log(`result1 = ${result1}`);  //result1 = undefined 리턴값 없음!
  console.log('-------------------------------------------');
  
  //Map() 함수
  const result2 = arr.map((e, i) => {
    console.log(` e = ${e}, i = ${i}`);
    return  e + 1;
  });
  
  console.log(result2);  //[2, 4, 6, 8, 10]  //배열로 리턴!

  return (
    <>
      <h2>map을 이용한 반복 그리기</h2>
      {
        arr.map((e, i)=>{
          return (
            <p key={i}>{e}</p>
          )
        })
      }
    </>
)
}

export default Map_1