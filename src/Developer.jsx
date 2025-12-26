import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Linkedin as LinkedinIcon,
  Github as GithubIcon,
  X,
} from "lucide-react";

const TEAM = [
  {
    id: 0,
    name: "Lakshmi Jangid",
    role: "Team Manager",
    bio: "Hi! I’m Lakshmi, a passionate and skilled Frontend Web Developer with strong knowledge of modern tools, clean UI/UX, and practical experience. I create high-quality, responsive, fast, and beautifully designed websites for individuals, startups, and small businesses. I work with HTML, CSS, JavaScript, TailwindCSS, React, and I also have backend knowledge.",
    src: "/images/Lakshmi.jpg",
    skills: ["Frontend Devlopment", "React", "Tailwind", "JavaScript", "HTML", "CSS"],
    social: { linkedin: "https://www.linkedin.com/in/lakshmi-jangid-9b5443378/", github: "https://github.com/lakshmijangid" },
  },
  {
    id: 1,
    name: "Zahid Khan",
    role: "Chief Member",
    bio: "My name is Zahid, and I’m a passionate Backend Developer with strong skills in Node.js, Express, and MongoDB. I create fast, secure, and reliable APIs for modern web apps. Even as a 12th Biology student, I love building powerful server-side logic. If you need clean, professional, and smooth backend work — I’m here to help!",
    src: "/images/Zahid.jpg",
    skills: ["Node.js", "MongoDB", "Express", "React", "Backend", "JavaScript"],
    social: { linkedin: "#", github: "#" },
  },
  {
    id: 2,
    name: "Shiva",
    role: "UI Designer",
    bio: "My name is Shiva, and I’m a young Frontend Developer skilled in React, HTML, CSS, and GSAP animations. Even though I’m in 10th class, I create smooth, modern, and eye-catching UI designs. I love building interactive pages with clean code and creative motion effects. I always focus on responsiveness, performance, and professional-quality work.",
    src: "/images/Shiva.jpg",
    skills: ["React", "GSAP", "Tailwind", "JavaScript"],
    social: { linkedin: "#", github: "#" },
  },
  {
    id: 3,
    name: "Narpat Singh",
    role: "Developer",
    bio: "I belong : Bhaleri, churu from Rajasthan My Father Name : Shivdan SinghMy, Mother Name : Meena Kanwar, My am a collage studentI strength is a coding and my dream is a software engineer My other activities : coding , study , socal midia working and health activities",
    src: "/images/narpat.jpg",
    skills: ["React", "HTML", "Tailwind", "JavaScript", "CSS"],
    social: { linkedin: "#", github: "#" },
  },
  {
    id: 4,
    name: "Himesh Singh",
    role: "Developer",
    bio: "I am from : Bhaleri, churu from Rajasthan My Father Name : Shivdan SinghMy, Mother Name : Meena Kanwar, I am a student in 11th class my strength is a coding and, My dream is a software engineer My other activities : coding , study and health activities",
    src: "/images/Himesh.jpg",
    skills: ["React", "HTNL", "Tailwind", "JavaScript", "CSS"],
    social: { linkedin: "www", github: "#" },
  },
];

const MENTOR = {
  id: "mentor-0",
  name: "Gaurav Sharma",
  role: "Mentor",
  bio: "Gaurav Sharma sir is a dedicated Computer Instructor with a strong passion for teaching technology.He guides and mentors students at Code Churu with clarity and confidence.Sir helps students understand coding concepts in a simple and practical way.He always motivates learners to improve their skills and think creatively.With his support, many students build real projects and grow in the tech field.Gaurav sir is truly an inspiring mentor for every Code Churu student.",
  src: "/images/Gaurav.jpg",
  skills: ["Computer Instruction", "Creative Teaching", "Team Management", "Program Planning", "Clear Communication", "Student Mentorship", "Project Coordination"],
  social: { linkedin: "#", github: "#" },
};

