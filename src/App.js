import React from "react";
import { 
  BrowserRouter as router,
  Route,
  Link,
} from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';

const characterApi = 'https://rickandmortyapi.com/api/character/';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
    </main>
  );
}
