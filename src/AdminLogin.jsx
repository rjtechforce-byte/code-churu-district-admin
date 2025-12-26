import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiLock } from "react-icons/fi";
import API from "./api/api";  
import { useNavigate } from "react-router-dom";


function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");


async function handleLogin(e) {
  e.preventDefault();
  setLoading(true);
  setMsg("");

  try {
    const res = await API.post("/district-admin/login", {
      username,
      password
    });

    console.log("LOGIN RESPONSE =", res.data);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      console.log("Saved Token =", res.data.token);

      setMsg("✅ Login Successful!");

      // Little delay so message is visible...
      setTimeout(() => {
        navigate("/districtadmin/dashboard");
      }, 700);
    } else {
      setMsg("❌ No token received");
    }

  } catch (err) {
    console.log(err);
    setMsg("❌ Invalid username or password");
  }

  setLoading(false);
}



  return (
    <div className="min-h-screen bg-[#071012] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gradient-to-br from-black/40 to-gray-900/40 border border-white/10
                   p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-extrabold text-center text-white">
          District Admin Login
        </h2>
        <p className="text-center text-white/60 text-sm mt-2">
          Secure access for DM/Administration
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          {/* USERNAME */}
          <div>
            <label className="text-white/70 text-sm">Username</label>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 mt-2">
              <FiUser className="text-lg text-white/60" />
              <input
                type="text"
                placeholder="Enter username"
                className="bg-transparent w-full outline-none text-white placeholder:text-white/40"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-white/70 text-sm">Password</label>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 mt-2">
              <FiLock className="text-lg text-white/60" />
              <input
                type="password"
                placeholder="Enter password"
                className="bg-transparent w-full outline-none text-white placeholder:text-white/40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* ERROR / SUCCESS MESSAGE */}
          {msg && (
            <p className="text-center text-sm text-red-400">{msg}</p>
          )}

          {/* LOGIN BUTTON */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full bg-green-600/90 hover:bg-green-500 text-white py-3 rounded-xl 
                       font-semibold border border-green-400/40 shadow-md transition"
          >
            {loading ? "Processing..." : "Login"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default AdminLogin;
