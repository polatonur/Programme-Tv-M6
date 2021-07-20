import "./App.css";
import logo from "./assets/img/LogoM6.png";
import Programme from "./components/Programme";

function App() {
  return (
    <div>
      <header>
        <img src={logo} alt="M6 logo" />
      </header>
      <Programme />
      <footer>
        {" "}
        <p>
          Made with <span>React</span> at{" "}
          <a href="https://www.lereacteur.io/">Le Reacteur</a> By{" "}
          <a href="https://github.com/polatonur">Onur</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
