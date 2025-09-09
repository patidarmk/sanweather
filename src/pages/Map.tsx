import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map as MapIcon } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Card className="w-full max-w-md text-center bg-white/60 backdrop-blur-lg border-white/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl">
            <MapIcon className="w-8 h-8 mr-2 text-blue-500" />
            Weather Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">The interactive weather map is coming soon!</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Map;