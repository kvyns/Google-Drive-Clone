import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import FilesView from './components/FilesView/FilesView';
import SideIcons from './components/SideIcons/SideIcons';
import { auth, provider } from './firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    if (!user) {
      signInWithPopup(auth, provider).then((result) => {
        setUser(result.user);
        console.log(result.user);
      }).catch((error) => {
        alert(error.message);
      });
    } else {
      signOut(auth).then(() => {
        setUser(null);
      }).catch((err) => alert(err.message));
    }
  };

  return (
    <div className="app">
      {user ? (
        <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className='app__login'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/768px-Google_Drive_icon_%282020%29.svg.png?20221103153031"
            alt="Google Drive"
          />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>
  );
}

export default App;
