'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Stars Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/stars-background.jpg"
          alt="Stars background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-center mb-6"
        >
          alexmonk.au
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-center mb-8 max-w-2xl"
        >
          welcome to my portfolio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4"
        >
          <Link href="/projects">
            <Button 
              size="lg" 
              variant="default"
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-2 hover:border-white"
            >
              View Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 