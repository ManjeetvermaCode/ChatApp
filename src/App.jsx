import { useState,useRef } from 'react'
import './App.css'
import Auth from './components/auth'
import Chat from './components/chat'
import {Cookies} from 'react-cookie'
const cookies=new Cookies()

function App() {
const [isAuth,setisAuth]=useState(cookies.get('user-token'))
const [room,setroom]=useState(null)
const inputRef=useRef(null)

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
  </>
)
}

export default App
