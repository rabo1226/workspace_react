import React, { useState } from 'react'

const Practice_1 = () => {
  //입력 모든 정보를 저장할 state 변수
  const [data, setData] = useState({
    major : '',
    grade : 'good',
    feedback : ''
  }) 

  console.log(data);

  //값 변경 함수
  const handleData = e => {setData({...data, [e.target.name] : e.target.value})}

  return (
    <>
      <h2>form 요소 실습 - 1</h2>

      <select name='major' value={data.major} onChange={e => handleData(e)}>
        <option value={''}>학습선택</option>
        <option value={'java'}>자바반</option>
        <option value={'media'}>영상반</option>
        <option value={'cad'}>캐드반</option>
      </select>
      <br />

      <input type='radio' name='grade' id='g1' 
        value={'good'} checked={data.grade === 'good'} onChange={e => {handleData(e)}}
      />
      <label htmlFor="g1">수</label>

      <input type='radio' name='grade' id='g2' 
        value={'soso'} checked={data.grade === 'soso'} onChange={e => {handleData(e)}}
      />
      <label htmlFor="g2">우</label>

      <input type='radio' name='grade' id='g3' 
        value={'bad'} checked={data.grade === 'bad'} onChange={e => {handleData(e)}}
      />
      <label htmlFor="g3">미</label>
      <br />

      <p>피드백</p>
      <textarea cols={50} rows={5} name='feedback'
        value={data.feedback}
        onChange={e => handleData(e)}
      ></textarea>

      <hr />
      <h2>입력 결과</h2>
      <p>학급 : {data.major}</p>
      <p>등급 : {data.grade}</p>
      <p>피드백 : {data.feedback}</p>
    </>
  )
}

export default Practice_1