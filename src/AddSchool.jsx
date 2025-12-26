import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import API from "./api/api";

function AddSchoolPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    principal: "",
    librarian: "",
    password: "",
  });

  const [avatar, setAvatar] = useState(""); // 👈 BASE64
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  setImageFile(file);
  setPreview(URL.createObjectURL(file));
    const [imageFile, setImageFile] = useState(null);
};

  const fd = new FormData();
fd.append("schoolName", form.name);
fd.append("address", form.address);
fd.append("principlename", form.principal);
fd.append("librarianname", form.librarian);
fd.append("password", form.password);
if (imageFile) fd.append("avatar", imageFile);

await API.post("/district-admin/add-schools", fd);

      alert(
        `School Created!\nID: ${res.data.schoolId}\nPassword: ${res.data.password}`
      );

      navigate("/districtadmin/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error creating school");
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-[#071012] text-white pt-24 p-6">
  <div className="w-full max-w-3xl p-6 mx-auto border bg-white/5 rounded-xl border-white/10 backdrop-blur-xl">

    {/* HEADER */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-green-400">
        Add New School
      </h2>

      <Link to="/districtadmin/dashboard">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
        >
          Back
        </motion.button>
      </Link>
    </div>

    <form onSubmit={submit} className="space-y-6">

      {/* IMAGE UPLOAD */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6">

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />

        <motion.button
          type="button"
          whileTap={{ scale: 0.96 }}
          onClick={() => fileInputRef.current.click()}
          className="px-5 py-2 text-sm font-semibold bg-green-500 rounded-lg hover:bg-green-400 transition"
        >
          {preview ? "Change Image" : "Upload Image"}
        </motion.button>

        <div className="text-center">
          <p className="mb-2 text-sm text-white/70">School Photo</p>

          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-44 h-44 object-cover rounded-xl border-2 border-green-400/30 shadow-xl"
            />
          ) : (
            <div className="w-44 h-44 flex items-center justify-center rounded-xl border border-dashed border-white/20 text-white/40">
              No Image
            </div>
          )}
        </div>
      </div>

      {/* INPUTS */}
      <input
        name="name"
        placeholder="School Name"
        onChange={handleChange}
        required
        className="w-full p-3 bg-transparent border border-green-400/20 rounded-lg outline-none focus:border-green-400 transition"
      />

      <input
        name="principal"
        placeholder="Principal Name"
        onChange={handleChange}
        required
        className="w-full p-3 bg-transparent border border-green-400/20 rounded-lg outline-none focus:border-green-400 transition"
      />

      <input
        name="librarian"
        placeholder="Librarian Name"
        onChange={handleChange}
        required
        className="w-full p-3 bg-transparent border border-green-400/20 rounded-lg outline-none focus:border-green-400 transition"
      />

      <input
        name="password"
        placeholder="Password (optional)"
        onChange={handleChange}
        className="w-full p-3 bg-transparent border border-green-400/20 rounded-lg outline-none focus:border-green-400 transition"
      />

      <textarea
        name="address"
        placeholder="Address"
        rows="3"
        onChange={handleChange}
        required
        className="w-full p-3 bg-transparent border border-green-400/20 rounded-lg outline-none focus:border-green-400 transition resize-none"
      />

      {/* SUBMIT */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 font-semibold rounded-lg bg-green-600 hover:bg-green-500 transition shadow-lg"
      >
        Add School
      </motion.button>

    </form>
  </div>
</div>

  );
}

export default AddSchoolPage;
