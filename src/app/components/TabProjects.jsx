import React from 'react';
import { motion } from 'framer-motion';

const TabProjects = ({ name, active, selectTab }) => {
  const buttonClasses = active ? 'text-white border-primary-500' : 'text-[#adb7be] border-slate-500';
  return (
    <motion.button whileTap={{ scale: 0.8 }} onClick={selectTab}>
      <p className={`mr-2 my-2 px-3 py-1 border-2 rounded-full font-semibold hover:text-white hover:border-white ${buttonClasses}`}>{name}</p>
    </motion.button>
  );
};

export default TabProjects;
