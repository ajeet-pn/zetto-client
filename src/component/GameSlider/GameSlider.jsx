

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




const GameSlider = () => {
    const imagesMethod = [{
      image: "https://trovetown.in/assets/images/provider_images/wingogames-730-280.gif",
      orderBy: 4,
      name: "color-pridaction",
      gameId: "600096"
    },
    {
      image: "https://trovetown.in/assets/images/provider_images/fungames-730_280.gif",
      orderBy: 3,
      name: "fun-games",
      gameId: "151084"
    },
    {
      image: "https://trovetown.in/assets/images/provider_images/aviator-730-280.gif",
      orderBy: 2,
      name: "Aviator",
      gameId: "860001"
    },
    {
      image: "https://trovetown.in/assets/images/provider_images/evoplay-730-280.gif",
      orderBy: 1,
      name: "mines",
      gameId: "151075"
    }
  ];
  return (
    <div className="w-full overflow-hidden relative md:py-2 md:grid-cols-4 grid grid-cols-2 gap-1">
      {imagesMethod.map((img, index) => (
           <div
             key={index}
             className="flex-shrink-0  mx-1 rounded-[8px] overflow-hidden"
           >
             <img
             onClick={() => window.location.href = `/iframe-casino/${img?.gameId}`}
               src={img?.image}
               alt={`slide-${index}`}
               className="w-full h-[60px] object-cover rounded-[8px]"
             />
           </div>
         ))}
    </div>

  )
}

export default GameSlider