import { useWeatherFetch } from "./hooks/useWeatherFetch";
import { NavBar } from "./components/Navbar";

function App() {
  const { getCurrentWeather } = useWeatherFetch();

  return (
    <>
      <NavBar getCurrentWeather={getCurrentWeather} />
    </>
  );
}

export default App;
