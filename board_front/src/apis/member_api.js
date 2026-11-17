import axios from "axios";


//회원가입 요청 API
export const joinAPI = async (data) => {
  try {
    const response = await axios.post('http://localhost:8080/members', data);
    return response;
  } catch (e) {
    console.log('회원가입 요청 api 실패!');
    console.log(e);
  }
}