import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Shield className="w-6 h-6" />
            <span className="font-bold">Falcon Professional Academy</span>
          </div>
          <div className="text-sm">
            © 2024 Falcon Professional Academy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}