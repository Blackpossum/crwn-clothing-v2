import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import Style from './signin.module.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user)
    console.log(userDocRef)
  }


  return (
    <div className={Style['sign-in-container']}>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google
      </button>
    </div>
  )
}

export default SignIn