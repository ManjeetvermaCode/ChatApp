import {Cookies} from 'react-cookie'
const cookies=new Cookies()

import {signInWithPopup, } from 'firebase/auth'
import {provider,auth} from '../firebase-config'
export default function Auth(){
    
    const SignInWGoogle=async()=>{
        try {
            const result=await signInWithPopup(auth,provider)
            console.log(result)
            cookies.set('user-token',result.user.refreshToken)//The refreshToken is used to obtain a new access token when the current one expires, without requiring the user to reauthenticate.
            
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
        <h1>Click to sign in</h1>
        <button onClick={SignInWGoogle}>Click</button>
        </>
    )
}