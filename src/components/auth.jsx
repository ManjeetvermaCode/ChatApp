import {signInWithPopup, } from 'firebase/auth'
import {provider,auth} from '../firebase-config'
export default function Auth(){
    
    const SignInWGoogle=async()=>{
        const result=await signInWithPopup(auth,provider)
    }
    
    return (
        <>
        <h1>Click to sign in</h1>
        <button onClick={SignInWGoogle}>Click</button>
        </>
    )
}