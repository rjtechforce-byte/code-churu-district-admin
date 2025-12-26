import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiUser, FiX, FiPlus, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import API from "./api/api";
import DistrictAdminProfile from './DistrictAdminProfile';
import { CiSquareQuestion } from "react-icons/ci";


function DistrictAdminDashboard() {
  const [schools, setSchools] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSchool, setSelectedSchool] = useState(null);
 const [open, setOpen] = useState(false);

  // Fetch schools
  useEffect(() => {
    loadSchools();
  }, []);

  async function loadSchools() {
    try {
      const res = await API.get("/school");

      console.log("Loaded Schools:", res.data);

      setSchools(res.data.data || []); // <-- FIXED
    } catch (e) {
      console.error("Error loading schools:", e);
    }
  }

  // FIXED filter
  const filtered = schools.filter((s) =>
    s.schoolName.toLowerCase().includes(search.toLowerCase())
  );

  const modalVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.15 } }
  };

  const bgColor = "bg-[#0A1612]";
  const primaryColor = "text-[#4CAF50]";
  const primaryBg = "bg-[#4CAF50]";
  const secondaryBg = "bg-[#1E2D24]";
  const borderColor = "border-[#2A3F34]";
  const accentColor = "text-[#8BC34A]";

  return (
    <div className={`min-h-screen p-4 pt-28 ${bgColor} text-white`}>
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold">District Admin Dashboard</h1>
            <p className={`${accentColor} text-lg`}>
              Manage and overview school records.
            </p>
          </div>

          <div className="flex items-center gap-4">
            
             <Link
               to="/request"
               className={`px-3 py-2 ${borderColor} border rounded-xl flex items-center gap-2`}  
            >    
             <CiSquareQuestion className={`${primaryColor}`} />  Request
            </Link>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-2 ${borderColor} border rounded-xl flex items-center gap-2`}
           onClick={() => setOpen(true)}
            >
              <FiUser className={`${primaryColor}`} /> Profile
            </motion.button>
             {open && <DistrictAdminProfile onClose={() => setOpen(false)} />}

            <Link to="/admin/add-schools">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-2 rounded-xl text-black font-semibold flex items-center gap-2 ${primaryBg}`}
              >
                <FiPlus /> Add School
              </motion.button>
            </Link>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="mt-8">
          <div className={`flex items-center gap-3 p-4 rounded-xl ${secondaryBg} ${borderColor} border`}>
            <FiSearch className={`text-xl ${primaryColor}`} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search schools by name..."
              className="w-full bg-transparent outline-none"
            />

            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSearch("")}
                >
                  <FiX />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* SCHOOL GRID */}
        <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((school) => (
            <motion.div
              key={school._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-2xl ${secondaryBg} ${borderColor} border`}
            >
              <img
                src={school.avatar}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h3 className="text-xl font-bold mt-3">{school.schoolName}</h3>

              <p className={`text-green-500`}>{school.address}</p>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelectedSchool(school)}
                className={`mt-4 w-full py-2 ${primaryBg}/20 rounded-xl`}
              >
                View Details 
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* DETAILS MODAL */}
        <AnimatePresence>
          {selectedSchool && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex justify-center items-center p-4"
              onClick={() => setSelectedSchool(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className={`w-full max-w-lg ${secondaryBg} p-6 rounded-3xl border ${borderColor}`}
                onClick={(e) => e.stopPropagation()}
              >
              

            
                 <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                   className='text-xl font-bold hover:text-red-500'
                  onClick={() => setSelectedSchool(null)}
                >
                  <FiX />
                </motion.button>
                
                <h2 className={`text-2xl font-bold text-green-500`}>
                  {selectedSchool.schoolName}
                </h2>

                <img
                  src={selectedSchool.avatar}
                  className="w-full h-56 object-cover rounded-xl mt-4"
                />

                <div className="mt-4 text-white space-y-2">
                  <p><b>Address:</b> {selectedSchool.address}</p>
                  <p><b>Principal:</b> {selectedSchool.principlename}</p>
                  <p><b>Librarian:</b> {selectedSchool.librarianname}</p>
                </div>

              
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DistrictAdminDashboard;
