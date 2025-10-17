import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useSelector } from "react-redux";
import settings from "../../domainConfig";
import { apiCall } from "../../config/HTTP";
import { MdKeyboardArrowDown } from "react-icons/md";
import AppHeader from "../../component/layout/AppHeader";
import AppFooter from "../../component/layout/AppFooter";

function Signup({ setShowLogin }) {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("password");
  const [inputFocused, setInputFocused] = useState(false);
  const [user, setUser] = useState({
    name: "",
    mobileNo: "",
    username: "",
    password: "",
    referralCode: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    let truncatedValue = value;
    if (name === "mobileNo") {
      // Truncate value to 10 digits if it exceeds
      if (value.length > 10) {
        return setErrors({
          ...errors,
          mobileNo: "Mobile number must be 10 digits",
        });
      }
      truncatedValue = value.slice(0, 10);
    }
    setUser({ ...user, [name]: truncatedValue });
    setErrors({ ...errors, [name]: "" });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!user.mobileNo || user.mobileNo.length !== 10) {
      setErrors({ ...errors, mobileNo: "Mobile number must be 10 digits" });
      return;
    }
    if (!user.name || user.name.length < 3) {
      setErrors({ ...errors, name: "Name must be at least 3 characters long" });
      return;
    }

    // Validate password
    if (!user.password || user.password.length < 6) {
      setErrors({
        ...errors,
        password:
          "(Must be contained alphanumeric and more than 6 letters)",
      });
      return;
    }
    // Check for uppercase letters
    if (!/[A-Z]/.test(user.password)) {
      setErrors({ ...errors, password: "Password must contain at least one uppercase letter" });
      return;
    }
    // Check for lowercase letters
    if (!/[a-z]/.test(user.password)) {
      setErrors({ ...errors, password: "Password must contain at least one lowercase letter" });
      return;
    }
    // Check for numbers
    if (!/\d/.test(user.password)) {
      setErrors({ ...errors, password: "Password must contain at least one digit" });
      return;
    }

    // Check for special characters
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(user.password)) {
      setErrors({ ...errors, password: "Password must contain at least one special character" });
      return;
    }

    setLoading(true);
    try {
      const loginDetails = {
        domainUrl: window.location.origin,
        name: user.name,
        username: user.username,
        mobileNo: user.mobileNo,
        password: user.password,
      };
      if (user.referralCode) {
        loginDetails.referralCode = user.referralCode;
      }

      const response = await apiCall("POST", "website/registerClient", loginDetails);

      if (response) {
        setUser({
          name: "",
          username: "",
          mobileNo: "",
          password: "",
          referralCode: ""
        });
        message.success(response?.message || "Registration successful!");
        navigate("/dashboard");

      } else {
        message.error(response?.message || "Registration failed. Please check your details.");
      }
    } catch (error) {
      console.error("Error:", error);
      message.error("An error occurred during registration. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  let domainSetting = JSON.parse(localStorage.getItem("clientdomainSetting"));

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleOnSubmit(e);
    }
  };

  return (
    <>
      {/* <div className="fixed inset-0 z-50 flex justify-center items-center ">
        <div className="bg-[#212121] bg-cover bg-center font-sans  w-[430px] max-w-[430px] min-h-[90%] max-h-[90%] p-0  flex flex-col justify-center rounded-[10px] border-2 border-white mx-1">

          <div className="w-[100%] px-[0px] mx-auto">

            <div className="flex items-center justify-center">
              <img src={settings.logo1} alt="Reddy-Book" className="h-[60px] w-[180px]" />
            </div>

            <div className="space-y-5 lg:p-10 p-4 pb-0 bg-transparent border-none shadow-none transition-all duration-300 ease-in-out ">
              <div className="mb-4">
                <div className="relative flex items-center">
                  <select
                    name="countryCode"
                    value={user.countryCode}
                    onChange={handleOnChange}
                    className="h-[45px] px-2 bg-[var(--darkcolor)] border-b border-gray-300 text-white text-[13px] text-center rounded-none outline-none focus:outline-none focus:ring-0 focus:bg-black focus:border-[var(--secondary)] focus:text-white">
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+92">🇵🇰 +92</option>
                  </select>

                  <input
                    type="number"
                    id="mobile"
                    name="mobileNo"
                    value={user.mobileNo}
                    onChange={handleOnChange}
                    placeholder="Mobile No"
                    className="bg-transparent w-full text-white border-b border-gray-300 rounded-none text-center text-[13px] h-[45px] outline-none focus:outline-none focus:ring-0 focus:bg-black focus:border-[var(--secondary)] focus:text-white " />
                </div>

                {errors.mobileNo && (
                  <div className="mt-1 text-xs text-[#FF0000]">{errors.mobileNo}</div>
                )}
              </div>



              <div className="relative">
                <input
                  type={password}
                  name="password"
                  value={user.password}
                  onChange={handleOnChange}
                  placeholder="Choose your password"
                  className="bg-transparent w-full text-white border-b border-gray-300 rounded-none text-center text-[13px] h-[45px] outline-none focus:outline-none focus:ring-0 focus:bg-black focus:border-[var(--secondary)] focus:text-white " />
              </div>
              {errors.password && <div className="text-[#FF0000]">{errors.password}</div>}

              <div className="relative">
                <input
                  type="text"
                  name="referralCode"
                  id="referralCode"
                  value={user.referralCode}
                  onChange={handleOnChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Referral Code"
                  className="bg-transparent w-full text-white border-b border-gray-300 rounded-none text-center text-[13px] h-[45px] outline-none focus:outline-none focus:ring-0 focus:bg-black focus:border-[var(--secondary)] focus:text-white " />

              </div>
              {errors.referralCode && <div className="text-[#FF0000] text-sm mb-1">{errors.referralCode}</div>}

              <div className=" text-[8px] text-white">
                By continuing you will receive a one-time verification code to your phone number by SMS.
              </div>

              <button
                type="submit"
                onClick={handleOnSubmit}
                disabled={loading}
                className={` w-full block mx-auto mt-5 bg-[var(--primary)] border border-[var(--primary)] text-white text-sm uppercase leading-[3rem] rounded 
                  ${loading ? "opacity-50 cursor-not-allowed" : ""} `}>
                {loading ? "Loading..." : "GET OTP"}
              </button>

              <div className="text-white flex justify-start items-center space-x-4">
                <p>Already have account?</p>
                <div
                  onClick={() => {
                    navigate("/dashboard", { state: { showLogin: true } });
                  }}
                  className="mt-1 text-[var(--primary)] text-[15px] uppercase font-[900] flex justify-center items-center cursor-pointer">
                  LOG IN
                </div>
              </div>

            </div>


          </div>


        </div>
      </div> */}
      <AppHeader/>
        <div className="flex w-full items-start justify-center h-full overflow-y-auto md:my-4 bg-white">
          <div className="w-full flex justify-center rounded-[4px] text-white bg-[]">
            <div className="!max-w-[400px] hidden sm:block shadow-md max-h-[500px]">
              <img className="!w-full !h-full rounded-[3px] " src="/images/zetto/signup.png" alt="" srcset="" />
            </div>
            <div className="!max-w-full w-full shadow-md sm:!max-w-[450px]">
              <form className="!px-6 md:!py-4 bg-white w-full h-full !py-8 flex flex-col " onSubmit={(e) => {
                  e.preventDefault(); 
                  // handleSubmit(e);
                }}>
                  <div className="mx-auto block sm:hidden">
                    <img className="!w-full !h-auto" src="/images/zetto/login.png" alt="" srcset="" />
                  </div>
                  <div className="text-[18px] text-center font-bold mb-3 text-black dark:text-white">Create Account</div>
                  {/* <div className="text-[14px] text-black dark:text-white mb-3">Welcome to our Exchange! Please enter detail to continue.</div> */}
                <div className="flex flex-col mb-4">
                  {/* <label className="text-[14px] font-[400] text-black !mb-[5px] dark:text-white">Full Name</label> */}
                  <div className="">
                    <input
                      type="text"
                      placeholder="username"
                      className="bg-[#EFEFEF] h-[43px] text-black w-full rounded-[5px] border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[14px] font-normal px-2"
                      name="username"
                      // value={formData.username}
                      // onChange={handleChange}
                    />
                  </div>
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>
                <div className="flex flex-col mb-4">
                  {/* <label className="text-[14px] font-[400] text-black dark:text-white !mb-[5px]">Mobile Number</label> */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="bg-[#EFEFEF] h-[43px] w-full text-black rounded-[5px] border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[14px] !pl-[70px]"
                      // name="username"
                      id="mobile"
                      name="mobileNo"
                      value={user.mobileNo}
                      onChange={handleOnChange}
                      // value={formData.username}
                      // onChange={handleChange}
                    />
                    <label className="absolute !flex gap-1 text-[#9da3bd] text-[14px] top-1/2 -translate-y-1/2 left-[10px]" htmlFor="">+ 91 <MdKeyboardArrowDown /></label>
                  </div>
                  {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                </div>

                <div className="flex flex-col mb-4 relative">
                  <div className="flex justify-between">
                    {/* <label className="text-[14px] font-[400] text-black dark:text-white !mb-[5px]">Password</label> */}
                    {/* <Link className="text-[14px]" to=''>Forgot Password?</Link> */}
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="bg-[#EFEFEF] h-[43px] rounded-[5px] text-black border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[14px] !px-2"
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                  />
                  
                  <img className="!w-[20px] !h-[20px] absolute top-[22%] dark:brightness-100 brightness-0 right-[15px]" src="/images/zetto/passwordhide.png" alt="" srcset="" />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div className="flex flex-col mb-4 relative">
                  <div className="flex justify-between">
                    {/* <label className="text-[14px] font-[400] text-black dark:text-white !mb-[5px]">Password</label> */}
                    {/* <Link className="text-[14px]" to=''>Forgot Password?</Link> */}
                  </div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="bg-[#EFEFEF] h-[43px] rounded-[5px] text-black border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[14px] !px-2"
                    name="confirmpassword"
                    // value={formData.password}
                    // onChange={handleChange}
                  />
                  
                  <img className="!w-[20px] !h-[20px] absolute top-[22%] dark:brightness-100 brightness-0 right-[15px]" src="/images/zetto/passwordhide.png" alt="" srcset="" />
                  {/* {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>} */}
                </div>

                
                <div className="flex flex-col mb-4">
                  <div className="flex justify-between">
                    {/* <label className="text-[14px] font-[400] text-black dark:text-white !mb-[5px]">Agent Code (Optional)</label> */}
                  </div>
                  <input
                    type="password"
                    placeholder="Enter Referral Id (Optional)"
                    className="bg-[#EFEFEF] h-[43px] rounded-[5px] text-black border border-[#c0ccda] placeholder:text-[#9da3bd] placeholder:text-[14px] !px-2"
                    name="password"
                    // value={formData.password}
                    // onChange={handleChange}
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* <div className="flex items-center gap-2 text-[14px] mb-3">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="accent-blue-500"
                  />
                  <p className="text-black dark:text-white text-[14px] mb-0">
                    I am over 18 years old and I accept the agreement with offer contract
                  </p>
                </div> */}

                <div className="flex flex-col">
                  <button type="submit" className="h-[50px] mb-2 rounded-[3px] border border-[#c2c7c3] text-[#c2c7c3] text-[16x]">
                    Sign Up
                  </button>
                  <div className="text-[10px] text-sm text-black dark:text-white text-center">
                    By Signing up, I agree to the  <Link className="!text-black font-bold">Terms and Conditions</Link>
                  </div>
                  <div className="text-[10px] text-sm text-black dark:text-white text-center">
                    Already a member?  <Link className="!text-black font-bold !underline">Login</Link>
                  </div>
                  <div className="text-[10px] text-sm text-black dark:text-white text-center">
                    <Link className="!text-black font-bold !underline">Watch how to Sign up </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <AppFooter/>
    </>
  );
}

export default Signup;