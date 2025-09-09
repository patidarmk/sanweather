import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WeatherIcon from './WeatherIcon';
import { weatherData } from '@/data/weather';

const Forecast: React.FC = () => {
  const { forecast } = weatherData;

  return (
    <Card className="bg-white/60 backdrop-blur-lg border-white/20 shadow-lg mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-black/5 rounded-lg text-center">
              <p className="font-bold text-gray-700">{day.day}</p>
              <p className="text-sm text-gray-500 mb-2">{day.date}</p>
              <WeatherIcon iconName={day.icon} className="w-12 h-12 text-blue-500 my-2" />
              <p className="text-lg font-semibold text-gray-800">{day.high}°</p>
              <p className="text-sm text-gray-500">{day.low}°</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Forecast;