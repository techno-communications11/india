import React from 'react';
import { motion } from 'framer-motion';

function BusinessHours() {
  return (
    <motion.div
      className="bg-gray-900/30 rounded-xl p-6 border border-gray-700/20 backdrop-blur-md shadow-lg shadow-pink-500/10"
      whileHover={{ 
        scale: 1.03,
        borderColor: '#f472b6',
        boxShadow: '0 0 20px rgba(244, 114, 182, 0.2)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <h5 className="font-bold text-white text-lg mb-4 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
        Business Hours
      </h5>
      <div className="space-y-3 text-sm text-gray-300">
        <motion.div
          className="flex flex-col justify-between bg-gray-800/50 rounded-lg p-3 border border-gray-700/30"
          whileHover={{ 
            x: 5,
            backgroundColor: 'rgba(55, 65, 81, 0.7)',
            borderColor: '#60a5fa',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <span className="text-gray-200 font-medium">24 X 7 Availability</span>
          
        </motion.div>
      </div>
    </motion.div>
  );
}

export default BusinessHours;