'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800/90 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-white">
            alexmonk.au
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className={isActive('/') ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}
              >
                Home
              </Button>
            </Link>
            <Link href="/projects">
              <Button 
                variant={isActive('/projects') ? 'default' : 'ghost'}
                className={isActive('/projects') ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}
              >
                Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant={isActive('/contact') ? 'default' : 'ghost'}
                className={isActive('/contact') ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'text-white hover:bg-gray-700 hover:text-white'}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 