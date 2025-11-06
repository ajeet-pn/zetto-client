

// import React from "react";

// const GameSlider = () => {
//   const images = [
//     "/images/zetto/b1.webp",
//     "/images/zetto/b2.webp",
//     "/images/zetto/b3.webp",
//     "/images/zetto/b4.webp",
//   ];

//   return (
//     <div className="w-full overflow-hidden relative md:py-2">
//       <style>{`
//         .slider {
//           display: flex;
//           width: max-content;
//           animation: scroll 20s linear infinite;
//         }

//         @keyframes scroll {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }

//         /* Optional: pause on hover */
//         .slider:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="slider">
//         {/* TRIPLE array for ultra-smooth loop */}
//         {[...images, ...images, ...images].map((img, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[220px] md:w-[160px] mx-1 rounded-[8px] overflow-hidden"
//           >
//             <img
//               src={img}
//               alt={`slide-${index}`}
//               className="w-full h-[60px] object-cover rounded-[8px]"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameSlider;



import React, { useEffect, useState } from "react";
import Login from "../login/Login";

const GameSlider = () => {
  const [loginModal, setLoginModal] = useState(false);
  const token = localStorage.getItem("token");

  const imagesMethod = [
    {
      image: "/images/zetto/wingogames-730-280.gif",
      orderBy: 4,
      name: "color-pridaction",
      gameId: "600096",
    },
    {
      image: "/images/zetto/fungames-730_280.gif",
      orderBy: 3,
      name: "fun-games",
      gameId: "221660",
    },
    {
      image: "/images/zetto/aviator-730-280.gif",
      orderBy: 2,
      name: "Aviator",
      gameId: "525001",
    },
    {
      image: "/images/zetto/evoplay-730-280.gif",
      orderBy: 1,
      name: "mines",
      gameId: "201208",
    },
  ];

  const handleImageClick = (gameId) => {
    if (token) {
      // Agar token hai to redirect kare
      window.location.href = `/iframe-casino/${gameId}`;
    } else {
      // Agar token nahi hai to login modal dikhaye
      setLoginModal(true);
    }
  };

    useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "";
    }
  
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [loginModal]);

  return (
    <div className="w-full overflow-hidden relative md:py-2 md:grid-cols-4 grid grid-cols-2 gap-1">
      {loginModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99]"
        >
          <Login onClose={() => setLoginModal(false)} />
        </div>
      )}

      {imagesMethod.map((img, index) => (
        <div
          key={index}
          className="flex-shrink-0 mx-1 rounded-[8px] overflow-hidden"
        >
          <img
            onClick={() => handleImageClick(img?.gameId)}
            src={img?.image}
            alt={`slide-${index}`}
            className="w-full h-[60px] object-cover rounded-[8px] cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default GameSlider;
