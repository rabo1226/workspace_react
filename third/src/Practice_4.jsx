import React, { useState } from 'react'

const Practice_4 = () => {
  //버튼 클릭 시 숫자 변경 [숫자는 배열 사용]
  //1씩 증가되는 각 변수를 useStae  변수로 생성
  const [num, setNum] = useState([0, 0, 0]);

  //값 변경 함수
  const changeNum = index => {
    const copy_arr = [...num];
    copy_arr[index] = copy_arr[index] + 1;
    setNum(copy_arr);
  }

  //매개변수 1개 () 생략가능 / 한줄 {} 생략가능
  //state 변경함수 실행 후 리랜더링! / useState는 재실행xx
  return (
    <div className='d1_container'>

      <div className='d1' onClick={e =>
        //num은 [배열]의 주소를 가지고 있는 것!
        //num[0]번째 요소의 값만 변경
        //스프레드 연산자 - 배열, 객체를 담고 있는 박스를 벗겨내는 작업 => ...arr2
        changeNum(0)
      }>{num[0]}</div>

      <div className='d1' onClick={e => changeNum(1)}>{num[1]}</div>
      <div className='d1' onClick={e => changeNum(2)}>{num[2]}</div>

    </div>
  )
}

export default Practice_4