import { serverTimestamp, addDoc, collection, query, where,orderBy, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import {auth,db} from '../firebase-config'

export default function Chat({room}){
const messageRef=collection(db,'messages')//used for retrieving collection
const [msg,setmsg]=useState("")
const [allmsgs,setallmsgs]=useState([])

useEffect(()=>{
    const queryMessages=query(messageRef,where("room", "==", room),orderBy("createdOn"));//retrieves data wher 'room' fild is equal to room prop. To add composite queries we must make it for firebase build query.
    const unsuscribe=onSnapshot(queryMessages,(snapshot)=>{//The onSnapshot function listens for any changes in the Firestore data that match the query and triggers the provided callback function whenever there is a change.
        let messages=[];
        snapshot.forEach((doc)=>{
            messages.push({...doc.data(),id:doc.id})
        })
        setallmsgs(messages)//function, which will update the component's state and trigger a re-render with the updated messages whenever new messages are added to the Firestore collection or the component is mounted.
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
        <div> {allmsgs.map((msg)=><h1 key={crypto.randomUUID()}>{msg.user}-{msg.text}</h1>)}</div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="enter message" onChange={(e)=>{setmsg(e.target.value)}} value={msg} />
                <button type="submit">Submit</button>
            </form>
            
        </>
    )
}