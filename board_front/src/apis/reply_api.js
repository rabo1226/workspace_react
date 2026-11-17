import axios from "axios";

//댓글 목록 조회 API
export const getReplyListAPI = async (boardNum) => {
  try {
    const response = await axios.get(`http://localhost:8080/replies/${boardNum}`);
    return response;
  } catch (e) {
    console.log(e);
    console.log('댓글 목록 조회 API 호출 실패!');
  }
}

//댓글 등록 요청 API
export const regReplyAPI = async (data) => {
  try{
    const response = await axios.post('http://localhost:8080/replies', data);
    return response;
  }catch(e){
    console.log(e);
    console.log('댓글 등록 요청 API 실패');
  }

}
