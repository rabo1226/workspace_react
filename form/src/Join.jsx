import React, { use, useState } from 'react'

const Join = () => {
  //모든 내용 입력 후 '입력정보확인' 버튼 클릭 시 aletr()로 입력한 모든 정보 출력

  //모든 정보를 저장할 state변수
  const [data, setData] = useState({
    id :'',
    pw : '',
    name : '',
    tel : '',
    gender : '남성',
    hobby : '',
    intro : ''
  });

  //변경하는 함수
  const handelData = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h2>입력정보확인</h2>
      <div className='a-div'>
        <div className='c-div'>
          <p>아이디</p>
          <p>비밀번호</p>
          <p>이름</p>
          <p>연락처</p>
          <p>성별</p>
          <p>관심사</p>
          <p>인사글</p>
        </div>

        <div className='f-div'>
          <input type="text" name='id' value={data.id} onChange={e => handelData(e)}/>
          <input type="password" name="pw" value={data.pw} onChange={e => handelData(e)}/>
          <input type="text" name="name" value={data.name} onChange={e => {handelData(e)}}/>
          <input type="text" name="tel" value={data.tel} onChange={e => handelData(e)}/>

          <div>
            <input type="radio" name="gender" 
            value={'남성'} id="m" checked={data.gender === '남성'} onChange={e => handelData(e)}/>
            <label htmlFor="m">남성</label>
            <input type="radio" name="gender" 
            value={'여성'} id="f" checked={data.gender === '여성'} onChange={e => handelData(e)}/>
            <label htmlFor="f">여성</label>
          </div>
          
          <select name="hobby"  value={data.hobby} onChange={e => handelData(e)}>
            <option value="">선택</option>
            <option value="자기계발">자기계발</option>
            <option value="재테크">재테크</option>
            <option value="AI활용">AI활용</option>
          </select>
          <textarea cols={50} rows={6} name="intro" 
            value={data.intro} onChange={e => handelData(e)}></textarea>
        </div>
      </div>
      <button 
        type='button' 
        onClick={e => alert(`입력한 정보입니다.
                            -----------------
                            아이디 : ${data.id}
                            비밀번호 : ${data.pw}
                            이름 : ${data.name}
                            연락처 : ${data.tel}
                            성별 : ${data.gender}
                            관심사 : ${data.hobby}
                            인사글 : ${data.intro}`)}
      >입력정보확인</button>
    </>
  )
}

export default Join