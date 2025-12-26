import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api/api";

import {
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaUserTie,
  FaSchool,
  FaBook,
} from "react-icons/fa";

export default function SchoolOverviewPage() {
  const { schoolId } = useParams();
  const navigate = useNavigate();

  const [school, setSchool] = useState(null);
  const [stats, setStats] = useState({ books: 0, students: 0 });
  const [loading, setLoading] = useState(true);

  // ===================== Fetch School Details =====================
  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const res = await API.get(`/school/${schoolId}`);
        console.log("School =>", res.data);

        if (res.data.status) {
          setSchool(res.data.school);
        }
      } catch (err) {
        console.error("School Fetch Error:", err);
      }
      setLoading(false);
    };

    fetchSchool();
  }, [schoolId]);

  // ===================== Fetch Books & Students Count =====================
  useEffect(() => {
    if (!school) return;

    const fetchCounts = async () => {
      try {
        const booksRes = await API.get(`/books/all?schoolId=${school.schoolId}`);
        const studentRes = await API.get(`/student?schoolId=${school.schoolId}`);

        setStats({
          books: booksRes.data.books?.length || 0,
          students: studentRes.data.students?.length || 0,
        });
      } catch (err) {
        console.error("Stats Load Error:", err);
      }
    };

    fetchCounts();
  }, [school]);

  if (loading) {
    return <div className="text-white p-6 pt-20">Loading...</div>;
  }

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">School not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 mt-4 rounded-md bg-green-500/20"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07110d] p-6 md:p-12 text-white">
      <div className="max-w-6xl mx-auto mt-20">

        {/* Top Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center gap-10">

          <div className="w-56 h-56 rounded-2xl overflow-hidden border-2 border-green-400 shadow-lg">
            <img
              src={school.avatar || "https://via.placeholder.com/200"}
              alt="School"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-3">
            <h1 className="text-4xl font-bold">{school.schoolName}</h1>

            <p className="text-white/70">
              <FaMapMarkerAlt className="inline mr-2 text-green-400" />
              {school.address}
            </p>

            <p className="text-white/70">
              <FaPhone className="inline mr-2 text-green-400" />
              {school.contact || "No Contact Added"}
            </p>

            {/* Principal & Librarian */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                <FaUserTie className="text-3xl text-green-300" />
                <div>
                  <div className="text-white/70 text-sm">Principal</div>
                  <div className="text-xl font-semibold">{school.principlename}</div>
                </div>
              </div>

              <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                <FaSchool className="text-3xl text-green-300" />
                <div>
                  <div className="text-white/70 text-sm">Librarian</div>
                  <div className="text-xl font-semibold">{school.librarianname}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 p-6 rounded-2xl text-center">
            <FaUsers className="text-green-400 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Total Students</h3>
            <p className="text-3xl font-bold">{stats.students}</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl text-center">
            <FaBook className="text-green-400 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Total Books</h3>
            <p className="text-3xl font-bold">{stats.books}</p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl text-center">
            <FaCalendarAlt className="text-green-400 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Established</h3>
            <p className="text-2xl font-bold">{school.established || "N/A"}</p>
          </div>
        </div>

      </div>
    </div>
  );
}
