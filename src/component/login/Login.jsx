import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from 'antd';
import settings from "../../domainConfig";
import { FaTimes } from "react-icons/fa";
import CasinoSlider from "../casinoSlider/CasinoSlider";
import { ImAndroid } from "react-icons/im";
import { login } from "../../redux/reducers/auth.reducer";
import ForgotModal from "../forgotModal/ForgotModal";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";

const sliderData = [
  {
    gameImg: '/login/log_one.png',
  },
  {
    gameImg: '/login/log_three.png',
  },
  {
    gameImg: '/login/log_four.png',
  },
]

function Login({ isOpen, closeModal, setIsLoginOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isterm, setIsterm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showForgotModal, setShowForgotModal] = useState(false);

  const openFModal = () => {
    setShowForgotModal(true);
    setIsLoginOpen(false);
  }

  const closeFModal = () => {
    setShowForgotModal(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return message.error("please enter username and password")
    }

    const reqData = {
      username: username,
      password: password,
      isClient: true,
      host: window.location.host,
    };

    dispatch(login(reqData))
      .then((data) => {
        // console.log(data,'llllllllllll')
        if (!data?.payload?.userinfo?.data?.error) {
          // closeModal();
          // if (data?.payload?.userinfo?.data?.isPasswordChanged === false) {
          // if (data?.payload?.userinfo?.data?.error === false) {
            // alert('lll')
            // window.location.href = "/dashboard"
            navigate("/dashboard")
            localStorage.setItem("isRedirected", false)
          // } else {
          //   window.location.href = "/dashboard"
          // }
        } else {
          console.error("Login failed:", data.error);
        }
      })
      .catch((error) => {
        console.error("Login request failed:", error);
      });
  };

  // Handle login with demo credentials
  const handleDemoLogin = () => {
    const demoCredentials = {
      username: "C1000",
      password: "1122",
      isClient: true,
      host: window.location.host,
    };

    dispatch(login(demoCredentials))
      .then((data) => {
        if (!data.error) {
          closeModal();
          navigate("/dashboard");
          // window.location.href = "/dashboard"
          // navigate("/dashboard");
        } else {
          console.error("Demo Login failed:", data.error);
        }
      })
      .catch((error) => {
        console.error("Demo login request failed:", error);
      });
  };


  return (
    <>
      <AppHeader/>
        {/* <div className="max-w-2xl mx-auto">
          <div className="bg-[#005098] text-white  shadow-[0_0_25px_2px_#222] relative lg:-top-2 mx-2">

            <div className="md:flex w-full">
              <form onSubmit={handleSubmit} className="lg:w-[50%] w-full lg:py-[50px] py-[25px] px-[25px]">
                <div className="flex justify-center items-center">
                  <div className="py-5">
                    <h2 className="text-[30px] uppercase font-[700] text-center tracking-wider ">
                      Login Now
                    </h2>
                    <div className="w-[60%] h-[2px] bg-white mx-auto mt-1 rounded-none"></div>
                  </div>
                 
                </div>
                <div className="mb-4">
                  <label className=" text-[10px] mb-1 font-[600] text-gray-200">
                    USERNAME / MOBILE NUMBER
                  </label>
                  <input
                    type="text"
                    className="bg-[#00427C] w-full flex-grow p-2 rounded-md focus:bg-[var(--primary)] focus:border-white text-white placeholder-gray-400 focus:border-button focus:border outline-none text-center"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  />
                </div>

                <div className="mb-4">
                  <label className=" text-[10px] mb-1 font-[600] text-gray-200">
                    PASSWORD
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="bg-[#00427C] w-full flex-grow p-2 rounded-md focus:bg-[var(--primary)] focus:border-white text-white placeholder-gray-400 focus:border-button focus:border outline-none text-center"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  />
                </div>

                <div className="">
                  <label className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox text-blue-600 rounded-sm"
                    />
                    <span className="text-[10px] text-white">Remember Me?</span>
                  </label>
                </div>

                <div
                  onClick={openFModal}
                  className="text-center my-1 cursor-pointer">
                  <div className="text-[13px] text-white">
                    Forgot Password
                  </div>
                </div>

                <button
                  type="submit"
                  className=" w-full mb-2 bg-white text-black font-semibold text-[13px] uppercase tracking-wide border border-[var(--primary)] rounded-[10px] py-[7px] px-[15px] shadow-[inset_0_0_0_1px_#fff] transition-all duration-[900ms]  ease-in-out cursor-pointer">
                  Login
                </button>

                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className=" w-full mb-2 bg-white text-black font-semibold text-[13px] uppercase tracking-wide border border-[var(--primary)] rounded-[10px] py-[7px] px-[15px] shadow-[inset_0_0_0_1px_#fff] transition-all duration-[900ms]  ease-in-out cursor-pointer">
                  Login With Demo ID
                </button>

                <button
                  className={` flex justify-center items-center space-x-1 w-full text-[16px] mx-auto mt-1.5 mb-[5px] py-1.5 bg-[var(--secondary)] border border-[var(--primary)] text-white rounded-[10px]`}>
                  <p>Download APK</p>
                  <ImAndroid size={18} />
                </button>

                <div className="text-white text-[13px] text-center mt-4">
                  <div className="flex justify-center items-center space-x-1">
                    <p>Powered by </p><p className="text-[var(--primary)]">{settings.domainName}</p>
                  </div>
                  <div>
                    reddybook.clubofficial@gmail.com
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div> */}

        <div className="flex items-start justify-center h-full bg-[#E9ECF0] overflow-y-auto">
          <div className="w-full md:max-w-[448px] max-w-[100%] shadow-md rounded-[4px] bg-white text-white md:!my-4">
            <form className="!px-6 !py-8 flex flex-col  max-h-[500px] " onSubmit={(e) => {
                e.preventDefault(); 
                handleSubmit(e);
              }}>
                <div className="mx-auto">
                  <img className="!w-full !h-auto" src="/images/zetto/login.png" alt="" />
                </div>
                
                <div className="text-[20px] my-3 text-center font-bold text-black dark:text-white">Login to your account</div>
                {/* <div className="text-[14px] text-black mb-3 dark:text-white">Welcome back! Please signin to continue.</div> */}
              <div className="flex flex-col mb-4">
                {/* <label className="text-[14px] font-[400] text-black dark:text-white !mb-[5px]">Mobile Number</label> */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="usename"
                    className="bg-[#EFEFEF] h-[43px] w-full rounded-[5px] border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[16px] text-black px-2"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                    // value={formData.username}
                    // onChange={handleChange}
                  />
                  
                  <Link className="text-[12px] font-semibold !text-black dark:!text-white" to=''>Forgot username?</Link>
                </div>
                {/* {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>} */}
              </div>
              <div className="flex flex-col mb-4 relative">
                <input
                  placeholder="Password"
                  type="password"
                  className="bg-[#EFEFEF] h-[43px] rounded-[5px] text-black border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[16px] px-2"
                  name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  // value={formData.password}
                  // onChange={handleChange}
                />
                <img className="!w-[20px] !h-[20px] absolute top-[19%] dark:brightness-100 brightness-0 right-[15px]" src="/images/zetto/passwordhide.png" alt="" />
                <Link className="text-[12px] font-semibold !text-black dark:!text-white" to=''>Forgot password?</Link>
                {/* {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>} */}
              </div>

              <div className="flex flex-col gap-2">
                  <button type="submit" className="h-[50px] rounded-[3px] border border-[#c2c7c3] text-[#c2c7c3] text-[16x]">
                  LOGIN
                </button>
                <div className="text-[#767f99] text-center mb-2 text-[12px]">New here ? <Link className="text-center text-[12px] !text-black dark:!text-white">Sign Up</Link></div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full  max-lg:pb-16">

      <AppFooter/>
        </div>
      {/* {showForgotModal &&
        <ForgotModal isOpen={showForgotModal} closeModal={closeFModal} />
      } */}
    </>

  );
}

export default Login;
