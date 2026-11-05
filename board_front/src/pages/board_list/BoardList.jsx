
//게시글 목록을 나타내는 컴포넌트
const BoardList = ({boardList}) => {

  //전달받은 데이터가 있으면 그거를 map함수를 이용해서 반복해서 그린다!
  //map함수의 리턴값을 전달하면 그걸 그린다!
  //테이블 컬럼 : NO, 제목, 작성자, 작성일
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
          </tr>
        </thead>
        <tbody>
          {
            boardList.length === 0 ?
             <tr>
              <td colSpan={4}>등록된 게시글이 없습니다.</td>
             </tr>
            :
              boardList.map((board, i) => {
                return(
                  <tr key={i}>
                    <td>{boardList.length - i}</td>
                    <td>{board.title}</td>
                    <td>{board.writer}</td>
                    <td>{board.createDate}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
  </>
  )
}

export default BoardList