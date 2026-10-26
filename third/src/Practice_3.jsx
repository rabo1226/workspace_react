import React, { useState } from 'react'

const Practice_3 = () => {
  //광고닫기 버튼을 클릭하면 h3가 사라지고, 버튼 내용은 광고보기로 변경!
  //react는 변수의 값을 변경하는 것에 초점을 맞춘다. //if문, for문 사용못함!
  const [btnText, setBtnText] = useState('광고닫기');
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <button 
        className='btn'
        type='button'
        onClick={()=>{
          //state 변경함수는 여러개 있으면 다 실행 후 최후에 한번만 리랜더링 함
          btnText === '광고닫기' ? setBtnText('광고보기') : setBtnText('광고닫기');
          setIsShow(!isShow)
        }}
      >{btnText}</button>
       {
        isShow ? <h3 className='h3'>오늘 구매하시면 30% SALE!!!</h3> : null
       }
       {
        //&& 동시만족이기때문에 이 방식이 더 유용함! => 단락평가 js,react 사용가능!
        isShow && <h3 className='h3'>오늘 구매하시면 30% SALE!!!</h3>
       }
    </>
  )
}

export default Practice_3