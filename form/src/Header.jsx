import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h2>Hello React</h2>
      <ul className='menu'>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
        <li>
            <Link to={'/join'}>Join</Link>
          </li>
      </ul>
    </>
  )
}

export default Header