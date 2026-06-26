import { useWeatherFetch } from "./hooks/useWeatherFetch";
import { WeatherDashboard } from "./components/WeatherDashboard";
import { NavBar } from "./components/Navbar";

function App() {
  const { data, isLoading, error, getCurrentWeather, forecasts } =
    useWeatherFetch();
  return (
    <>
      <NavBar getCurrentWeather={getCurrentWeather} />
      <main className="py-10 px-6 max-w-5xl mx-auto space-y-10">
        <WeatherDashboard
          data={data}
          isLoading={isLoading}
          error={error}
          forecasts={forecasts}
        />
      </main>
    </>
  );
}

export default App;
