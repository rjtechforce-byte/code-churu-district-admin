import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SiSimplelogin } from "react-icons/si";
 
import {
  FaBars,
  FaTimes,
 FaRegStar,
 FaAward,
  FaHome,
  FaFolderOpen,
  FaTools,
  FaEnvelope,
 FaBook,
 FaCode
  
} from "react-icons/fa";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <div className="border-b bg-black/40 backdrop-blur-md border-green-600/30">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">

          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 select-none"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >
         
            <Link to="/codechuru" className="flex items-center text-xl gap-2 text-white transition hover:text-gray-200"> Code <span className="text-yellow-500">चूरू</span>
              </Link>
          
         </motion.div>
         

          {/* Desktop */}
          <ul className="items-center hidden gap-6 font-medium text-white lg:flex">
            <motion.li whileHover={{ y: -3 }}>
              <Link to="/" className="flex items-center gap-2 transition hover:text-green-300">
                <FaHome className="text-green-500"  /> Home
              </Link>
            </motion.li>

            <motion.li whileHover={{ y: -3 }}>
              <Link to="/codechuru" className="flex items-center gap-2 text-white transition hover:text-gray-200">
                <FaCode  className="text-green-500"  /> Code चूरू
              </Link>
            </motion.li>

            <motion.li whileHover={{ y: -3 }}>
              <Link to="/devloper" className="flex items-center gap-2 transition hover:text-green-300">
                <FaTools  className="text-green-500" /> Devlopers
              </Link>
            </motion.li>

            
            
            <motion.li whileHover={{ y: -3 }}>
              <Link to="/contact" className="flex items-center gap-2 transition hover:text-green-300">
                <FaEnvelope   className="text-green-500" /> Contact
              </Link>
            </motion.li>

          
          </ul>

          {/* Mobile toggle button */}
          <button
            className="p-2 rounded-md lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FaTimes className="text-2xl text-green-300" />
            ) : (
              <FaBars className="text-2xl text-green-300" />
            )}
          </button>
        </div>
      </div>



      {/* Mobile slide menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed top-0 right-0 w-3/4 h-full max-w-sm border-l border-green-600 shadow-2xl bg-[#0f1715]/90 backdrop-blur-md/30 lg:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="px-6 pt-6">

              {/* header inside mobile */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <h2 className="flex items-center gap-2 text-lg font-bold text-white"><FaCode />  Code <span className="text-yellow-500">चूरू</span></h2>
                  </div>
                </div>
                <button onClick={() => setOpen(false)}>
                  <FaTimes className="text-xl text-green-300" />
                </button>
              </div>

              {/* links  */}
              <nav className="flex flex-col gap-6 mt-8 text-lg font-medium text-green-100">

                <Link
                  to="/"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 transition hover:translate-x-2 hover:text-green-300"
                >
                  <span className="p-2 rounded-md bg-green-600/10"><FaHome className="text-green-300" /></span>
                  Home
                </Link>

                <Link
                  to="/codechuru"
                  onClick={() => setOpen(false)}
                  className="flex items-center hover:translate-x-2 gap-2 transition hover:text-green-300"
                >
                  <span className="p-2 rounded-md bg-green-600/10"><FaCode className="text-green-300" /></span>
                 Code चूरू
                </Link>

                <Link
                  to="/devloper"
                  onClick={() => setOpen(false)}
                 className="flex items-center hover:translate-x-2 gap-4 transition hover:text-green-300"
                >
                  <span className="p-2 rounded-md bg-green-600/10"><FaTools className="text-green-300" /></span>
                  devlopers
                </Link>

              

               

                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center hover:translate-x-2  gap-4 transition hover:text-green-300"
                >
                  <span className="p-2 rounded-md bg-green-600/20"><FaEnvelope className="text-green-300" /></span>
                  Contact Us
                </Link>

               

              
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
}
