import React from 'react';
import LocationSearch from './LocationSearch';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const WeatherDashboard: React.FC = () => {
  return (
    <div>
      <LocationSearch />
      <CurrentWeather />
      <Forecast />
    </div>
  );
};

export default WeatherDashboard;