import React, { createContext, useContext, useState } from 'react'

export const userinfo = createContext()

const Context = (props) => {
    const [data, setdata] = useState(
        JSON.parse(localStorage.getItem("data")) || []
    )

    return (
        <userinfo.Provider value={[data, setdata]}>
            {props.children}
        </userinfo.Provider>
    )
}

export default Context