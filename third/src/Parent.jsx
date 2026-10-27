import React, { useState } from 'react'
import Child_1 from './Child_1'
import Child_2 from './Child_2'
import Child_3 from './Child_3';

//props를 이용하면 자식 컴포넌트에게 데이터, 함수를 전달할 수 있음
//데이터를 key, value name={} 형태로 전달하는 방식을 props라고 한다.
//*** 부모 컴포먼트나 형제 컴포넌트에게는 데이터, 함수 전달 불가 (app -> p -> c1, c2 ooo) / (c1, c2 -> p -> app xxxxx) / 변수나 자바스크립트 사용할 때 중괄호{}
const Parent = () => {
  const data = '홍길동';

  const f1 = () => {
    alert('f1 함수 실행');
    //return 10;
  }
  //f1(); = 함수 호출 /  const result = f1(); 리턴 데이터 저장 / const result1 = f1; => f1함수를 변수에 저장하는 것 뿐! => result1();를 실행하면 f1();도 실행된다!
  //const [num, setNum] = useState(0,f); 의 변경함수를 구조분해할당으로 setNum();을 사용하는 것과 같은 방식이다!
  return (
    <>
      <h2>Parent 컴포넌트</h2>
      <p>
        아래에는 Child 컴포넌트들이 랜더링 됩니다.
      </p>
      <hr />
      <Child_1 name={data} />
      <hr />
      <Child_2 
        age={20} 
        addr={'울산'} 
        func={f1} 
      />
      <hr />
      <Child_3 
        stuNum={1}
        korScore={80}
        grade={'A'}
      />
    </>
  )
}

export default Parent