import { useState, useEffect } from "react";
import type {
  CurrentWeatherApiResponse,
  ForecastResponse,
  Error,
} from "@/types";

export const useWeatherFetch = () => {
  const [data, setData] = useState<CurrentWeatherApiResponse | null>(null);
  const [forecasts, setForecasts] = useState<ForecastResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>({
    hasErrors: false,
    message: "",
  });

  async function getCurrentWeather(city: string) {
    setIsLoading(true);
    setError({ hasErrors: false, message: "" });

    try {
      const [resp, forecastsResp] = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric&lang=es`,
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${import.meta.env.VITE_API_KEY}&cnt=7&units=metric&lang=es`,
        ),
      ]);

      if (!resp.ok || !forecastsResp.ok) {
        throw new Error(
          `Error ${resp.status}: We couldn't find the weather information of ${city}`,
        );
      }

      const json = await resp.json();
      const forecastJson = await forecastsResp.json();

      setData(json);
      setForecasts(forecastJson);
    } catch (error: unknown) {
      let errorMessage = "It has occured an error with the server!";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setError({
        hasErrors: true,
        message: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCurrentWeather("Medellín");
  }, []);

  return {
    data,
    isLoading,
    error,
    getCurrentWeather,
    forecasts,
  };
};
