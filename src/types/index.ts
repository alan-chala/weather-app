export type NavProps = {
  getCurrentWeather: (city: string) => void;
};

export type Error = {
  hasErrors: boolean;
  message: string;
};

export type WeatherDashboardProps = {
  data: null;
  isLoading: boolean;
  error: Error;
};
