// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// contexts
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { LoggedInContext } from "../../contexts/LoggedInContext";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleIsLoggedIn() { setIsLoggedIn(true) }

  const [currentUser, setCurrentUser] = useState({
    userName: "",
    userEmail: "",
    _id: "",
  })

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <LoggedInContext.Provider
          value={{ state: isLoggedIn, handleIsLoggedIn: handleIsLoggedIn }}
        >

          <div className="app">
            <Header/>
            <Footer/>
          </div>

        </LoggedInContext.Provider>
      </CurrentUserContext.Provider>
  );
}

export default App;
