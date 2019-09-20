import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";

const characterApi = "https://rickandmortyapi.com/api/character/";

export default function App() {
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    axios
      .get(characterApi)
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data.results);
        setCharacterData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (characterData) {
    return (
      <Router>
        <main>
          <Header />
          <nav>
            <h3>
              <Link to="/">Home </Link>
              <Link to="/welcome-page/">Welcome </Link>
              <Link to="/characters/">Characters </Link>
            </h3>
          </nav>
          <Route path='/welcome-page' component={WelcomePage} />
          <Route 
            path='/characters' 
            render={() => <CharacterList characterList={characterData} />}
          />
        </main>
      </Router>
    );
  } else {
    return (
      <div>
        <h1>Awaiting Data...</h1>
      </div>
    );
  }
}
