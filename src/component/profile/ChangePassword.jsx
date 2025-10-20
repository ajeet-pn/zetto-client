import React, { useEffect, useState } from 'react';
import { updatePassword } from '../../redux/reducers/auth.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { domainName } from '../../config/Auth';
import { CiCircleInfo } from 'react-icons/ci';

const ChangePassword = () => {

    const [fieldslogin, setFieldsLogin] = useState({});
    const [errorslogin, setErrorsLogin] = useState({});
    const dispatch = useDispatch();
    const inputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFieldsLogin((prevState) => ({ ...prevState, [name]: value }));
        setErrorsLogin((prevState) => ({ ...prevState, [name]: '' }));
    };

    const { updatePassword_loading } = useSelector((state) => state.authUser);

    const changePassword = (e) => {
        if (handleValidationLogin()) {
            const data = {
                oldPassword: fieldslogin.oldPassword,
                password: fieldslogin.password,
                confirmPassword: fieldslogin.confirmPassword
            };
            dispatch(updatePassword(data)).then(((req) => {
                if (req.meta.requestStatus == "fulfilled") {
                    message.success(req?.payload?.message);
                    setTimeout(() => {
                        window.location.href = "/dashbaord";
                    }, 1000);
                } else {
                    console.log(req?.payload, "Password update failed.");
                }
            }));

        }
    };

    const handleValidationLogin = () => {
        let errorslogin = {};
        let formIsValid = true;

        if (!fieldslogin.oldPassword || fieldslogin.oldPassword === '') {
            formIsValid = false;
            errorslogin.oldPassword = 'The Old Password field is required';
        }

        if (!fieldslogin.password || fieldslogin.password === '') {
            formIsValid = false;
            errorslogin.password = 'New Password Confirmation is required';
        }
        if (!fieldslogin["confirmPassword"] || fieldslogin["confirmPassword"] === "") {
            formIsValid = false;
            errorslogin["confirmPassword"] = "New Password Confirmation is required";
        } else if (fieldslogin["password"] !== fieldslogin["confirmPassword"]) {
            formIsValid = false;
            errorslogin["confirmPassword"] = "The Confirm Password confirmation does not match";
        } else {
            errorslogin["confirmPassword"] = "";
        }
        setErrorsLogin(errorslogin);
        return formIsValid;
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            changePassword(e);
        }
    };

    return (
        <>
            <div className='bg-[--secondary] h-[31px] px-3 flex rounded-t-[5px] items-center justify-start font-semibold'>Change Password</div>
            <div className='w-full'>
                <div className='w-full lg:px-3 bg-white  border-black'>
                    <div className="w-full py-4 md:w-[450px] mx-auto">
                        <div className="">
                            <div className='flex justify-center my-8'>
                                <img className='w-[51px] h-[51px]' src="/images/zetto/key.png" alt="" srcset="" />
                            </div>
                            <div className="md:flex items-center lg:gap-6 gap-4 mb-3">
                                {/* <label htmlFor="oldPassword" className="w-40 whitespace-nowrap text-right text-black font-normal text-xs">
                                    Current Password :
                                </label> */}
                                <div className="w-full relative">
                                    <input
                                        id="oldPassword"
                                        type="password"
                                        name="oldPassword"
                                        placeholder="Old Password"
                                        value={fieldslogin.oldPassword}
                                        onChange={inputChange}
                                        onKeyPress={handleKeyPress}
                                        className={`w-full py-1.5 px-3 h-[41px] rounded-[5px] text-[14px] border ${errorslogin?.oldPassword ? "border-red-500" : "border-black"
                                            } bg-white text-gray-700 focus:outline-none`}
                                    />
                                    <img className='!w-5 !h-5 !w-[20px] !h-[20px] absolute top-[22%] dark:brightness-100 brightness-0 right-[15px]' src="/images/zetto/passwordhide.png" alt="" srcset="" />
                                    {errorslogin?.oldPassword && (
                                        <span className="absolute right-2 top-2 text-red-500 text-lg"><CiCircleInfo className='rotate-180' /></span>
                                    )}
                                    <div className="mt-1 text-red-500 text-xs">
                                        {errorslogin?.oldPassword}
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex items-center lg:gap-6 gap-4 mb-3">
                                {/* <label htmlFor="password" className="w-40 whitespace-nowrap text-right text-black font-normal text-xs">
                                    New Password :
                                </label> */}
                                <div className="w-full relative">
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="New Password"
                                        value={fieldslogin.password}
                                        onChange={inputChange}
                                        onKeyPress={handleKeyPress}
                                        className={`w-full py-1.5 px-3 text-[14px] h-[41px] rounded border ${errorslogin?.password ? "border-red-500" : "border-black"
                                            } bg-white text-gray-700 focus:outline-none`}
                                    />
                                    <img className='!w-5 !h-5 !w-[20px] !h-[20px] absolute top-[22%] dark:brightness-100 brightness-0 right-[15px]' src="/images/zetto/passwordhide.png" alt="" srcset="" />
                                    {errorslogin?.password && (
                                        <span className="absolute right-2 top-2 text-red-500 text-lg"><CiCircleInfo className='rotate-180' /></span>
                                    )}
                                    <div className="mt-1 text-red-500 text-xs">
                                        {errorslogin?.password}
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex items-center lg:gap-6 gap-4 mb-3">
                                {/* <label htmlFor="confirmPassword" className="w-40 whitespace-nowrap text-right text-black font-normal text-xs">
                                    Re-enter New Password :
                                </label> */}
                                <div className="w-full relative">
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={fieldslogin.confirmPassword}
                                        onChange={inputChange}
                                        onKeyPress={handleKeyPress}
                                        className={`w-full py-1.5 px-3 text-[14px] h-[41px] rounded border ${errorslogin?.confirmPassword ? "border-red-500" : "border-black"
                                            } bg-white text-gray-700 focus:outline-none`}
                                    />
                                    <img className='!w-5 !h-5 !w-[20px] !h-[20px] absolute top-[22%] dark:brightness-100 brightness-0 right-[15px]' src="/images/zetto/passwordhide.png" alt="" srcset="" />
                                    {errorslogin?.confirmPassword && (
                                        <span className="absolute right-2 top-2 text-red-500 text-lg"><CiCircleInfo className='rotate-180' /></span>
                                    )}
                                    <div className="mt-1 text-red-500 text-xs">
                                        {errorslogin?.confirmPassword}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="italic text-xs mt-4 space-y-1">
                                <p>
                                    <span className="font-semibold">Note: </span>
                                    The New Password field must be at least 6 characters
                                </p>
                                <p>
                                    <span className="font-semibold">Note: </span>
                                    The New Password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number
                                </p>
                            </div> */}

                            <div className="flex justify-center md:mt-0 mt-1">
                                <button
                                    type="button"
                                    onClick={() => changePassword()}
                                    className="px-3 py-1.5 font-normal text-[15px] border border-gray-300 text-gray-300 tracking-wide uppercase rounded-md  h-[41px] hover:bg-white hover:text-black hover:border-[var(--secondary)] transition-colors duration-150 ease-in-out select-none w-full mt-1 flex items-center justify-center gap-2">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ChangePassword;