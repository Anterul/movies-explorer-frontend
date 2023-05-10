// import logo from './logo.svg';
import "./App.css";
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import ResultNotFound from "../ResultNotFound/ResultNotFound";
import MenuPopup from "../MenuPopup/MenuPopup";
// contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// react tools
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ! вернуть false после разработки
  function handleIsLoggedIn() {
    setIsLoggedIn(true);
  }

  const [currentUser, setCurrentUser] = useState({
    userName: "",
    userEmail: "",
    _id: "",
  });

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  function handleIsMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }
  function closeAllPopups() {
    setIsMenuPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <Header
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
              />
            }
          />
          <Route path="/" element={<Footer />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
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
