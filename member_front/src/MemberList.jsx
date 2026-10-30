import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MemberList = () => {
  //1. useSate memberList[] -> useEffect, getMember(정의문) 보류 -> return 그리기 -> memberList === 0 / 조회한 학생 목록이 없습니다 가 먼저 그려짐
  //그려진 다음 useEffect 실행 getMember() -> 회원목록 조회 data = setMemberList에 저장-> 리랜더링 -> memberList !== 0 map함수 ->useEffect 실행 x (마운트때만이니까!)


  //조회한 회원 목록 데이터를 저장할 변수 useState 변수 / 데이터 초기값 설정 -> 데이터가 넘어올 때의 최종 형태 [{}, {}] -> []
  const [MemberList, setMemberList] = useState([]);

  //회원 목록 데이터 조회(마운트 시[] / 마운트+업데이트 )  / 업데이트 시를 추가하면 리랜더링 후 다시 set실행 무한반복
  useEffect( e => {
    getMember();
  }, []);

  //회원 목록 조회 함수 (async(전체를 감싸는 함수를 비동기로 바꿔서 비동기로 만들어준다!) + await(비동기가 동기로 변하면서 순서를 지키게된다))
  const getMember = async () => {
    try{
      const response = await axios.get('http://localhost:8080/members');
      console.log(response.data);
      setMemberList(response.data);
    }catch(e){
      console.log('회원 목록 조회 실패!');
      console.log(e);
    }
  }

  return (
    <>
      <h3>회원 목록 페이지</h3>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>학생 아이디</td>
            <td>학생명</td>
            <td>학생나이</td>
            <td>학생성별</td>
          </tr>
        </thead>
        <tbody>
          {
            MemberList.length === 0 ?
            <tr>
              <td colSpan={5}>조회한 학생 목록이 없습니다.</td>
            </tr> 
            :
            MemberList.map((member, i)=>{
              return (
                <tr key={member.memId}>
                  <td>{MemberList.length - i}</td>
                  <td>{member.memId}</td>
                  <td>{member.memName}</td>
                  <td>{member.memAge}</td>
                  <td>{member.gender === 'male' ? '남성' : '여성'}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default MemberList