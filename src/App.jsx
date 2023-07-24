import { useState,useRef } from 'react'
import './App.css'
import Auth from './components/auth'
import Chat from './components/chat'

import {Cookies} from 'react-cookie'
const cookies=new Cookies()

import {signOut} from 'firebase/auth'
import {auth} from './firebase-config'

function App() {
const [isAuth,setisAuth]=useState(cookies.get('user-token'))
const [room,setroom]=useState(null)
const inputRef=useRef(null)

const sign_out=async()=>{
  await signOut(auth)
  cookies.remove('user-token')
  setisAuth(false)
  setroom(false)
}

if(!isAuth){//if user is not registered or signed in, render authentication page
  return (
    <>
      <Auth setauth={setisAuth}/>
    </>
  )
}
return (//else
  <>
    {
      room?<Chat room={room}/>:(
        <div>
        <label htmlFor="roomname">Enter room name</label>
        <input type="text" id='roomname' ref={inputRef}/>
        <button onClick={()=>{setroom(inputRef.current.value)}}>Enter Chat room</button>
      </div>
      )
    }
    <div className="sign-out">
      <button onClick={sign_out}>Log out</button>
    </div>
  </>
)
}

export default App
