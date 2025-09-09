import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const LocationSearch: React.FC = () => {
  return (
    <div className="mb-8">
      <form className="flex w-full max-w-lg mx-auto items-center space-x-2">
        <Input
          type="text"
          placeholder="Search for a city..."
          className="flex-grow bg-white/80 focus:bg-white border-gray-300"
        />
        <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
    </div>
  );
};

export default LocationSearch;