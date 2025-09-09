import React from 'react';
import { weatherIcons } from '@/data/weather';
import { Sun } from 'lucide-react';

interface WeatherIconProps {
  iconName: string;
  className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconName, className }) => {
  const IconComponent = weatherIcons[iconName] || Sun;
  return <IconComponent className={className} />;
};

export default WeatherIcon;