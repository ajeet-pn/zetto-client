import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function LoginPopUp() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <div
                className={`fixed inset-0 bg-black/50 flex items-start justify-center z-50 transition-all duration-500 ease-in-out ${
                isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div
                className={`w-[90%] md:w-[400px] bg-white rounded-lg shadow-lg mt-10 p-6 transition-all duration-500 ease-in-out transform ${
                    isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                }`}
                >
                    
                <div className="flex justify-end">
                    <button
                    onClick={() => setIsOpen(false)}
                    className=""
                    >
                        <IoCloseSharp />
                    </button>
                </div>
                <div className="text-xl font-semibold flex justify-center text-gray-800 mb-4">
                    <img className="h-[35px]" src="/images/zetto/zetto-logo.png" alt="" srcset="" />
                </div>
                <div className="text-[14px] font-semibold text-center">Please login before place a bet</div>
                <div className="flex justify-center">
                    <button className="rounded-[4px] text-[13px] uppercase border border-gray-300 px-10 py-2 my-3">SIGN UP</button>
                </div>
                <div className="text-[13px] text-center">OR</div>
                    <div className="flex justify-center">
                    <button className="rounded-[4px] text-[13px] uppercase bg-[--primary] text-[--secondary] px-10 py-2 my-3">SIGN UP</button>
                </div>
                </div>
            </div>
        </div>
    );
}
