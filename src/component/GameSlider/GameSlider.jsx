import React from "react";

const images = [
    "/images/zetto/b1.webp",
    "/images/zetto/b2.webp",
    "/images/zetto/b3.webp",
    "/images/zetto/b4.webp",
];

const GameSlider = () => {
    return (
        <div className="w-full overflow-hidden relative md:my-2">
            <style>{`
                @keyframes scroll-right-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
                }

                .slider-track {
                display: flex;
                width: calc(200%); /* Doubled for continuous loop */
                animation: scroll-right-left 25s linear infinite;
                }
            `}</style>

            <div className="slider-track">
                {[...images, ...images].map((img, index) => (
                <div
                    key={index}
                    className="flex-shrink-0 w-[250px]  lg:w-[150px] mx-1 rounded-[8px] overflow-hidden"
                >
                    <img
                    src={img}
                    alt={`slide-${index}`}
                    className="!w-full !h-[60px] object-cover rounded-[8px] shadow-lg"
                    />
                </div>
                ))}
            </div>
        </div>
    );
};

export default GameSlider;
