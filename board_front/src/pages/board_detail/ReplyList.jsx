import React, { useEffect, useState } from 'react'
import Reply from './Reply'
import { useParams } from 'react-router-dom'
import {getReplyListAPI } from '../../apis/reply_api';

const ReplyList = ({boardNum}) => {
  //조회한 댓글 목록 저장할 state 변수
  const [replyList, setReplyList] = useState([]);
  //마운트 시 댓글 목록 조회
  useEffect( ( )=> {
    getReplyList();
  }, []);

  //댓글 목록 조회 함수
  const getReplyList = async () => {
    const response = await getReplyListAPI(boardNum);
    console.log(`-----댓글-----`);
    console.log(response.data);
    setReplyList(response.data);
  }

  return (
    <div>
      {
        replyList.length === 0 ?
        <p>작성된 댓글이 없습니다.</p> 
        :
        replyList.map( (reply, i) => {
          return(
            <Reply reply={reply} key={i}/>
          )
        })
      }
    </div>
  )
}

export default ReplyList