import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <>
      <footer className="bg-[--primary] hidden lg:block w-full text-white">
          <div className="bg-[--primary] grid grid-cols-5 text-white py-8 md:px-5 lg:px-28">
          <div className="">
              {/* Logo */}
              <div className="flex flex-col gap-4 space-x-4">
                <Link to='/dashboard'>
                  <img src="/images/zetto/logo.png" alt="Zetto Logo" className="w-32" />
                </Link>
                <div className='grid grid-cols-4 gap-4 !ms-0'>
                  <div className='w-full'>
                    <img src="/images/zetto/fb1.png" alt="" className='!w-5 !h-5'/>
                  </div>
                  <div className='w-full'>
                    <img src="/images/zetto/insta1.png" alt="" className='!w-5 !h-5'/>
                  </div>
                  <div className='w-full'>
                    <img src="/images/zetto/telegram1.png" alt="" className='!w-5 !h-5'/>
                  </div>
                  <div className='w-full'>
                    <img src="/images/zetto/youtube1.png" alt="" className='!w-5 !h-5'/>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://youtube.com" className="hover:text-gray-400">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://telegram.org" className="hover:text-gray-400">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>

          {/* Footer Links */}
          <div className="flex">
            <div>
              <div className="text-[13px] font-bold mb-3">HELP</div>
              <ul className="">
                <li><a href="/responsible-gambling" className="text-[12px] h-full hover:text-gray-400">Responsible Gambling</a></li>
                <li><a href="/terms-and-conditions" className="text-[12px] h-full hover:text-gray-400">Terms and Conditions</a></li>
                <li><a href="/join-affiliate" className="text-[12px] h-full hover:text-gray-400">Join as Affiliate</a></li>
                <li><a href="/download-app" className="text-[12px] h-full hover:text-gray-400">Download App</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div className="text-[13px] mb-3 font-bold">INFORMATION</div>
              <ul className="">
                <li><a href="/privacy-policy" className="text-[12px] h-full hover:text-gray-400">Privacy Policy</a></li>
                <li><a href="/rules" className="text-[12px] h-full hover:text-gray-400">Rules</a></li>
                <li><a href="/blog" className="text-[12px] h-full hover:text-gray-400">Zetto Blog</a></li>
                <li><a href="/sitemap" className="text-[12px] h-full hover:text-gray-400">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div className="text-[13px] mb-3 font-bold">ABOUT</div>
              <ul className="">
                <li><a href="/about-us" className="text-[12px] h-full hover:text-gray-400">About us</a></li>
                <li><a href="/promotions" className="text-[12px] h-full hover:text-gray-400">Promotions</a></li>
                <li><a href="/contact-us" className="text-[12px] h-full hover:text-gray-400">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-5 pt-4 text-center text-xs">
            <div className="flex flex-col justify-center gap-5">
              <img src="/images/zetto/gaming.webp" alt="Gaming Curacao" className="!w-[100px] h-auto" />
              <img src="/images/zetto/game-care.png" alt="GamCare" className="!w-[30px] !h-[30px]" />
              {/* <span className="text-gray-400">Be Gamble Aware</span>
              <span className="text-gray-400">18+</span> */}
            </div>
          </div>
        </div>
      </footer>

      
      <div className="flex relative rounded-t-[30px] lg:hidden bg-[--primary] items-center !h-[59px] sm:!h-[55px]">
        {/* {login && <LoginModal closeLogin={()=>setLogin(false)} />} */}
        <div className="mobile-header-data w-full">
          <ul className="grid grid-cols-5 ps-0 items-center !m-0">
            {/* <li className="footer-toggle-left" onClick={sidbarToggle}>
              <i className="fa fa-bars text-[25px]" aria-hidden="true"></i>
            </li> */}
            <li className='mx-auto h-full'
            // onClick={() => handleConditionalClick()}
            >
            <a  className="mobile-btn flex flex-col items-center">
              <img alt="casino-icon" src="/images/zetto/casino.png" className="!h-[20px] !w-[20px] !mt-[6px]"/>
              <p className="text-white text-[10px] mt-1">Casino</p>
              </a>
            </li>
            <li className='mx-auto h-full'
            // onClick={() => handleConditionalClick()}
            >
            <a  className="mobile-btn flex flex-col items-center">
              <img alt="casino-icon" src="/images/zetto/star.png" className="!h-[20px] !w-[20px] !mt-[6px]"/>
              <p className="text-white text-[10px] mt-1">Offers</p>
              </a>
            </li>
            <li 
            // onClick={() => handleClick("/")} 
            className=" mx-auto absolute z-50 bottom-[20px] left-1/2 -translate-x-1/2">
              <div className="">
                {/* <i className="fa fa-home" aria-hidden="true"></i> */}
                <img className="!w-[60px] !h-[60px]" src="/images/zetto/home_icon.png" alt="" />
              </div>
            </li>
            <li></li>

            <li className='mx-auto h-full'
            // onClick={() => handleClick("/sport/all")}
            >
              <a className="mobile-btn flex flex-col items-center">
                <img alt="footballSport_icon" src="/images/zetto/whatsapp-icon.png" className="!h-[20px] !w-[20px] !mt-[6px]"/>
                <p className="text-white text-[10px] mt-1">Helpline</p>
              </a>
            </li>
            {/* {token ? (
              <li onClick={sprofilbarToggle}>
                <a  className="mobile-btn flex flex-col items-center">
                  <FaUser size={24}/>
                <p className="!pt-[6px]">Profile</p>
                </a>
              </li>
            ) : ( */}
              <li className='mx-auto h-full'
              // onClick={()=>setLogin(true)}
              >
                <a  className="mobile-btn flex flex-col items-center">
                <img src="/images/zetto/avatar.png"className="!h-[20px] !w-[20px] !mt-[6px]"/>
                <p className="text-white text-[10px] mt-1">Login</p>
                </a>
              </li>
            {/* )} */}
          </ul>
        </div>
        {/* {isVisible && (
          <div
            className={`menu-slide graybg-4 ${menuOpen ? "active" : "inactive"}`}
          >
            <AllMenu handleClose={handleClose} />
          </div>
        )} */}
      </div>
    </>
  );
};

export default AppFooter;
