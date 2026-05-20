import { useState, useEffect } from "react";

export const useWeatherFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<{ hasErrors: boolean; message: string }>({
    hasErrors: false,
    message: "",
  });

  async function getCurrentWeather(city: string) {
    setIsLoading(true);
    setError({ hasErrors: false, message: "" });

    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e0c292d84630d0bfd69e535fa17ae7d`,
      );

      if (!resp.ok) {
        throw new Error(
          `Error ${resp.status}: No se pudo obtener el clima de ${city}`,
        );
      }

      const json = await resp.json();
      setData(json);
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
  };
};
