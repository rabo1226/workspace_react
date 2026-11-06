import dayjs from 'dayjs'
import styles from './BoardList.module.css'
import { useNavigate } from 'react-router-dom'
//css 임포트 직접 해야함! 

//게시글 목록을 나타내는 컴포넌트
const BoardList = ({boardList}) => {

  //전달받은 데이터가 있으면 그거를 map함수를 이용해서 반복해서 그린다!
  //map함수의 리턴값을 전달하면 그걸 그린다!
  //테이블 컬럼 : NO, 제목, 작성자, 작성일

  //게시글을 클릭 했을 때 이동함수
  const nav = useNavigate();
  
  return (
    <div className={styles.table_div}>
      <table className={styles.list_table}>
        <colgroup>
        <col width='5%'/>
        <col width='*'/>
        <col width='20%'/>
        <col width='25%'/>
        </colgroup>
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
                  <tr key={i} onClick={ e => nav('/datail') }>
                    <td>{boardList.length - i}</td>
                    <td>{board.title}</td>
                    <td>{board.writer}</td>
                    <td>{ dayjs(board.createDate).format('YYYY년 MM월 DD일 HH시 mm분') }</td>
                  </tr>
                )
              })
          }
        </tbody>
      </table>
  </div>
  )
}

export default BoardList