import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
  //url parameter로 전달되는 데이터는 useParams() 훅을 이용해서 받는다.
  //전달되는 데이터는 {}객체 형태  => 전달되는 데이터는 다수로 받을 수 있다.
  
  //const param = useParams();

  //받은 데이터는 구조분해할당 사용해서 받는다~~~~~~ or 스프레드
  const {num, name} = useParams();

  // console.log(param);
  

  return (
    <>
      <h2>상세페이지</h2>
      <p> 
        전달받은 상품 번호 : {num}
      </p> 
      <p> 
        전달받은 상품 이름 : {name}
      </p> 
    </>
  )
}

export default Detail