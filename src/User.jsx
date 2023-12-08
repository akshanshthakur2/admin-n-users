import React, { useContext, useState } from 'react'
import { userinfo } from './Context'
import "./Nav.css"

const User = () => {
    const [data, setdata] = useContext(userinfo)
    const userData = data.filter(element => element.role == "User")
    return (
        <>
            <h2 style={{padding: "20px 30px"}}>Total Users: {userData.length}</h2>
            <div id="list">
                <ol>
                {userData.map((element, index) => (
                        <li key={index}>{element.name}</li>
                        ))}
                </ol>
            </div>
        </>
    )
}

export default User