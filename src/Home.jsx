import React, { useContext, useState } from 'react'
import { userinfo } from './Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [data, setdata] = useContext(userinfo)
  const [name, setname] = useState("")
  const [role, setrole] = useState("Admin")

  localStorage.setItem("data", JSON.stringify(data))

  const added = () => toast("Data Added!")
  const invalid = () => toast("Enter Name!")

  const submitHandler = (e) => {
    e.preventDefault()
    if (name === ""){
      // toast("Input name!")
      console.log("enter input")
    }else{
      const copy = [...data]
      copy.push({ name, role })
      setdata(copy)
    }
  }
  return (
    <div>
      <div id="form">
        <form onSubmit={submitHandler}>
          <h1>Insert Users Info!</h1>
          <input onChange={(e) => setname(e.target.value)} value={name} type="text" placeholder='Name' />
          <select onChange={(e) => setrole(e.target.value)} value={role} name="role">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <button type='submit' onClick={name === '' ? invalid : added}>Submit</button>
          <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        </form>
      </div>
    </div>
  )
}

export default Home