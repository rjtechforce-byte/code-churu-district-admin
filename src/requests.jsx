import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSchool, FaUserTie, FaPhoneAlt, FaEnvelope,
  FaMapMarkerAlt, FaCheck, FaTimes
} from "react-icons/fa";
import API from "./api/api";



export default function LibrarianRequests() {
  const [requests, setRequests] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
  const fetchRequests = async () => {
    try {
      const res = await API.get("/district-admin/librarian-requests");
      setRequests(res?.data?.requests || []);
    } catch (err) {
      console.error("Failed to fetch librarian requests:", err);
      setRequests([]);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const approve = async (id) => {
    setLoadingId(id);
    try {
      await API.post(`/district-admin/librarian-requests/${id}/accept`);
      await fetchRequests();
    } catch (err) {
      console.error(`Failed to approve request ${id}:`, err);
    } finally {
      setLoadingId(null);
    }
  };

  
  const reject = async (id) => {
    setLoadingId(id);
    try {
      await API.post(`/district-admin/librarian-requests/${id}/reject`);
      await fetchRequests();
    } catch (err) {
      console.error(`Failed to reject request ${id}:`, err);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1110] text-white px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold text-green-400">
        Librarian Registration Requests
      </h1>

      {requests.length === 0 && (
        <p className="text-gray-400">No pending requests</p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <motion.div
            key={req._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              bg-[#111918]
              border border-green-900/40
              rounded-xl
              p-4
              flex flex-col
              hover:border-green-500/50
              transition
            "
          >
            <h2 className="flex items-center gap-2 mb-2 font-semibold text-green-300">
              <FaSchool /> {req.schoolId}
            </h2>

            <p className="flex items-center gap-2 text-sm">
              <FaUserTie className="text-green-500" />
              {req.fullName}
            </p>

            <p className="text-sm text-gray-300">
              <b>Librarian ID:</b> {req.librarianId}
            </p>

            <p className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-green-500" />
              {req.phone}
            </p>

            <p className="flex items-center gap-2 text-sm break-all">
              <FaEnvelope className="text-green-500" />
              {req.email}
            </p>

            <p className="flex gap-2 text-sm text-gray-300">
              <FaMapMarkerAlt className="mt-1 text-green-500" />
              {req.address}
            </p>

            <div className="flex gap-3 pt-4 mt-auto">
              <button
                disabled={loadingId === req._id}
                onClick={() => approve(req._id)}
                className="flex-1 py-2 transition bg-green-600 rounded-md  hover:bg-green-700 disabled:opacity-50"
              >
                <FaCheck className="inline mr-1" /> Approve
              </button>

              <button
                disabled={loadingId === req._id}
                onClick={() => reject(req._id)}
                className="flex-1 py-2 transition bg-red-600 rounded-md  hover:bg-red-700 disabled:opacity-50"
              >
                <FaTimes className="inline mr-1" /> Reject
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
