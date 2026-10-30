import React, { useEffect, useState } from 'react'

//react 사용 함수?는 use가 붙음!!
//useEffect : 컴포넌트의 생애주기에 따라 원하는 코드를 실행하는 기능
//생아주기 :  생성(mount / 화면 최초 로딩, f5) -> 리랜더링(update) ->  소멸(unmount / 컴포넌트가 화면에서 사라질 때)
//useEffect에 작성한 코드는 그림 다 그린 후 실행 use보류 -> console(2) 실행 -> return(그림그리기) 실행 -> use 실행
//useEffect((함수)=>{선언문}, [의존성배열 : 실행 시점 컨트롤])

//실제로 useEffect는 db조회 내용을 많이 넣음! -> 조회하고 그리지 않고, 일단 그리고 조회되도록!

const UseEffect_1 = () => {

  const [cnt, setCnt] = useState(0);
  const [cnt2, setCnt2] = useState(0);

  //마운트 + 업데이트 시점에 실행
  useEffect(() => {
    console.log(1);
  });

  //마운트 시점에만 실행 / [빈 배열] = 의존성배열
  useEffect(() => {
    console.log(11);
  }, []);

  //마운트 + cnt값(state 변수)이 변경되어 리랜더링 될 때만 실행! => cnt2값 변경 시에는 실행ㄴㄴㄴㄴ
  useEffect(() => {
    console.log(22);
  }, [cnt]);

  //마운트 + cnt 혹은  cnt2가 변경되어 리랜더링 될 때만 실행!
  useEffect(() => {
    console.log(22);
  }, [cnt, cnt2]);

  // console.log(2);

  return (
    <>
       <div>{cnt}</div>
       <button type='button' onClick={ e => setCnt(cnt + 1)}>cnt 값 변경</button>
       
        <br />

       <div>{cnt2}</div>
       <button type='button' onClick={ e => setCnt2(cnt2 + 1)}>cnt2 값 변경</button>
    </>
  )
}

export default UseEffect_1