const Developer = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);
  const modalRef = useRef(null);
  const modalBgRef = useRef(null);

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);

    gsap.fromTo(
      modalBgRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    gsap.fromTo(
      modalRef.current,
      {
        scale: 0.7,
        opacity: 0,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );
  };

  const closeModal = () => {
    gsap.to(modalRef.current, {
      scale: 0.7,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        setIsModalOpen(false);
        setSelectedMember(null);
      },
    });
    gsap.to(modalBgRef.current, {
      opacity: 0,
      duration: 0.3,
    });
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isModalOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original || "";
      };
    }
  }, [isModalOpen]);
  return (
    <>
          <section
            ref={sectionRef}
            id="about"
            className="relative overflow-hidden bg-[#1A1A1A] text-slate-50 py-20 px-4 sm:px-6 lg:px-10"
          >
            <div className="relative max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <p
                  ref={subtitleRef}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-[#111111] px-6 py-2 text-xl font-semibold tracking-[0.2em] uppercase text-cyan-300"
                >
                  Developers
                </p>

                <h2
                  ref={titleRef}
                  className="mt-5 text-3xl font-bold tracking-tight text-transparent bg-white sm:text-4xl lg:text-5xl bg-clip-text"
                >
                  Meet the team behind the experience
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-slate-300/80">
                  Five passionate builders crafting smooth interactions, powerful
                  features, and a beautiful learning experience for you.
                </p>
              </div>

              {/* Mentor heading */}
              <div className="sm:w-[90%] mx-auto mb-6 text-center sm:text-left">
                <h3 className="text-xl font-semibold sm:text-2xl text-slate-50">Mentor</h3>
                <p className="max-w-2xl mx-auto mt-2 text-sm text-slate-400 sm:mx-0">Guidance from an experienced mentor who reviews architecture and developer experience.</p>
              </div>

          {/* Mentor card */}
          <div className="sm:w-[90%] mx-auto mb-10">
            <div
              className="relative max-w-3xl mx-auto rounded-3xl border border-cyan-400/40 p-1.5 shadow-[0_10px_30px_rgba(0,255,144,0.06)] hover:shadow-[0_20px_60px_rgba(0,255,144,0.12)] transition-shadow transform-gpu hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(MENTOR)}
            >
              <div className="relative z-10 rounded-2xl bg-[#0f1112] backdrop-blur-xl px-3 py-3 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0 overflow-hidden border w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl border-cyan-500/30 bg-slate-900">
                  <img src={MENTOR.src} alt={MENTOR.name} className="object-cover w-full h-full" />
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold sm:text-xl text-slate-50">{MENTOR.name}</h3>
                      <p className="mt-1 text-sm text-cyan-300">{MENTOR.role}</p>
                    </div>
                    <div className="hidden sm:block">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(MENTOR);
                        }}
                        className="px-4 py-2 text-sm font-semibold text-white transition-all border border-cyan-400/40 rounded-xl bg-white/5 hover:bg-cyan-400/30"
                      >
                        View Profile
                      </button>
                    </div>
                  </div>

                  <p className="max-w-2xl mt-3 text-sm text-slate-300 line-clamp-4">{MENTOR.bio}</p>

                  <div className="flex gap-2 mt-4 sm:hidden">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(MENTOR);
                      }}
                      className="w-full px-4 py-2 text-sm font-semibold text-black transition-all rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Developers heading */}
          <div className="sm:w-[90%] mx-auto mb-6 text-left">
            <h3 className="text-xl font-semibold sm:text-2xl text-slate-50">Developers</h3>
            <p className="mt-2 text-sm text-slate-400">Talented builders working on the product — click a profile to view details.</p>
          </div>

          <div className="grid sm:w-[90%] sm:gap-8 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
            {TEAM.map((member) => (
              <div
                key={member.id}
                ref={addToCardsRef}
                className="group relative rounded-3xl border border-cyan-400/40 p-1.5 shadow-[0_0_4px_rgba(0,255,144,0.04)] hover:shadow-[0_10px_40px_rgba(0,255,144,0.08)] transition-shadow transform-gpu hover:-translate-y-1 cursor-pointer"
                onClick={() => openModal(member)}
              >
                <div className="absolute inset-0 transition-all duration-500 opacity-0 rounded-3xl blur-xl group-hover:opacity-100 group-hover:blur-2xl" />

                <div className="relative z-10 h-full rounded-2xl bg-[#111111] backdrop-blur-xl px-4 py-5 sm:px-5 sm:py-6 flex flex-col">
                  <div className="relative flex items-start w-full h-full gap-3 mb-4">
                    <div className="relative flex items-center justify-center w-20 h-20 overflow-hidden border sm:w-28 sm:h-28 rounded-2xl bg-slate-900 border-cyan-500/30">
                      <img
                        src={member.src}
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex-1 ml-2">
                      <h3 className="text-base font-semibold sm:text-lg text-slate-50">
                        {member.name}
                      </h3>
                      <p className="text-xs font-medium sm:text-sm text-cyan-300">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full h-px mb-4 bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent">
                    <div className="absolute w-10 h-2 -translate-x-1/2 bg-green-400 rounded-full -top-1 left-1/2 blur-sm" />
                  </div>

                  <p className="flex-1 text-xs leading-relaxed sm:text-sm text-slate-300/85">
                    {member.bio}
                  </p>

                  <div className="w-[90%] flex  justify-center content-center mt-6">
                    <button
                      className="border-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-white border-cyan-400/50 hover:bg-[#1f4938] transition-all duration-300 shadow-md hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(member);
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedMember && (
        <div
          ref={modalBgRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-3xl p-4 max-h-[85vh] overflow-auto mx-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#111111] backdrop-blur-2xl rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 p-6 sm:p-8">
              <button
                onClick={closeModal}
                aria-label="Close profile"
                className="absolute flex items-center justify-center w-10 h-10 transition-all duration-300 border-2 shadow-xl -top-3 -right-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border-cyan-500/50 text-cyan-400 hover:text-cyan-300 hover:scale-110"
              >
                <X />
              </button>

              <div className="mb-6 text-center sm:text-left">
                <div className="relative mx-auto mb-4 overflow-hidden border-4 shadow-2xl w-36 h-36 sm:mx-0 sm:h-40 sm:w-40 rounded-3xl bg-slate-900 border-cyan-500/40">
                  <img
                    src={selectedMember.src}
                    alt={selectedMember.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-transparent sm:text-3xl bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text">
                  {selectedMember.name}
                </h3>

                <p className="mb-2 text-lg font-semibold text-cyan-300">
                  {selectedMember.role}
                </p>

                <p className="leading-relaxed max-w-none text-slate-300">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-cyan-200">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-200 hover:bg-cyan-500/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-cyan-200">
                  Connect
                </h4>
                <div className="flex justify-center gap-4">
                  <a
                    href={selectedMember.social.linkedin}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 border bg-slate-800/50 hover:bg-cyan-500/20 border-slate-700/50 hover:border-cyan-400 rounded-xl text-slate-300 hover:text-cyan-400 hover:scale-110"
                  >
                    <LinkedinIcon />
                  </a>

                  <a
                    href={selectedMember.social.github}
                    className="flex items-center justify-center w-10 h-10 transition-all duration-300 border bg-slate-800/50 hover:bg-cyan-500/20 border-slate-700/50 hover:border-cyan-400 rounded-xl text-slate-300 hover:text-cyan-400 hover:scale-110"
                  >
                    <GithubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};

export default Developer;
