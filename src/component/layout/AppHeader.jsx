import { useEffect, useRef, useState } from "react";
import settings from "../../domainConfig";
import { useDispatch } from "react-redux";
import { getSportMatchList } from "../../redux/reducers/sport_reducer";
import RulesModal from "../rulesModal/RulesModal";
import { FaBullseye, FaSearch } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { BsBarChart, BsBarChartSteps, BsBoxArrowRight, BsCardText, BsListNested } from "react-icons/bs";
import BonusRules from "../bonusRules/BonusRules";
import { useNavigate } from "react-router-dom";
import LiveMatches from "../dashboard/LiveMatches";
import Login from "../login/Login";
import { domainName } from "../../config/Auth";
import { getClientExposure, getUserBalance } from "../../redux/reducers/user_reducer";
import { IoMdArrowDropdown } from "react-icons/io";

const AppHeader = ({ setSidebarOpen }) => {
  const dispatch = useDispatch()
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [bonusModalOpen, setBonusModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const [clickedOutside, setClickedOutside] = useState(false);
  const user = JSON.parse(localStorage.getItem(`user_info_${domainName}`));
  const [balance, setBalance] = useState({
    coins: "",
    exposure: "",
  });
  const handleClickInside = () => setClickedOutside(true);
  const myRef = useRef();
  const navigate = useNavigate();

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openModal = () => {
    setIsLoginOpen(true);
  }

  const closeModal = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (myRef.current && !myRef.current.contains(event.target)) {
        setClickedOutside(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const sportInterval = setInterval(() => {
      dispatch(getSportMatchList());
    }, 10000);

    return () => { clearInterval(sportInterval); }
  }, [])


  const setModalTrue = () => {
    setRulesModalOpen(true);
  };

  const setModalFalse = () => {
    setRulesModalOpen(false);
  };

  const setBonusTrue = () => {
    setBonusModalOpen(true);
  };

  const setBonusFalse = () => {
    setBonusModalOpen(false);
  };
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    const matchListLocal = localStorage.getItem("matchList");
    const parsedData = matchListLocal ? JSON.parse(matchListLocal) : [];
    setMatchData(parsedData);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      let Balance = JSON.parse(localStorage.getItem("clientBalance") || "0");
      let clientExposure = JSON.parse(localStorage.getItem("clientExposure") || "0");
      setBalance({
        coins: Balance,
        exposure: clientExposure,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getExposureFunc();
      const intervalBalance = setInterval(() => {
        dispatch(getUserBalance());
      }, 3000);

      return () => {
        clearInterval(intervalBalance);
      }
    }
  }, [dispatch]);

  const getExposureFunc = async () => {
    const reqData = {
      fancyBet: true,
      oddsBet: true,
      isDeclare: false,
      diamondBet: true,
      isClientExposure: true,
    };
    // dispatch(getClientExposure(reqData)); //betList
  };

  return (
    <>

      <div
        className={`lg:h-[65px] h-auto w-full bg-[var(--primary)]`}
      >
        <div className="">
          <div className="flex justify-between items-center md:px-10 px-2 mx-auto w-full py-0">
            <div className="flex justify-start items-center  py-3">
             
            <BsListNested size={18}  color="white" onClick={() => setSidebarOpen(true)} className="md:hidden block"/>
                      
              <img onClick={() => {
                navigate("/dashboard");
              }}
                src={settings.logo} className="h-8 md:h-[36px]  cursor-pointer" />

            </div>
            {token ? (
              <>
                <div className="uppercase flex md:space-x-3 sm:space-x-2 -space-x-3 ">
                  <div className="text-center cursor-pointer">
                    <div className="flex justify-center items-center relative">
                      <img className="w-[34x] h-[34px] md:w-[90px] md:h-[35px] lg:-mt-[3px] -mt-5" src='/header/inner-balexpo-red.png' />
                      <span className="absolute lg:right-8 lg:top-2.5 -top-1 text-white md:text-[11px] text-[11px] tracking-wide font-semibold">BAL</span>
                    </div>
                    <span className="font-bold md:text-[12px] text-[11px] lg:text-black text-white">
                      {balance && balance.coins
                        ? Number(balance.coins).toFixed(2)
                        : "0"}
                    </span>
                  </div>
                  <div
                    onClick={() => {
                      navigate("/market-analysis");
                    }}
                    className="text-center cursor-pointer">
                    <div className="flex  justify-center items-center relative">
                      <img className="w-[34x] h-[34px] md:w-[90px] md:h-[35px] lg:-mt-[3px] -mt-5" src='/header/inner-balexpo-red.png' />
                      <span className="absolute lg:right-8 lg:top-2.5 -top-1 text-white md:text-[11px] text-[11px] tracking-wide font-semibold">EXP</span>
                    </div>
                    <span className="font-bold md:text-[12px] text-[11px] lg:text-black text-white">
                      {balance && balance.exposure ? Number(balance.exposure).toFixed(2) : "0"}
                    </span>
                  </div>
                  <div className="text-white  md:relative">
                    <div
                      ref={myRef}
                      onClick={() => {
                        handleClickInside();
                        setClickedOutside(!clickedOutside);
                      }}
                    >
                      <div className="flex items-center justify-center space-x-0 cursor-pointer lg:text-black font-semibold text-white text-[11.5px] tracking-wide mt-2">

                        <div className="flex  items-center justify-center sm:space-x-2 space-x-1">
                          <IoPerson />
                          <p className="">
                            {user && user?.data && user?.data?.username}
                          </p>
                        </div>
                        <IoMdArrowDropdown size={18} />
                      </div>
                      {clickedOutside ? (
                        <div className="animate__animated animate__fadeIn animate__faster absolute right-1 top-12 shadow-2xl divide-y  bg-[#f1f5f8] w-[240px] md:mx-0 mr-[2%] ml-[2%] text-[16px] text-[#212529] transition duration-2000 border z-40">
                          <div className="">
                            <div className="bg-[var(--primary)] text-[13px] font-semibold tracking-wider text-white p-1.5 text-center">
                              <span className="uppercase ">
                                Hi,{user && user?.data && user?.data?.username}
                              </span>
                            </div>
                            <div className=" p-3 border-b text-[13px] border-black bg-white capitalize space-y-[2px]">

                              <div className="flex justify-start items-center space-x-8">
                                <p>Wallet Amount</p>
                                <p className="font-bold">
                                  {balance && balance.coins
                                    ? Number(balance.coins).toFixed(2)
                                    : "0"}
                                </p>
                              </div>
                              <p className="text-[10px]">(inclusive bonus)</p>
                              <div className="flex justify-start items-center space-x-10">
                                <p>Net Exposure</p>
                                <p className="font-bold">
                                  {balance && balance.exposure ? Number(balance.exposure).toFixed(2) : "0"}
                                </p>
                              </div>
                              <div className="flex justify-start items-center space-x-20">
                                <p>Bonus</p>
                                <p className="font-bold">
                                  {balance && balance.coins
                                    ? Number(balance.coins).toFixed(2)
                                    : "0.00"}
                                </p>
                              </div>
                              <div className="flex justify-start items-center space-x-16">
                                <p>Available</p>
                                <p className="font-bold">
                                  {balance && balance.coins
                                    ? Number(balance.coins).toFixed(2)
                                    : "0.00"}
                                </p>
                              </div>
                              <div className="flex justify-start items-center space-x-14">
                                <p>Withdrawal</p>
                                <p className="font-bold">
                                  {balance && balance.coins
                                    ? Number(balance.coins).toFixed(2)
                                    : "0.00"}
                                </p>
                              </div>
                            </div>
                            <div className="py-2 px-5 border-b text-[13px] border-black bg-white capitalize text-center space-y-[4px]">
                              <div
                                onClick={() => navigate("/bonus-list")}
                                className=" rounded-xl border p-[4px] border-[var(--primary)] text-[13px] text-[var(--primary)] cursor-pointer" >
                                AWAITING BONUS : 1000
                              </div>
                              <div
                                onClick={() => navigate("/refer-and-earn")}
                                className=" rounded-xl border p-[4px] bg-[var(--primary)] text-[13px] text-white cursor-pointer">
                                REFER AND EARN
                              </div>

                            </div>
                            <div className=" capitalize font-normal bg-white cursor-pointer space-y-1 text-[#212529] text-[12px]">
                              <div
                                onClick={() => navigate("/dashboard")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <img src='/subHeader/menu-home.png' className="w-[16px] h-[16px]" />
                                <p>Home{" "}</p>
                              </div>
                              <div
                                onClick={() => navigate("/profile")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <IoPersonOutline />
                                <p>My Profile{" "}</p>
                              </div>
                              <div
                                onClick={() => navigate("/ac-statement")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <BsBarChartSteps />
                                <p>Account Statement{" "}</p>
                              </div>
                              <div
                                onClick={() => setBonusTrue()}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <BsCardText />
                                <p>Bonus Rules{" "}</p>
                              </div>
                              <div
                                onClick={() => navigate("/profile/stacksettings")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <FaBullseye />
                                <p>Stake Settings{" "}</p>
                              </div>
                              <div
                                onClick={() => navigate("/profit-loss")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <BsBarChart />
                                <p>Profit & Loss{" "}</p>
                              </div>

                              <div
                                onClick={() => navigate("/unsettled-bets")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <BsBarChart />
                                <p>Unsettled Bets{" "}</p>
                              </div>
                              <div
                                onClick={() => navigate("/profile/changepassword")}
                                className="py-2 px-4 w-full flex justify-start items-center space-x-2 hover:bg-[#FFF6EE]"
                              >
                                <BiLockAlt />
                                <p>Change Password{" "}</p>
                              </div>
                            </div>
                          </div>
                          <div
                            onClick={() => {
                              navigate("/dasboard");
                              localStorage.clear();
                            }}
                            className="w-full flex justify-center items-center space-x-2 text-white text-[15px] font-black uppercase text-center cursor-pointer px-2 py-2"
                            style={{
                              background: 'linear-gradient(180deg, #fa7e29 0%, #F6682F 80%, #F6682F 100%)',
                              boxShadow: 'inset 0px -10px 20px 0px #9f0101',
                            }}
                          >
                            <BsBoxArrowRight />
                            <p>Signout</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex space-x-1">
                  <div
                    onClick={() => {
                      navigate("/signup");
                    }}
                    className="bg-[var(--secondary)] hover:bg-[var(--secondary)] text-[var(--black)] text-xs uppercase py-1 px-4 cursor-pointer">
                    sign up
                  </div>
                  <div onClick={() => { navigate("/login");}}
                    className="bg-[var(--darkcolor)] hover:bg-[var(--secondary)] text-[var(--white)] text-xs uppercase py-1 px-4 cursor-pointer">
                    Login
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div >

      {/* <Login isOpen={isLoginOpen} closeModal={closeModal} setIsLoginOpen={setIsLoginOpen} /> */}

    </>
  );
};

export default AppHeader;