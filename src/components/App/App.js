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
import { Routes, Route, useNavigate } from "react-router-dom";
// utils
import ProtectedRoute from "../../utils/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";

const moviesPerPage = 3;

function App() {
  // хуки
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleIsLoggedIn() {
    setIsLoggedIn(true);
  }

  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  function handleIsMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }

  function closeAllPopups() {
    setIsMenuPopupOpen(false);
  }

  const [isSignUp, setIsSignUp] = useState(false);
  function handleSignUpStatus() {
    setIsSignUp(true);
  }

  const [isSignIn, setIsSignIn] = useState(false);
  function handleSignInStatus() {
    setIsSignIn(true);
  }

  const [movies, setMovies] = useState([]);
  function resetMovies() {
    setMovies([]);
  }

  // кнопка "Ещё"
  const [next, setNext] = useState(moviesPerPage);
  const handleMoreMovies = () => {
    setNext(next + moviesPerPage);
  };
  function resetSetNext() {
    setNext(3);
  }

  const [searchButtonWasPressed, setSearchButtonWasPressed] = useState(false);
  function handleSearchButtonWasPressed() {
    setSearchButtonWasPressed(true);
  }

  const [showMoreButton, setShowMoreButton] = useState(true);
  function handleShowMoreButton() {
    setShowMoreButton(false);
  }

  // функции
  const navigate = useNavigate();

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        handleSignUpStatus();
        navigate("/signin", { replace: true });
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setIsSignUp(false);
      });
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((data) => {
        if (data.token) {
          handleSignInStatus();
          handleIsLoggedIn();
          localStorage.setItem("jwt", data.token);
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setIsSignIn(false);
      });
  }

  function signOut() {
    localStorage.removeItem("jwt");
    setCurrentUser({
      name: "",
      email: "",
    });
    navigate("/", { replace: true });
    setIsLoggedIn(false);
  }

  function checkToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            navigate("/", { replace: true });
          }
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
        });
    }
  }

  useEffect(() => {
    MainApi.getUserInfo()
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });

    checkToken();
  }, [isLoggedIn]);

  function handleChangeUserInfo(name, email) {
    MainApi.changeUserInfo(name, email)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  }

  /* // без local storage
    const filteredItems = result.filter(
          (item) =>
            item.nameRU
              .toLocaleLowerCase()
              .includes(someQuery.toLocaleLowerCase()) ||
            item.nameEN
              .toLocaleLowerCase()
              .includes(someQuery.toLocaleLowerCase())
    );
  */

  function executeSearchQuery(someQuery) {}
  /*
  const localFilteredItems = localStorage.getItem("localFilteredItems");
  console.log(JSON.parse(localFilteredItems));*/

  useEffect(() => {
    MoviesApi.getMovies()
      .then((movies) => {
        window.localStorage.setItem(
          "localFilteredItems",
          JSON.stringify(movies)
        );
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
      });
  });

  const test = JSON.parse(localStorage.getItem("localFilteredItems"));
  setMovies(test);

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
          <Route
            path="/signup"
            element={<Register onSignUp={handleRegister} />}
          />
          <Route path="/signin" element={<Login onSignIn={handleLogin} />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                exact
                element={Movies}
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
                postsToRender={movies}
                resetSetNext={resetSetNext}
                onLoadMoreClick={handleMoreMovies}
                next={next}
                executeSearchQuery={executeSearchQuery}
                onSearchButtonClick={handleSearchButtonWasPressed}
                searchButtonWasPressed={searchButtonWasPressed}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                exact
                element={SavedMovies}
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
              <ProtectedRoute
                exact
                element={Profile}
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
                onExitButtonClick={signOut}
                onEditButtonClick={handleChangeUserInfo}
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
