


import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const cardsData = [
  {
    id: 1,
    title: "Certification",
    description:
      "पुस्तकालय ज्ञान का भंडार है। यह वह स्थान है जहाँ पुस्तकों, पत्रिकाओं, समाचार पत्रों और डिजिटल संसाधनों का संग्रह, संरक्षण और पाठकों के लिए उपलब्ध कराया जाता है। पुस्तकालय समाज के बौद्धिक और सांस्कृतिक विकास में महत्वपूर्ण भूमिका निभाते हैं।",
    longDetails:
      "श्रीमान अभिषेक सुराणा जिला कलेक्टर चूरू ने पुस्तकालयों की स्थिति में सुधार हेतु अद्भुद कार्य किये l जिलाधीश महोदय ने पुस्तकालय को प्रत्येक छात्र तक पहुचाने के उद्देश्य से चूरू जिले में नवाचार किये जिसमे प्रत्येक छात्र/प्रत्येक अध्यापक को पुस्तकालय जाकर पुस्तकें लेना ओर उनको पढना अनिवार्य करना मुख्य है l श्रीमान जिला कलेक्टर महोदय के निर्देश उपरांत शिक्षा विभाग चूरू के अंतर्गत डॉ. गोविन्द सिंह राठौड़ के अथक प्रयासों से चूरू जिले के राजकीय विद्यालयों की पुस्तकालय व्यवस्था ने बीते कुछ वर्षों में उल्लेखनीय सुधार दर्ज किया है । जिला कलेक्टर श्री अभिषेक सुराणा एवं मुख्य जिला शिक्षा अधिकारी के नेतृत्व में विद्यालय पुस्तकालयों की दशा और दिशा दोनों में व्यापक परिवर्तन देखने को मिला है।",
    image: "/images/GroupPhoto.jpg",
    buttonColor: "bg-cyan-600 hover:bg-cyan-500",
    theme: "bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900",
  },
 
  {
    id: 2,
    title: "Certificate Ceremony",
    description:
      "Churu mein DM Abhishek Surana ji ke vision ke saath CodeYogi ne ‘Code Churu’ program shuru kiya, jiska lakshya rural students ko technology se जोड़ना tha.Is initiative ke ant mein top 20 students ko ek khas Certificate Ceremony mein सम्मानित kiya गया।",
    longDetails:
      "Pichle saal Churu mein DM Abhishek Surana ji ke नेतृत्व में CodeYogi का प्रतिष्ठित ‘Code Churu’ कार्यक्रम शुरू किया गया. Iska मुख्य उद्देश्य rural aur government background ke students ko coding aur digital skills se सशक्त बनाना था. Program ne bachchon mein technology awareness, confidence aur innovation ko बढ़ावा दिया. पूरे course के दौरान students ko modern learning environment aur practical exposure प्रदान किया गया. अंत में उत्कृष्ट प्रदर्शन करने वाले top 20 students को एक भव्य Certificate Ceremony में सम्मानित किया गया.",
    image: "/images/CertificatDirtibution.jpg",
    buttonColor: "bg-cyan-600 hover:bg-cyan-500",
   theme: "bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900",
  },
  {
    id: 3,
    title: "Laptop Distribution Ceremony",
    description:
      "Code Churu initiative ke tahat DM Abhishek Surana ji aur CodeYogi team ne rural background ke talented students ki creativity ko आगे बढ़ाने के लिए top 10 bachhon ko free laptops प्रदान किए. Is अवसर पर एक विशेष Laptop Distribution Ceremony आयोजित की गई, jisme unke प्रयास aur प्रतिभा का सम्मान किया गया.",
    longDetails:
      "Code Churu’ कार्यक्रम के दौरान DM Abhishek Surana ji aur CodeYogi team ne students की creativity aur digital growth को बढ़ावा देने के लिए एक महत्वपूर्ण कदम उठाया. Rural background ke kai students laptops afford नहीं कर सकते थे, इसलिए top 10 प्रतिभाशाली bachhon को free laptops प्रदान किए गए. Is initiative ne unhe coding, digital learning aur innovation की राह पर और मजबूत बनाया. Ceremony mein students ko प्रोत्साहित किया गया कि वे अपनी skills को अगले स्तर तक लेकर जाएं. इस विशेष Laptop Distribution Ceremony ने unke सपनों को नई दिशा दी और डिजिटल दुनिया से जोड़ने में अहम भूमिका निभाई.",
    image: "/images/LaptopDistribution.jpg",
    buttonColor: "bg-cyan-600 hover:bg-cyan-500",
   theme: "bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900",
  },
  {
    id: 4,
    title: "library center Launch",
    description:
      "Code Churu ke students ne apni skills ko aur मजबूत kiya, jiske बाद CodeYogi team ne sabhi bachhon ko IIT Madras ki Online BS Degree ke बारे में मार्गदर्शन दिया. Unki guidance par Code Churu ke do students—Lakshmi Jangid aur Mayank Sharma—ne IITM BS ka Qualifier Exam सफलतापूर्वक clear kar liya.",
    longDetails:
      "Code Churu program ke दौरान students ne apni coding aur analytical skills को लगातार improve kiya. Iske बाद CodeYogi team ne unhe IIT Madras ki prestigious Online BS Degree ke बारे में detail mein मार्गदर्शन दिया. Ye guidance unke career growth ke लिए ek महत्वपूर्ण turning point साबित हुई. Code Churu se Lakshmi Jangid aur Mayank Sharma ne मेहनत aur dedication ke दम पर IITM BS Qualifier Exam को सफलतापूर्वक clear kiya. Ye achievement poore program ke लिए गर्व का पल बना, aur अन्‍य छात्रों के लिए एक प्रेरणादायक मिसाल भी।",
    image: "/images/IITMadras.jpeg",
    buttonColor: "bg-cyan-600 hover:bg-cyan-500",
   theme: "bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900",
  },
  {
    id: 5,
    title: "Continuous Learning aur Growth ka Sankalp",
    description:
      "Code Churu aur CodeYogi ki team ne sabhi students ko kabhi na rukne, lagatar seekhne aur apni skills ko improve karne ka mindset diya. Ve bachhon ko har kadam par guide karte hue unhe nayi opportunities aur technology ki taraf आगे बढ़ाते रहते hain.",
    longDetails:
      "Code Churu aur CodeYogi team ka मुख्य उद्देश्य students mein continuous learning ki भावना पैदा karna hai. Team har student ko motivate karti hai ki वे अपनी सीमाओं को पार करके हमेशा नया सीखते रहें. Unka मार्गदर्शन students ko self-confidence, discipline aur growth mindset deta है. Ye initiative bachhon ko digital duniya ki नई technologies aur career opportunities se लगातार जोड़ता रहता है. Iss approach ne rural aur government background ke students ke भविष्य ko एक नई दिशा दी hai.",
    image: "/images/LakshmiImage.jpg",
    buttonColor: "bg-cyan-600 hover:bg-cyan-500",
    theme: "bg-linear-to-br from-slate-900 via-slate-800 to-cyan-900",
  },
  
];

