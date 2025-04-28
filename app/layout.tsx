import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Jayden Mae Foss',
  description: 'A beautiful art gallery built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="p-6 bg-black-700 text-white text-3xl font-bold shadow-lg">
          Artwork Portfolio
        </header>
        <main className="flex-1 p-8 bg-white rounded-t-3xl shadow-xl">
          {children}
        </main>
        <footer className="p-4 bg-black-600 text-white text-center font-semibold">
          © 2025 Jayden Mae Foss
        </footer>
      </body>
    </html>
  );
}
