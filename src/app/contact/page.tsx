'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center text-white"
          >
            Contact Information
          </motion.h1>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Get in Touch</CardTitle>
              <CardDescription className="text-gray-300">
                Feel free to reach out to me through any of the following channels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-4"
              >
                <Mail className="h-5 w-5 text-white" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-300">amonk446@gmail.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <Phone className="h-5 w-5 text-white" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-300">+61(0) 405 644 770  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <MapPin className="h-5 w-5 text-white" />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-gray-300">Sydney, NSW</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <Linkedin className="h-5 w-5 text-white" />
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-gray-300">
                    <a href="https://www.linkedin.com/in/alex-monk-731b08171/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition-all duration-300">alex-monk-731b08171</a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <Github className="h-5 w-5 text-white" />
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-gray-300">
                    <a href="https://github.com/AlexanderTheGrape" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline transition-all duration-300">AlexanderTheGrape</a>
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ContactPage; 