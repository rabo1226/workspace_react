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
