import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import { Header, Login, Message, Profile, SavedPost, Signup } from './Components';
import { Create, Explore, Home, Notification, Reels, Search } from './Pages';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseAuth/FirebaseAuth';


function App() {
  const [username, setusername] = useState("")
  const [userlogin, setUserlogin] = useState(false);
  const [postSave, setPostSave] = useState([])


useEffect(()=>{
  auth.onAuthStateChanged(( user) =>{
    if(user) {
      setusername(user.displayName)
      // setUserlogin(true)
    }else{
      setusername(" ")
    }
  })
}, []);

// saving the post to  your save page

const saveToPage = (post) =>{
  const Itempost = postSave.find(item=> item.id === post.id)

  if(!Itempost){
    setPostSave([...postSave, {...post, qauntity: 1}])
    console.log(post)
  }
}

  return (
    <div className='flex w-full'>
      <BrowserRouter > 
        
        <Routes >
          <Route path='/login' element={<Login setUserlogin={setUserlogin} />} />
          <Route path='/' element={userlogin ? <Home saveToPage={saveToPage}/> : <Navigate to="/login" />} />
          <Route path='/search' element={userlogin ? <Search /> : <Navigate to="/login" />} />
          <Route path='/explore' element={userlogin ? <Explore /> : <Navigate to="/login" />} />
          <Route path='/reels' element={userlogin ? <Reels /> : <Navigate to="/login" />} />
          <Route path='/message' element={userlogin ? <Message /> : <Navigate to="/login" />} />
          <Route path='/notifications' element={userlogin ? <Notification /> : <Navigate to="/login" />} />
          <Route path='/create' element={userlogin ? <Create /> : <Navigate to="/login" />} />
          <Route path='/profile' element={userlogin ? <Profile username={username} /> : <Navigate to="/login" />}  />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </BrowserRouter>
    </div>

  )
}

export default App
