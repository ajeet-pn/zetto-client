// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { message } from 'antd';
// import { login } from "../../redux/reducers/auth.reducer";
// import AppHeader from "../layout/AppHeader";
// import MarqueeNotification from "../marquee/MarqueeNotification";

// function Login({setIsLoginOpen, onClose}) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isterm, setIsterm] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const [showForgotModal, setShowForgotModal] = useState(false);

//   const openFModal = () => {
//     setShowForgotModal(true);
//     setIsLoginOpen(false);
//   }

//   const closeFModal = () => {
//     setShowForgotModal(false);
//   };

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!username || !password) {
//       return message.error("please enter username and password")
//     }

//     const reqData = {
//       username: username,
//       password: password,
//       isClient: true,
//       host: window.location.host,
//     };

//     dispatch(login(reqData)).then((data) => {
//         if (!data?.payload?.data?.error) {
//           window.location.href = "/dashboard";
//             localStorage.setItem("isRedirected", false)
//         } else {
//           console.error("Login failed:", data.error);
//         }
//       })
//       .catch((error) => {
//         console.error("Login request failed:", error);
//       });
//   };

  

//   return (
//     <div className="fixed inset-0 left-0 top-0  bg-[#E9ECF0]/75 z-50" >
       
//         <div className="flex items-start justify-center overflow-y-auto">
//           <div className="w-full md:max-w-[448px] max-w-[100%] shadow-md rounded-[4px] bg-[#666] text-white md:!my-4">
//             <div className="flex justify-between bg-black p-2 px-4">
// 							<h5 className="text-lg font-bold">Login</h5>
// 							<img src="https://wver.sprintstaticdata.com/v78/static/front/img/close.svg" alt="close" className="rounded-full border-2 p-1 border-red-700 cursor-pointer" onClick={onClose}/>
// 						</div>
//             <form className="!px-4 !py-4 flex m-1.5 flex-col bg-black  "  onSubmit={(e) => {
//                 e.preventDefault(); 
//                 handleSubmit(e);
//               }}>
//               <div className="flex flex-col mb-4">
//                 <div className="relative">
//                   <div className="text-[12px] font-semibold !text-white mb-2 ">Username</div>
//                   <input
//                     type="text"
//                     placeholder="Username"
//                     className=" h-[43px] w-full border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[16px] text-white px-2"
//                     name="username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                   
//                   />
                  
                  
//                 </div>

//               </div>
//               <div className="flex flex-col mb-4 ">
//                 <div className="text-[12px] font-semibold !text-white mb-2" >Password</div>
//                 <div className="relative bg-[#EFEFEF] ">
//                 <input
//                   placeholder="Password"
//                   type="password"
//                   className="py-2  w-full border border-[#c0ccda] text-white placeholder:text-[#9da3bd] placeholder:text-[16px] px-2"
//                   name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                 
//                 />
//                 <img className="!w-[20px] !h-[20px] absolute top-2  right-[15px]" src="/images/zetto/passwordhide.png" alt="" />
//                </div>
//               </div>

//               <div class="custom-control custom-checkbox d-inline-block py-1 mb-2">
// 									<input type="checkbox" id="customCheck" name="example1" class="custom-control-input" checked/>
//                   &nbsp;
// 									<label for="customCheck" class="text-sm">
// 										I am at least&nbsp;
// 										<a href="javascript:void(0)" class="text-red-500" role="button">18 years</a>&nbsp;
// 										of age and I have read, accept and agree to the
//                     &nbsp;
// 										<a href="/term-condition" class="text-blue-500 underline" target="_blank">Terms and Conditions
// 										</a>,
// &nbsp;
// 										<a href="/responsible-gambling" class="text-blue-500 underline" target="_blank">Responsible Gaming </a>
										
// 									</label>
// 								</div>

//               <div className="flex flex-col gap-2">
//                   <button type="submit"  disabled={!(username && password)}
//   className={`h-[50px] rounded-[3px] text-[16px] transition-all duration-200
//     ${username && password 
//       ? 'bg-[#03b37f] text-white' 
//       : 'text-[#c2c7c3] border-[#c2c7c3] bg-[#0e684e] cursor-not-allowed'}
//   `}>
//                   LOGIN
//                 </button>
//                 <div className="flex items-center">
//   <hr className="flex-grow border-t border-[#767f99]" />
//   <span className="text-[#767f99] text-[12px] mx-2">or</span>
//   <hr className="flex-grow border-t border-[#767f99]" />
// </div>

// <button type="button"  // IMPORTANT: type="button" so Enter does NOT trigger it
//   onClick={() => {
//     message.info("Demo request clicked!");
//     // Open demo modal or navigate
//   }}
//   className={`h-[50px] rounded-[3px] text-[16px] transition-all duration-200 bg-[#03b37f] text-white
//   `}>
//                  Request a Demo
//                 </button>
                
//               </div>
//             </form>
//           </div>
//         </div>
//     </div>

//   );
// }

// export default Login;



import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { message, Spin } from "antd";
import { login } from "../../redux/reducers/auth.reducer";
import { apiCall } from "../../config/HTTP";
import { domainName } from "../../config/Auth";

function Login({ setIsLoginOpen, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return message.error("Please enter username and password");
    }

    setLoadingLogin(true);

    const reqData = {
      username,
      password,
      isClient: true,
      host: window.location.host,
    };

    try {
      const data = await dispatch(login(reqData));
      if (!data?.payload?.data?.error) {
        window.location.href = "/dashboard";
        localStorage.setItem("isRedirected", false);
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Login request failed:", error);
    } finally {
      setLoadingLogin(false);
    }
  };

 const handleDemoClick = async () => {
    setLoadingDemo(true);

    // Example payload for demo request
    const demoPayload = {
      username: "test",
      password: "1122",
      host: window.location.host,
      isClient: true,
    };

    try {
      const response = await apiCall("POST", "user/login", demoPayload);
      
      if (response.error === false) {
         localStorage.setItem('clientspuser', JSON.stringify(response));
              localStorage.setItem(`user_info_${domainName}`, JSON.stringify(response));
              localStorage.setItem("token", JSON.stringify(response?.token))
              localStorage.setItem("clientBalance", JSON.stringify(response?.data?.balance));
              localStorage.setItem("clientbetChipsData", JSON.stringify(response?.data?.betChipsData));
              localStorage.setItem('oneBetAmount', JSON.stringify(response.data.oneClickBetAmount ? response.data.oneClickBetAmount : 0));
              localStorage.setItem('oneClickStatus', JSON.stringify(false));
              localStorage.setItem('betSlipData', JSON.stringify([100, 200, 300]));
              localStorage.setItem('dashboardModalOpen', true);
         window.location.href = "/dashboard";
        localStorage.setItem("isRedirected", false);
        message.success(response.message);
      } else {
       message.error(error?.data?.message || "Demo request failed. Please try again.");
      }
    } catch (error) {
      console.error("Demo request failed:", error);
      message.error(error?.data?.message || "Demo request failed. Please try again.");
    } finally {
      setLoadingDemo(false);
    }
  };
  return (
    <div className="fixed inset-0 left-0 top-0 bg-[#E9ECF0]/75 z-50">
      <div className="flex items-start justify-center overflow-y-auto">
        <div className="w-full md:max-w-[448px] max-w-[100%] shadow-md rounded-[4px] bg-[#666] text-white md:!my-4">
          <div className="flex justify-between bg-black p-2 px-4">
            <h5 className="text-lg font-bold">Login</h5>
            <img
              src="https://wver.sprintstaticdata.com/v78/static/front/img/close.svg"
              alt="close"
              className="rounded-full border-2 p-1 border-red-700 cursor-pointer"
              onClick={onClose}
            />
          </div>

          <form
            className="!px-4 !py-4 flex m-1.5 flex-col bg-black"
            onSubmit={handleSubmit}
          >
            {/* Username */}
            <div className="flex flex-col mb-4">
              <div className="relative">
                <div className="text-[12px] font-semibold !text-white mb-2">
                  Username
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="h-[43px] w-full bg-[#353434] border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[16px] text-white px-2"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col mb-4">
              <div className="text-[12px] font-semibold !text-white mb-2">
                Password
              </div>
              <div className="relative">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  className="py-2 w-full border bg-[#353434] border-[#c0ccda] text-white placeholder:text-[#9da3bd] placeholder:text-[16px] px-2"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="!w-[20px] !h-[20px] absolute top-2 right-[15px]"
                  src="/images/zetto/passwordhide.png"
                  alt=""
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="custom-control custom-checkbox d-inline-block py-1 mb-2">
              <input
                type="checkbox"
                id="customCheck"
                name="example1"
                className="custom-control-input"
                checked
              />
              &nbsp;
              <label htmlFor="customCheck" className="text-sm">
                I am at least&nbsp;
                <a href="javascript:void(0)" className="text-red-500" role="button">
                  18 years
                </a>
                &nbsp;of age and I have read, accept and agree to the&nbsp;
                <a
                  href="/term-condition"
                  className="text-blue-500 underline"
                  target="_blank"
                >
                  Terms and Conditions
                </a>
                ,&nbsp;
                <a
                  href="/responsible-gambling"
                  className="text-blue-500 underline"
                  target="_blank"
                >
                  Responsible Gaming
                </a>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2">
              {/* LOGIN */}
              <button
                type="submit"
                disabled={!(username && password) || loadingLogin}
                className={`h-[50px] rounded-[3px] text-[16px] transition-all duration-200 flex justify-center items-center ${
                  username && password
                    ? "bg-[#a41a1aff] text-white"
                    : "text-[#c2c7c3] border-[#c2c7c3] bg-[--primary] cursor-not-allowed"
                }`}
              >
                {loadingLogin ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "LOGIN"}
              </button>
              <div className="flex items-center">
                <hr className="flex-grow border-t border-[#767f99]" />
                <span className="text-[#767f99] text-[12px] mx-2">or</span>
                <hr className="flex-grow border-t border-[#767f99]" />
              </div>

            
              <button
                type="button"
                onClick={handleDemoClick}
                disabled={loadingDemo}
                className="h-[50px] rounded-[3px] text-[16px] transition-all duration-200 bg-[#a41a1aff] text-white flex justify-center items-center"
              >
                {loadingDemo ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : "Request a Demo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

