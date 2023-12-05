import React, { useContext } from 'react'
import { userinfo } from './Context'
import "./Nav.css"


const Admin = () => {
    const [data, setdata] = useContext(userinfo)
    const adminData = data.filter(element => element.role == "Admin")
    return (
        <>
            <h2 style={{padding: "20px 30px"}}>Total Admins: {adminData.length}</h2>
            <div id="list">
                {adminData.map((element, index) => (
                    <ol>
                        <li key={index}>{element.name}</li>
                    </ol>
                ))}
            </div>
        </>
    )

}

export default Admin