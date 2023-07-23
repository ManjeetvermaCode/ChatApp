import { serverTimestamp, addDoc, collection, query, where, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import {auth,db} from '../firebase-config'

export default function Chat({room}){
const messageRef=collection(db,'messages')//used for retrieving collection
const [msg,setmsg]=useState("")
const [allmsgs,setallmsgs]=useState([])

useEffect(()=>{
    const queryMessages=query(messageRef,where("room", "==", room));
    const unsuscribe=onSnapshot(queryMessages,(snapshot)=>{
        let messages=[];
        snapshot.forEach((doc)=>{
            messages.push({...doc.data(),id:doc.id})
        })
        setallmsgs(messages)
    })
    return ()=>unsuscribe()
},[])

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
        <div> {allmsgs.map((msg)=><h1 key={crypto.randomUUID()}>{msg.text}</h1>)}</div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="enter message" onChange={(e)=>{setmsg(e.target.value)}} value={msg} />
                <button type="submit">Submit</button>
            </form>
            
        </>
    )
}