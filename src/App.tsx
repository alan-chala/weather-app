import { useWeatherFetch } from "./hooks/useWeatherFetch";
import { WeatherDashboard } from "./components/WeatherDashboard";
import { NavBar } from "./components/Navbar";

function App() {
  const { data, isLoading, error, getCurrentWeather } = useWeatherFetch();
  return (
    <>
      <NavBar getCurrentWeather={getCurrentWeather} />
      <main className="py-10 px-6 max-w-5xl mx-auto min-h-[calc(100dvh-22.5rem)]">
        <WeatherDashboard data={data} isLoading={isLoading} error={error} />
      </main>
    </>
  );
}

export default App;
