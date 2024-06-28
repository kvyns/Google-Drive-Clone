import Header from "./components/Header/Header"
import { useState } from "react"
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  const [user, setUser] = useState({
    displayName : "kvyns",
    email : "kd.kavyansh2003@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://images.pexels.com/photos/21345905/pexels-photo-21345905/free-photo-of-elegant-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  })
  return (
    <>
      <Header userPhoto={user.photoURL}/>
      <Sidebar/>
    </>
  )
}

export default App
