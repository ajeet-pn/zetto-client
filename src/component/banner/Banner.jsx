import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/user_reducer";
import { Carousel } from "antd";

function Banner() {
  let domainSetting = JSON.parse(localStorage.getItem("clientdomainSetting"));

  return (
    <>
      <div className={` text-black font-semibold w-full rounded-md my-1 mt-2`}>

        <div className=" overflow-hidden">
          {domainSetting?.banner?.length > 1 ? (
            <Carousel autoplay speed={200}>
              {domainSetting.banner
                ?.sort((a, b) => a.priority - b.priority)
                ?.map((req, index) => (
                  <div key={index} className="border-0 rounded-lg md:h-[300px] h-40">
                    {req?.url ? (
                      <a href={req.url}>
                        <img
                          src={req.image}
                          alt={req.name}
                          className="md:h-[300px] h-40 w-full "
                        />
                      </a>
                    ) : (
                      <img
                        src={req.image}
                        alt={req.name}
                        className="md:h-[300px] h-40 w-full"
                      />
                    )}
                  </div>
                ))}
            </Carousel>
          ) : (
            <Carousel autoplay speed={200}>
              <img
                src="/assests/logobanner.jpeg"
                alt=""
                className="md:h-[300px] h-36 w-full "
              />
              <img
                src="/assests/img5.jpg"
                alt=""
                className="md:h-[300px] h-36 w-full "
              />
            </Carousel>
          )}
        </div>

        {/* <div className="flex bg-secondary justify-between items-center mb-2 px-3 py-1">
          <h2 className="text-white md:text-[14px] text-[12px] font-bold">{"Games"}</h2>
        </div> */}
        {/* <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-6 mt-2 lg:grid-cols-12 gap-2">
          {CardData?.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center cursor-pointer">
              <div
                className="shadow-lg rounded-full bg-black w-20 h-20 bg-cover object-contain bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
                onClick={() => handleClick(`${item.link}`)}
              >
                
              </div>
              <div className="mt-1 text-xs uppercase text-black font-medium">{item?.name}</div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default Banner;