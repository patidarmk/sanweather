import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

const Alerts: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Card className="w-full max-w-md text-center bg-white/60 backdrop-blur-lg border-white/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl">
            <AlertTriangle className="w-8 h-8 mr-2 text-yellow-500" />
            Weather Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Weather alerts feature will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;