import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {

  return (
    <>
      <div id="main">
        <Link style={{textDecoration: "none", color: "#fff"}} to="/">Home</Link>
        <Link style={{textDecoration: "none", color: "#fff"}}  to="/admin">Admin</Link>
        <Link style={{textDecoration: "none", color: "#fff"}} to="/user">User</Link>
      </div>
    </>
  )
}

export default Nav