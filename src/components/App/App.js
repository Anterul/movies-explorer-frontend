// import logo from './logo.svg';
import "./App.css";
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import MenuPopup from "../MenuPopup/MenuPopup";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// react tools
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleIsLoggedIn() {
    setIsLoggedIn(true);
  }

  const [currentUser, setCurrentUser] = useState({
    name: "Name", // временно Name, вернуть ""
    email: "aa@aa.ru",
  });

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  function handleIsMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
  }

  const movies = [
    {
      duration: "120",
      nameRU: "33 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "111",
    },
    {
      duration: "100",
      nameRU: "34 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "112",
    },
    {
      duration: "110",
      nameRU: "32 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "113",
    },
    {
      duration: "110",
      nameRU: "32 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "114",
    },
  ];

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  onMenuClick={handleIsMenuPopupOpen}
                />
                <Main />
                <Footer />
              </>
            }
          />

          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />

          <Route
            path="/movies"
            element={
              <Movies
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
                movies={movies}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
              />
            }
          />
          <Route path="*" element={<ResultNotFound />} />
        </Routes>
        <MenuPopup
          isOpen={isMenuPopupOpen}
          onClose={closeAllPopups}
        ></MenuPopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
