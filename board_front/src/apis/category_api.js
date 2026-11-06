import axios from "axios";

//카테고리 목록 조회 함수
export const getCategoryListAPI = async () => {
  try{
    const response = await axios.get('http://localhost:8080/categorys');
    return response.data;
  }catch(e){
    console.log(e);
    console.log('게시글 카테고리 목록 조회 실패!');
  }
}

//게시글 등록 함수
export const regBoardAPI = async (data) => {
  try{
   const response = await axios.post('http://localhost:8080/boards', data);
   return response;
  }catch(e){
    console.log(e);
    console.log('게시글 등록 API 호출 실패!');
  }
}
