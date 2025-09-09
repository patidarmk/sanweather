import { Link } from '@tanstack/react-router';
import { CloudSun } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Map', path: '/map' },
    { name: 'Alerts', path: '/alerts' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <CloudSun className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              WeatherWise
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                activeProps={{ className: 'text-foreground font-semibold' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}