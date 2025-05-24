import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { LOGO, USER_LOGO, LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showLang = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, emailVerified } = user;
        dispatch(addUser({ uid, email, displayName, emailVerified }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute px-8 py-3 bg-gradient-to-b from-black to-transparent z-10 w-full flex flex-col md:flex-row md:justify-between items-center">
      <img
        className="w-44 mx-auto md:mx-0 cursor-pointer hover:scale-105 transition-transform duration-300"
        src={LOGO}
        alt="logo"
        onClick={() => navigate("/")}
      />
      {user && (
        <div className="flex items-center p-2 -mt-5 md:mt-2 justify-between gap-4 md:gap-6">
          {showLang && (
            <select
              className="p-2 bg-gray-900 text-white rounded-lg m-2 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
              onChange={handleLanguageChange}
              value={showLang}
            >
              {LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-5 bg-purple-800 text-white rounded-lg shadow-md hover:bg-purple-700 active:scale-95 transition-all duration-200"
            onClick={handleGptSearchClick}
            aria-label="Toggle GPT Search"
          >
            {showLang ? "Home" : "GPT Search"}
          </button>
          <img
            alt="user-icon"
            className="hidden md:block w-12 h-12 mx-2 rounded-full border-2 border-purple-700"
            src={USER_LOGO}
          />
          <button
            className="font-bold text-white hover:text-red-500 transition-colors duration-300"
            onClick={handleSignOut}
            aria-label="Sign Out"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
