import React, { useContext, useState } from 'react'
import { userinfo } from './Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [data, setdata] = useContext(userinfo)
  const [name, setname] = useState("")
  const [role, setrole] = useState("")

  localStorage.setItem("data", JSON.stringify(data))

  const notify = () => toast("Data Added!")

  const submitHandler = (e) => {
    e.preventDefault()
    const copy = [...data]
    copy.push({ name, role })
    setdata(copy)
  }
  return (
    <div>
      <div id="form">


        <form onSubmit={submitHandler}>
          <h1>Insert Users Info!</h1>
          <input onChange={(e) => setname(e.target.value)} type="text" placeholder='Name' />
          <input onChange={(e) => setrole(e.target.value)} type="text" placeholder='Role' />
          <button type='submit' onClick={notify}>Submit</button>
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