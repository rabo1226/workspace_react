// 공통으로 사용된 함수만 모아둔 함수모음 페이지
// 조회 기능의 경우 여러곳에서 사용할 수 있다!

import axios from "axios";


//게시글 목록 조회 함수
export const getBoardList = async () => {
  try{
    const response = await axios.get('http://localhost:8080/boards');
    return response;
  }catch(e){
    console.log(e);
    console.log('게시글 목록 조회 API 호출 실패!');
  }
}

//게시글 상세 조회 함수

