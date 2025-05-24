import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice'
import { updateProfile } from "firebase/auth"
import { BG_IMG } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    let response;
    if (isSignInForm) {
      response = checkValidData(email.current.value, password.current.value)
      setErrorMessage(response);
    } else {
      response = checkValidData(fullName.current.value, email.current.value, password.current.value)
      setErrorMessage(response);
    }
    if (response) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value
          }).then(() => {
            setIsSignForm(!isSignInForm)
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            emailVerified: user.emailVerified
          }));
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        });
    }
  }

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  }

  return (
    <div>
      <Header isSignInForm={isSignInForm} />
      <div className="absolute">
        <img className="fixed w-full h-full inset-0 object-cover" src={BG_IMG} alt="logo" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80
        shadow-lg
        ">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input
            type="text"
            placeholder="FullName"
            ref={fullName}
            className="p-4 my-4 w-full bg-gray-800 rounded-md
              focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-gray-800 rounded-md
            focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          required
        />
        <input
          type={!showPassword ? "password" : "text"}
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-800 rounded-md
            focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
        <label className="flex items-center gap-3 m-2 cursor-pointer select-none text-gray-300 text-sm">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="w-5 h-5 rounded-sm accent-red-700 focus:ring-red-500 cursor-pointer transition-all duration-300"
          />
          Show Password
        </label>
        <p
          className={`text-red-600 font-bold text-lg py-2 transition-opacity duration-500
            ${errorMessage ? "opacity-100" : "opacity-0"}`}
        >
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg
            hover:bg-red-600 active:scale-95 transition transform duration-150 ease-in-out"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer hover:text-red-500 transition-colors duration-300 select-none"
          onClick={toggleSignInForm}
        >
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already an User? Sign In Now"}
        </p>
      </form>
    </div>
  )
}
export default Login;
