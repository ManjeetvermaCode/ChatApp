import { serverTimestamp, addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import {auth,db} from '../firebase-config'

export default function Chat({room}){
const messageRef=collection(db,'messages')//used for retrieving collection
const [msg,setmsg]=useState("")

const handlesubmit=async(e)=>{
    e.preventDefault()
    if(msg==='')return;

    await addDoc(messageRef,{
        text:msg,
        createdOn:serverTimestamp(),
        user:auth.currentUser.displayName,
        room,
    })//used for storing document into collection
    console.log('submitted')
    setmsg("")
}

    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="enter message" onChange={(e)=>{setmsg(e.target.value)}} value={msg} />
                <button type="submit">Submit</button>
            </form>
            
        </>
    )
}