const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [openCard, setOpenCard] = useState(null); 
  const modalBackdropRef = useRef(null);
  const modalPanelRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const totalCards = cardsData.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalCards * 100}%`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      cardsRef.current.forEach((card, index) => {
        if (index === 0) return;

        tl.from(card, {
          yPercent: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "none",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  
  const handleOpenModal = (card) => {
    setOpenCard(card);
    requestAnimationFrame(() => {
      const backdrop = modalBackdropRef.current;
      const panel = modalPanelRef.current;
      if (!backdrop || !panel) return;

      gsap.set(backdrop, { opacity: 0 });
      gsap.set(panel, { opacity: 0, y: 30, scale: 0.96 });

      gsap.to(backdrop, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });

      gsap.to(panel, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    });
  };

  
  const handleCloseModal = () => {
    const backdrop = modalBackdropRef.current;
    const panel = modalPanelRef.current;
    if (!backdrop || !panel) {
      setOpenCard(null);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setOpenCard(null),
    });

    tl.to(panel, {
      opacity: 0,
      y: 20,
      scale: 0.96,
      duration: 0.25,
      ease: "power2.in",
    }).to(
      backdrop,
      {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      },
      "<"
    );
  };

  
  return (
    <div className="min-h-screen text-white bg-black">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full h-screen px-3 overflow-hidden text-white bg-black sm:px-6 md:px-10"
      >
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute w-[94%] sm:w-[90%]  lg:w-[80%] h-[80vh] sm:h-[70vh] md:h-[65vh] lg:h-[60vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row bg-white/10 border border-slate-800 backdrop-blur-xl"
            style={{
              zIndex: index + 1,
            }}
          >
         
            <div className="flex flex-col items-start justify-center w-full px-6 py-6 space-y-3 md:w-1/2 sm:px-8 md:px-10 sm:py-8 md:py-10 sm:space-y-4 md:space-y-6">
              <p className="text-md sm:text-lg uppercase tracking-[0.25em] text-cyan-700">
                Initiative #{index + 1}
              </p>
              <h2 className="font-sans text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {card.title}
              </h2>
              <p className="text-xs font-medium leading-relaxed text-gray-300 sm:text-sm md:text-base">
                {card.description}
              </p>

              <button
                onClick={() => handleOpenModal(card)}
                className={`mt-3 sm:mt-4 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold flex items-center gap-2 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${card.buttonColor}`}
              >
                Read More
               
              </button>
            </div>

        
            <div
              className={`md:w-1/2 w-full h-full relative ${card.accentColor}`}
            >
              <div className="absolute inset-0 opacity-60 bg-linear-to-br from-cyan-500/40 via-transparent to-indigo-500/40" />
              <div className="relative flex items-center justify-center w-full h-full p-4 sm:p-6 md:p-8">
                <div className="relative w-full h-full overflow-hidden transition-all duration-500 border shadow-lg rounded-2xl rotate-2 hover:rotate-0 border-slate-700/80 bg-slate-900/80">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

   
      {openCard && (
        <div
          ref={modalBackdropRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
          className="fixed inset-0 flex items-center justify-center bg-white/5 z-999 backdrop-blur-sm"
        >
          <div
            ref={modalPanelRef}
            className="relative h-[80vh] w-[94%] sm:w-[80%]  xl:w-[70%] rounded-3xl bg-slate-900 text-slate-50 shadow-2xl border border-slate-700 flex flex-col overflow-hidden"
          >
        
            <div className="flex items-center justify-between px-5 py-3 border-b sm:px-6 sm:py-4 border-slate-700 bg-slate-900/95">
              <div className="space-y-1">
                
                <h3 className="text-sm font-semibold sm:text-lg md:text-xl">
                  {openCard.title}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="inline-flex items-center justify-center w-8 h-8 ml-4 text-sm font-bold transition-colors rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

       
            <div className="flex-1 px-5 py-4 space-y-4 overflow-y-auto custom-scrollbar sm:px-6">
              <div className="space-y-2">
                
                <p className="text-sm leading-relaxed whitespace-pre-line sm:text-base text-slate-100">
                  {openCard.longDetails}
                </p>
              </div>

              <div className="mt-4 border rounded-2xl over flow-hidden border-slate-700 bg-slate-900">
                <img
                  src={openCard.image}
                  alt={openCard.title}
                  className="object-cover w-full h-full "
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default StackedCards;
