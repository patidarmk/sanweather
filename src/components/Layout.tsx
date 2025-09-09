import React from 'react';
import Header from './Header';
import { MadeWithApplaa } from './made-with-applaa';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <MadeWithApplaa />
    </div>
  );
}