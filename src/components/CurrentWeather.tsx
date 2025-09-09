import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WeatherIcon from './WeatherIcon';
import { weatherData } from '@/data/weather';
import { Wind, Droplets, Sunrise, Sunset, Thermometer } from 'lucide-react';

const CurrentWeather: React.FC = () => {
  const { current } = weatherData;

  const details = [
    { icon: Thermometer, label: 'Feels Like', value: `${current.feelsLike}°` },
    { icon: Droplets, label: 'Humidity', value: `${current.humidity}%` },
    { icon: Wind, label: 'Wind', value: `${current.windSpeed} mph` },
    { icon: Sunrise, label: 'Sunrise', value: current.sunrise },
    { icon: Sunset, label: 'Sunset', value: current.sunset },
  ];

  return (
    <Card className="bg-white/60 backdrop-blur-lg border-white/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Current Weather</CardTitle>
        <p className="text-gray-500">{current.location}</p>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center">
            <WeatherIcon iconName={current.icon} className="w-24 h-24 text-blue-500" />
            <p className="text-7xl font-bold text-gray-800 ml-4">{current.temperature}°</p>
          </div>
          <p className="text-2xl text-gray-600 mt-2">{current.condition}</p>
          <div className="flex space-x-4 mt-1">
            <p className="text-gray-500">H: {current.high}°</p>
            <p className="text-gray-500">L: {current.low}°</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-center space-x-2 p-2 bg-black/5 rounded-lg">
              <detail.icon className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-gray-500">{detail.label}</p>
                <p className="font-semibold text-gray-700">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;