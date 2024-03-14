import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../../firebase';
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function OAuth() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleGoogleClick=async()=>{
        try {
            const provider=new GoogleAuthProvider()
            const auth=getAuth(app);

            const result= await signInWithPopup(auth,provider)

            // console.log(result)
            const res=await fetch('/api/auth/google',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    name:result.user.displayName,
                    email:result.user.email,
                    photo:result.user.photoURL
                })
            })

            const data =await res.json();
            dispatch(signInSuccess(data));
            navigate("/");
        } catch (error) {
            console.log("couldnt sign in with google ",error)
            
        }

    }
  return (
      <button
      type="button"
      onClick={handleGoogleClick}
        
          className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
         Continue With Google
        </button>
    
  )
}

export default OAuth
