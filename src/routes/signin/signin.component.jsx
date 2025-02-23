
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';


import Style from './signin.module.scss'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user)
    console.log(userDocRef)
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(
  //         response.user
  //       );
  //       console.log(userDocRef);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className={Style['sign-in-container']}>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign In with Google pop up
      </button>
    </div>
  )
}

export default SignIn