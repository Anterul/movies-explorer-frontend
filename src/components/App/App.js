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
import SavedMovies from "../SavedMovies/SavedMovies";
// contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// react tools
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

const moviesPerPage = 3;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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

  // временный массив
  const movies = [
    {
      duration: "120",
      nameRU: "1 слово о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "1",
    },
    {
      duration: "100",
      nameRU: "2 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "2",
    },
    {
      duration: "110",
      nameRU: "3 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "3",
    },
    {
      duration: "110",
      nameRU: "4 слова о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "4",
    },
    {
      duration: "110",
      nameRU: "5 слов о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "5",
    },
    {
      duration: "110",
      nameRU: "6 слов о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "6",
    },
    {
      duration: "110",
      nameRU: "7 слов о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "7",
    },
    {
      duration: "110",
      nameRU: "8 слов о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "8",
    },
    {
      duration: "110",
      nameRU: "9 слов о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "9",
    },
    {
      duration: "110",
      nameRU: "10 слов о дизайне",
      image:
        "https://images.unsplash.com/photo-1682957093349-0e83f097e1c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      _id: "10",
    },
  ];

  // кнопка "Ещё"
  const [next, setNext] = useState(moviesPerPage);
  const handleMoreMovies = () => {
    setNext(next + moviesPerPage);
  };

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
                postsToRender={movies}
                onLoadMoreClick={handleMoreMovies}
                next={next}
              />
            }
          />

          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
                postsToRender={movies}
                onLoadMoreClick={handleMoreMovies}
                next={next}
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
