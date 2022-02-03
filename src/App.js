import "./style.css";
import SearchForm from "./search";
import Heading from "./heading";
import WeatherForecast from "./WeatherForecast";
function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <Heading />
        <SearchForm />
        <br />
        <WeatherForecast />
        <div></div>
        <hr />
        <footer>
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/Tem-Tech/Shecodes-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leanne Oyeyemi
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
