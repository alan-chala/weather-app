import { useWeatherFetch } from "./hooks/useWeatherFetch";
import { WeatherDashboard } from "./components/WeatherDashboard";
import { NavBar } from "./components/Navbar";

function App() {
  const { data, isLoading, error, getCurrentWeather } = useWeatherFetch();
  return (
    <>
      <NavBar getCurrentWeather={getCurrentWeather} />
      <WeatherDashboard data={data} isLoading={isLoading} error={error} />
    </>
  );
}

export default App;
