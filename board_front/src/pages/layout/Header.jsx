import React from 'react'
import styles from './Header.module.css'

//ClassName={styles.} => {객체명.키} / style객체에 벨류값으로 디자인이 들어가있는 격! {자바스크립트 식으로 연산이 들어가기때문에 -하이픈이 아닌 _언더바로 명명해야한다!}
const Header = () => {
  return (
    <div className={styles.header_container}>
      <ul className={styles.menu}>
        <li>회원가입</li>
        <li>로그인</li>
      </ul>
      <h1 className={styles.title}>리액트 게시판</h1>
    </div>
  )
}

export default Header