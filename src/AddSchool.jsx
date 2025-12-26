import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api/api";

function AddSchoolPage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [form, setForm] = useState({
    name: "",
    address: "",
    principal: "",
    librarian: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("schoolName", form.name);
      fd.append("address", form.address);
      fd.append("principlename", form.principal);
      fd.append("librarianname", form.librarian);
      fd.append("password", form.password);

      if (imageFile) {
        fd.append("avatar", imageFile);
      }

      const res = await API.post("/district-admin/add-schools", fd);

      alert(
        `School Created!\nID: ${res.data.schoolId}\nPassword: ${res.data.password}`
      );

      navigate("/districtadmin/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error creating school");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#071012] text-white pt-24 p-6">
      <div className="w-full max-w-3xl p-6 border bg-white/5 rounded-xl border-white/10">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-400">
            Add New School
          </h2>

          <Link to="/districtadmin/dashboard">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10"
            >
              Back
            </motion.button>
          </Link>
        </div>

        <form onSubmit={submit} className="space-y-6">

          {/* IMAGE */}
          <div className="flex flex-col items-center gap-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleFile}
            />

            {preview ? (
              <img
                src={preview}
                className="w-44 h-44 object-cover rounded-xl border"
              />
            ) : (
              <div className="w-44 h-44 flex items-center justify-center border border-dashed rounded-xl">
                No Image
              </div>
            )}

            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="px-5 py-2 bg-green-600 rounded-lg"
            >
              {preview ? "Change Image" : "Upload Image"}
            </button>
          </div>

          {/* INPUTS */}
          <input name="name" placeholder="School Name" required onChange={handleChange} className="input" />
          <input name="principal" placeholder="Principal Name" required onChange={handleChange} className="input" />
          <input name="librarian" placeholder="Librarian Name" required onChange={handleChange} className="input" />
          <input name="password" placeholder="Password (optional)" onChange={handleChange} className="input" />
          <textarea name="address" placeholder="Address" required rows="3" onChange={handleChange} className="input" />

          <button className="w-full py-3 bg-green-600 rounded-lg font-semibold">
            Add School
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddSchoolPage;
