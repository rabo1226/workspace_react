import dayjs from 'dayjs'
import React from 'react'

const Reply = ({reply}) => {
  //댓글 하나를 표현하는 컴포넌트
  return (
    <div>
      <p>댓글 작성일 {dayjs(reply.createDate).format('YYYY-MM-DD HH:mm')}</p>
      <p>댓글 작성자 {reply.writer}</p>
      <p>댓글 내용 {reply.content}</p>
    </div>
  )
}

export default Reply