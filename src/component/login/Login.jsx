import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { message } from 'antd';
import { login } from "../../redux/reducers/auth.reducer";
import AppHeader from "../layout/AppHeader";
import MarqueeNotification from "../marquee/MarqueeNotification";

function Login({setIsLoginOpen }) {
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
        if (!data?.payload?.userinfo?.data?.error) {
            navigate("/dashboard")
            localStorage.setItem("isRedirected", false)
        } else {
          console.error("Login failed:", data.error);
        }
      })
      .catch((error) => {
        console.error("Login request failed:", error);
      });
  };

  return (
    <div className="min-h-screen bg-[#E9ECF0] ">
      <AppHeader/>
        <MarqueeNotification />
        <div className="flex items-start justify-center overflow-y-auto">
          <div className="w-full md:max-w-[448px] max-w-[100%] shadow-md rounded-[4px] bg-white text-white md:!my-4">
            <form className="!px-6 !py-8 flex flex-col  min-h-[500px] " onSubmit={(e) => {
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
                  <button type="submit"  disabled={!(username && password)}
  className={`h-[50px] rounded-[3px] text-[16px] transition-all duration-200
    ${username && password 
      ? 'bg-[#081e3dff] text-[#75fbe6ff]' 
      : 'text-[#c2c7c3] border-[#c2c7c3] bg-gray-200 cursor-not-allowed'}
  `}>
                  LOGIN
                </button>
                <div className="text-[#767f99] text-center mb-2  text-[12px]">New here ? 
                  <Link to={'/signup'} className="text-center text-[12px] px-1 font-bold text-black">Sign Up</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
    </div>

  );
}

export default Login;
