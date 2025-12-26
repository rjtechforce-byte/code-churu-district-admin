import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

export default function DistrictDMProfile({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
    >
      <motion.div
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-4xl bg-[#0f1c16] rounded-2xl border border-white/10 text-white"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-sm font-semibold text-green-400 md:text-base">
            District Magistrate (DM)
          </h2>
          <button
            onClick={onClose}
            className="transition text-white/60 hover:text-red-400"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
          
          {/* IMAGE + NAME */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <img
              src="/images/Abhishekh.jpg"
              alt="District Magistrate"
              className="object-cover border w-28 h-28 rounded-xl border-white/10"
            />

            <div className="text-center md:text-left">
              <p className="text-base font-semibold">
                Shri Abhishekh Surana (IAS)
              </p>
              <p className="text-xs text-white/60">
                District Magistrate
              </p>
            </div>
          </div>

          {/* INFORMATION */}
          <div className="grid grid-cols-1 gap-5 text-sm md:col-span-2 sm:grid-cols-2">
            <Info label="Role">
              District Library System Authority
            </Info>

            <Info label="Jurisdiction">
              Entire District
            </Info>

            <Info label="Phone">
            +91 861 973 0624
            </Info>

            <Info label="Official Email">
            Codechuru@gmail.com
            </Info>

            <Info label="Access Level">
              Full Administrative Control
            </Info>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-6 py-4 text-xs border-t border-white/10 text-white/60">
          All registrations remain inactive until approved by the District Magistrate.
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Reusable info block */
function Info({ label, children }) {
  return (
    <div>
      <p className="mb-1 text-xs text-white/50">{label}</p>
      <p className="text-white break-words">{children}</p>
    </div>
  );
}
