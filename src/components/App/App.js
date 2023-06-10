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
import Tooltip from "../Tooltip/Tooltip";
// contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// react tools
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// utils
import ProtectedRoute from "../../utils/ProtectedRoute";
import * as MainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";

const moviesPerPage = 3;

function App() {
  // хуки
  // запись loggedIn в localStorage, чтобы входить на любую страницу
  function checkIsLoggedInLocal() {
    if (JSON.parse(localStorage.getItem("isLoggedIn")) === "true") {
      return true;
    } else {
      return false;
    }
  }
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.isLoggedIn ? checkIsLoggedInLocal() : false
  );
  //
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
  function handleIsMenuPopupOpen() {
    setIsMenuPopupOpen(true);
  }
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isRequestCompleted, setIsRequestCompleted] = useState(false);
  function closeAllPopups() {
    setIsMenuPopupOpen(false);
    setIsTooltipOpen(false);
  }

  // хуки фильмов:
  const [savedBeatfilms, setSavedBeatfilms] = useState([]);
  const [filteredBeatfilms, setFilteredBeatfilms] = useState(
    JSON.parse(localStorage.getItem("filteredBeatfilms")) || []
  );

  const [beatfilmsSearchQuery, setBeatfilmsSearchQuery] = useState(
    localStorage.beatfilmsSearchQuery
      ? JSON.parse(localStorage.getItem("beatfilmsSearchQuery"))
      : ""
  );

  const [moviesRequestError, setMoviesRequestError] = useState(false);
  function handleMoviesRequestError() {
    setMoviesRequestError(false);
  }

  const [isSearchButtonPressed, setIsSearchButtonPressed] = useState(false);
  function handleSearchButton() {
    setIsSearchButtonPressed(true);
  }

  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [savedMoviesSearchQuery, setSavedMoviesSearchQuery] = useState("");
  const [savedMoviesShortState, setSavedMoviesShortState] = useState(false);
  function handleSavedMoviesShortState() {
    setSavedMoviesShortState(!savedMoviesShortState);
  }

  // кнопка "Ещё"
  const [next, setNext] = useState(moviesPerPage);
  const handleMoreMovies = () => {
    setNext(next + moviesPerPage);
  };
  function resetSetNext() {
    setNext(3);
  }

  // чекбокс с записью в localstorage

  function retutnIsShort() {
    if (JSON.parse(localStorage.getItem("shortState")) === "true") {
      return true;
    } else {
      return false;
    }
  }

  const [isShort, setIsShort] = useState(
    localStorage.shortState ? retutnIsShort() : false
  );

  function handleIsShort() {
    if (isShort) {
      setIsShort(false);
      localStorage.setItem("shortState", JSON.stringify("false"));
    } else {
      setIsShort(true);
      localStorage.setItem("shortState", JSON.stringify("true"));
    }
  }

  // прелоадер

  const [isMoviesLoading, setIsMoviesLoading] = useState(false);

  // функции

  const navigate = useNavigate();

  function handleRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setIsTooltipOpen(true);
        setIsRequestCompleted(false);
      });
  }

  function handleLogin(email, password) {
    MainApi.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          checkToken();
          navigate("/movies", { replace: true });
        }
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setIsTooltipOpen(true);
        setIsRequestCompleted(false);
      });
  }

  function signOut() {
    localStorage.clear();
    setSavedMovies([]);
    setSavedBeatfilms([]);
    setFilteredBeatfilms([]);
    setBeatfilmsSearchQuery("");
    setCurrentUser({
      name: "",
      email: "",
    });
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify("false"));
    navigate("/", { replace: true });
  }

  function checkToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify("true"));
          }
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
          setIsRequestCompleted(false);
          setIsTooltipOpen(true);
        });
    }
  }

  function handleMovieDelete(movie) {
    MainApi.deleteMovieCard(movie)
      .then(() => {
        setSavedMovies((moviesArr) =>
          moviesArr.filter((item) => item.movieId !== movie.movieId)
        );
        setFilteredSavedMovies((moviesArr) =>
          moviesArr.filter((item) => item.movieId !== movie.movieId)
        );
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setIsRequestCompleted(false);
        setIsTooltipOpen(true);
      });
  }

  function handleMovieLike(movie) {
    const isMovieLiked = savedMovies.some(
      (item) => Number(item.movieId) === movie.id
    );
    if (isMovieLiked) {
      const likedMovie = savedMovies.find(
        (item) => Number(item.movieId) === movie.id
      );
      MainApi.deleteMovieCard(likedMovie)
        .then(() => {
          setSavedMovies((moviesArr) =>
            moviesArr.filter((item) => Number(item.movieId) !== movie.id)
          );
          setFilteredSavedMovies((moviesArr) =>
            moviesArr.filter((item) => Number(item.movieId) !== movie.id)
          );
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
          setIsRequestCompleted(false);
          setIsTooltipOpen(true);
        });
    } else {
      MainApi.createMoveCard(movie)
        .then((createdMovie) => {
          setSavedMovies([createdMovie.movie, ...savedMovies]);
          setFilteredSavedMovies([createdMovie.movie, ...filteredSavedMovies]);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
          setIsRequestCompleted(false);
          setIsTooltipOpen(true);
        });
    }
  }

  // получение информации профиля и фильмов с моего сервера
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([MainApi.getUserInfo(), MainApi.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          setCurrentUser({
            name: userData.name,
            email: userData.email,
          });
          setSavedMovies(savedMovies);
        })
        .catch((error) => {
          console.log(`Ошибка: ${error}`);
          setIsRequestCompleted(false);
          setIsTooltipOpen(true);
        });
    }
  }, [isLoggedIn]);

  function handleChangeUserInfo(name, email) {
    MainApi.changeUserInfo(name, email)
      .then((userData) => {
        setCurrentUser({
          name: userData.name,
          email: userData.email,
        });
        setIsTooltipOpen(true);
        setIsRequestCompleted(true);
      })
      .catch((error) => {
        console.log(`Ошибка: ${error}`);
        setIsTooltipOpen(true);
        setIsRequestCompleted(false);
      });
  }

  // проверка - есть ли beatfilms в lacalStorage
  useEffect(() => {
    if (beatfilmsSearchQuery.length !== 0) {
      if ("savedBeatfilms" in localStorage) {
        if (savedBeatfilms.length === 0) {
          setSavedBeatfilms(JSON.parse(localStorage.getItem("savedBeatfilms")));
        }
        return;
      } else {
        setIsMoviesLoading(true);
        MoviesApi.getMovies()
          .then((beatfilms) => {
            localStorage.setItem("savedBeatfilms", JSON.stringify(beatfilms));
            if (savedBeatfilms.length === 0) {
              setSavedBeatfilms(beatfilms);
            }
          })
          .catch((error) => {
            console.log(`Ошибка: ${error}`);
            setMoviesRequestError(true);
            setIsRequestCompleted(false);
            setIsTooltipOpen(true);
          })
          .finally(() => {
            setIsMoviesLoading(false);
          });
      }
    }
  }, [beatfilmsSearchQuery]);

  // сброс нажатия
  useEffect(() => {
    setIsSearchButtonPressed(false);
  }, [beatfilmsSearchQuery, savedMoviesSearchQuery]);

  // функции поиска
  function executeSearchQuery(searchQuery) {
    setIsMoviesLoading(true);
    resetSetNext();
    const newFilteredBeatfilms = savedBeatfilms.filter((item) =>
      item.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBeatfilms(newFilteredBeatfilms);
    localStorage.setItem(
      "filteredBeatfilms",
      JSON.stringify(newFilteredBeatfilms)
    );
    setTimeout(() => setIsMoviesLoading(false), 200);
  }

  function findSavedMovies(searchQuery) {
    setIsMoviesLoading(true);
    const newFilteredSavedMovies = savedMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSavedMovies(newFilteredSavedMovies);
    setTimeout(() => setIsMoviesLoading(false), 200);
  }

  // редирект с логина и регистера, если прошла авторизация
  const location = useLocation();
  useEffect(() => {
    if (
      isLoggedIn &&
      (location.pathname === "/signup" || location.pathname === "/signin")
    ) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, location.pathname]);

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
                element={Movies}
                // хедер
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
                // лист
                savedBeatfilms={filteredBeatfilms}
                onMovieLike={handleMovieLike}
                onLoadMore={handleMoreMovies}
                next={next}
                moviesRequestError={moviesRequestError}
                // прелодер
                isPreloader={isMoviesLoading}
                // searchForm
                executeSearchQuery={executeSearchQuery}
                searchQuery={beatfilmsSearchQuery}
                setSearchQuery={setBeatfilmsSearchQuery}
                handleMoviesRequestError={handleMoviesRequestError}
                handleSearchButton={handleSearchButton}
                // чекбокс
                isShort={isShort}
                handleIsShort={handleIsShort}
                // проверка нажатия поиска
                isSearchButtonPressed={isSearchButtonPressed}
                // проверка на лайк
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                // хедер
                isLoggedIn={isLoggedIn}
                onMenuClick={handleIsMenuPopupOpen}
                // cardList
                savedMovies={
                  isSearchButtonPressed ? filteredSavedMovies : savedMovies
                }
                moviesRequestError={moviesRequestError}
                onMovieDelete={handleMovieDelete}
                isSearchButtonPressed={isSearchButtonPressed}
                // searchForm
                executeSearchQuery={findSavedMovies}
                searchQuery={savedMoviesSearchQuery}
                setSearchQuery={setSavedMoviesSearchQuery}
                handleMoviesRequestError={handleMoviesRequestError}
                handleSearchButton={handleSearchButton}
                // чекбокс
                isShort={savedMoviesShortState}
                handleIsShort={handleSavedMoviesShortState}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
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
        <Tooltip
          isOpen={isTooltipOpen}
          onClose={closeAllPopups}
          isRequestCompleted={isRequestCompleted}
        ></Tooltip>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
