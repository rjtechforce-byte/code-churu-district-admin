import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_mb6w45o', 'template_dof9sa9', form.current, {
        publicKey: 'gXtfXl_LMKWPfSCt9',
      })
      .then(
        () => {
          setSubmitted(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        },
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div id="contact" className="w-full min-h-screen px-4 pt-20 pb-12 text-white bg-black sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-7xl"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-12 text-center sm:mb-16">
          <h1 className="mb-4 text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-green-300 via-emerald-400 to-green-500 bg-clip-text">
            Get In Touch
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70">
            Have a question or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:gap-8 lg:gap-10">
          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-1">
            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)" }}
              className="p-6 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20">
                  <FaPhone className="text-xl text-green-400" />
                </div>
                <h3 className="text-lg font-semibold">Phone</h3>
              </div>
              <p className="ml-16 text-sm text-white/70">+91-90243 03162</p>
              <p className="mt-1 ml-16 text-xs text-white/50">Monday to Friday, 9 AM - 6 PM</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.15)" }}
              className="p-6 transition-all duration-300 border bg-white/5 backdrop-blur-md border-white/10 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/20">
                  <FaEnvelope className="text-xl text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <p className="ml-16 text-sm text-white/70">mailto:Codechuru@gmail.com</p>
              <p className="mt-1 ml-16 text-xs text-white/50">We'll get back to you in 24 hours</p>
            </motion.div>

        
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={itemVariants}
            className="p-6 border shadow-2xl lg:col-span-2 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-xl border-white/10 rounded-3xl sm:p-8 lg:p-10"
          >
            <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 sm:gap-6">
              {/* Name Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="sm:col-span-1">
                <label className="block mb-2 ml-1 text-sm font-medium text-white/80">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 text-white transition-all duration-300 border sm:py-4 bg-white/5 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 placeholder-white/30 backdrop-blur-md"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div whileHover={{ scale: 1.01 }} className="sm:col-span-1">
                <label className="block mb-2 ml-1 text-sm font-medium text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 text-white transition-all duration-300 border sm:py-4 bg-white/5 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 placeholder-white/30 backdrop-blur-md"
                />
              </motion.div>
            </div>

           

            {/* Message Input */}
            <motion.div whileHover={{ scale: 1.01 }} className="mb-8">
              <label className="block mb-2 ml-1 text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us more about your inquiry..."
                required
                rows="5"
                className="w-full px-4 py-3 text-white transition-all duration-300 border resize-none sm:py-4 bg-white/5 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 placeholder-white/30 backdrop-blur-md"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={!loading ? { scale: 1.02, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              type="submit"
              disabled={loading}
              className="flex items-center justify-center w-full gap-2 py-3 font-semibold text-black transition-all duration-300 sm:py-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl hover:from-green-500 hover:to-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-black rounded-full border-t-transparent"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="w-4 h-4" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 mt-4 border bg-green-500/20 border-green-500/50 rounded-xl"
              >
                <FaCheckCircle className="flex-shrink-0 text-green-400" />
                <p className="text-sm font-medium text-green-300">
                  Message sent successfully! We'll get back to you soon.
                </p>
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Decorative Elements */}
        <div className="absolute hidden rounded-full pointer-events-none top-20 right-10 w-72 h-72 bg-green-500/10 blur-3xl lg:block" />
        <div className="absolute bottom-0 left-0 rounded-full pointer-events-none w-96 h-96 bg-emerald-500/5 blur-3xl" />
      </motion.div>
    </div>
  );
}