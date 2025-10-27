import React from "react";
import Slider from "react-slick";

const SlotBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const banners = [
    {
      id: 1,
      imgDesktop: "/images/zetto/s1.webp",
      imgMobile: "/images/zetto/sm1.webp",
    },
    {
      id: 2,
      imgDesktop: "/images/zetto/s2.webp",
      imgMobile: "/images/zetto/sm2.webp",
    },
    {
      id: 3,
      imgDesktop: "/images/zetto/s3.webp",
      imgMobile: "/images/zetto/sm3.webp",
    },
  ];

  return (
    <div className="w-full overflow-hidden relative">
      <Slider {...settings}>
        {banners.map((item) => (
          <div key={item.id}>
            {/* Desktop Image */}
            <div
              className="hidden md:flex relative h-[250px] rounded-[13px] items-center justify-center text-center"
              style={{
                backgroundImage: `url(${item.imgDesktop})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-[13px] bg-opacity-50"></div>
            </div>

            {/* Mobile Image */}
            <div
              className="flex md:hidden relative h-[250px] rounded-[10px] items-center justify-center text-center"
              style={{
                backgroundImage: `url(${item.imgMobile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 rounded-[10px] bg-opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlotBanner;
