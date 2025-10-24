import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CasinoSlider = ({ data }) => {
    const CustomPrevArrow = ({ onClick }) => (
        <div className="absolute left-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white"
            onClick={onClick}>
            <FaChevronLeft size={18} />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="absolute right-1 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white"
            onClick={onClick}
        >
            <FaChevronRight size={18} />
        </div>
    );

    const settings = {
        // dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1.5,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section className="">
                <div className='text-[13px] font-bold text-[--secondary] bg-[--primary] flex items-center px-2 uppercase rounded-t-[4px] h-[32px]'>Featured Games</div>
                <Slider {...settings}>
                    {data?.map((item, index) => (
                        <div key={index} className="cursor-pointer">
                            <a
                                className='flex gap-4'>
                                <img src={item.gameImg} alt={item.gameName} className='px-0 h-[141px] min-h-[141px] object-cover w-full' />
                            </a>
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    )
}
export default CasinoSlider;