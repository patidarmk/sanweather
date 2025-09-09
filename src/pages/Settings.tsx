import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <Card className="w-full max-w-md text-center bg-white/60 backdrop-blur-lg border-white/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-2xl">
            <SettingsIcon className="w-8 h-8 mr-2 text-gray-500" />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Application settings will be configured here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;