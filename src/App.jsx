import Header from "./components/Header/Header"
import { useState } from "react"
import './App.css'
import Sidebar from "./components/Sidebar/Sidebar"
import FilesView from "./components/FilesView/FilesView"
function App() {
  const [user, setUser] = useState({
    displayName : "kvyns",
    email : "kd.kavyansh2003@gmail.com",
    emailVerified: true,
    phoneNumber: null,
    photoURL: "https://images.pexels.com/photos/21345905/pexels-photo-21345905/free-photo-of-elegant-woman-leaning-on-chair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  })
  return (
    <div className="App">
        <Header userPhoto={user.photoURL}/>
      <div className="app__main">
      <Sidebar/>
      <FilesView/>
      </div>
      
    </div>
  )
}

export default App
