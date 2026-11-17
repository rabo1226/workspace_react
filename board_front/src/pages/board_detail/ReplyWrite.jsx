import React, { useState } from 'react'
import styles from './ReplyWrite.module.css'
import { regReplyAPI } from '../../apis/reply_api';
import { useNavigate } from 'react-router-dom';

const ReplyWrite = ({boardNum, setReload}) => {
  console.log('ReplyWrite 컴포먼트 랜더링');
  //페이지 이동 nav => 동일한 페이지 이동은 지원하지 않는다!!!!!!
  const nav = useNavigate();
  //리랜더링 : state 변경함수가 실행되면 state 변경함수가 선언된 컴포넌트가 리랜더링!

  //로그인 여부 판단 state 변수
  const [isLogin, setIsLogin] = useState(true);

  //입력한 댓글 내용을 저장할 state 변수
  //[] 일 때는 저장할 input데이터가 다수일 떄! 지금은 단수니까 빈문자열 하나면 충분!
  const [replyContent, setReplyContent] = useState(''); 

  //댓글 등록 버튼 클릭 시 실행 함수
  const regReply = async () => {
    const replyData = {
      replyContent : replyContent,
      boardNum : boardNum,
      replyWriter : '임시'
    };
    const response = await regReplyAPI(replyData);
    // nav(`/datail/${boardNum}`);  반응 XXX = 사용할 수 없다!!!!
    setReplyContent('');
    setReload({});
  }
  //state변경함수는 비동기방식이며, 모든 코드가 다 실행된 후 마지막에 일괄 처리
  //그리고 리랜더링은 최종 한 번만 실행!
  //변경함수와 axios를 사용하면 axios먼저 실행되고 변경함수가 실행되기 때문에 값 변경전 state함수를 가져간다! 그래서 이 순서를 잘 생각하고 설계해야한다!

  //console.log('댓글내용', replyContent);

  return (
    <div className={styles.reply_write_container}>
      {/* 로그인 여부에 따라 다르게 표현*/}
      {/* 로그인했니 ? 그림 : null; 삼항연산자
          삼항연산자 말고 단락평가로 사용! 로그인했니 && 그림; t & t일 때만 / f & t면 노실행*/}
      {
        isLogin &&
        <div className={styles.input_div}>
          <input 
            type="text"
            value={replyContent}
            onChange={ e => {
              setReplyContent(e.target.value)
            }} 
          />
          <button 
            type='button'
            onClick={ e => regReply()}
          >댓글 등록</button>
        </div>
      }
    </div>
  )
}

export default ReplyWrite