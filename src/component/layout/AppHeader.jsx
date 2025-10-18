import { useEffect, useRef, useState } from "react";
import settings from "../../domainConfig";
import { useDispatch } from "react-redux";
import { getSportMatchList } from "../../redux/reducers/sport_reducer";
import RulesModal from "../rulesModal/RulesModal";
import { FaBullseye, FaSearch } from "react-icons/fa";
import { BiLockAlt } from "react-icons/bi";
import { IoClose, IoPerson, IoPersonOutline } from "react-icons/io5";
import { BsBarChart, BsBarChartSteps, BsBoxArrowRight, BsCardText, BsListNested } from "react-icons/bs";
import BonusRules from "../bonusRules/BonusRules";
import { Link, useNavigate } from "react-router-dom";
import LiveMatches from "../dashboard/LiveMatches";
import Login from "../login/Login";
import { domainName } from "../../config/Auth";
import { getClientExposure, getUserBalance } from "../../redux/reducers/user_reducer";
import { IoMdArrowDropdown } from "react-icons/io";

const AppHeader = ({ setSidebarOpen }) => {
  const dispatch = useDispatch()
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  console.log("isOpenisOpenisOpen", isOpen)
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

  const handleClose = ()=> {
    console.log("fun chala")
    setIsOpen(false)
  }

  return (
    <>
        <div
          className={`border-b border-[#00FFE6] !px-2 lg:!px-10 h-[64px] flex items-center sticky top-0 w-full bg-[var(--primary)]`}
        >
          <div className="w-full">
            <div className="flex justify-between items-center mx-auto w-full py-0">
              <div className="flex justify-start items-center py-3 gap-2">
                {/* <BsListNested size={18}  color="white" onClick={() => setSidebarOpen(true)} className="md:hidden block"/> */}
                <div onClick={() => setSidebarOpen(true)} className="text-white block lg:hidden !md:w-[80px] !h-[15px]">
                  <img className="text-white !w-[20px] min-w-[20px] !h-[15px]" src="/images/zetto/menu.png" alt="" />
                </div>
                <img onClick={() => {
                  navigate("/dashboard");
                }}
                  src={settings.logo} className="h-8 md:h-[36px]  cursor-pointer" />
              </div>
              {token ? (
                <>
                  {/* <div className="uppercase flex md:space-x-3 sm:space-x-2 -space-x-3 ">
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
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <img src='/subHeader/menu-home.png' className="w-[16px] h-[16px]" />
                                  <p>Home{" "}</p>
                                </div>
                                <div
                                  onClick={() => navigate("/profile")}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <IoPersonOutline />
                                  <p>My Profile{" "}</p>
                                </div>
                                <div
                                  onClick={() => navigate("/ac-statement")}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <BsBarChartSteps />
                                  <p>Account Statement{" "}</p>
                                </div>
                                <div
                                  onClick={() => setBonusTrue()}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <BsCardText />
                                  <p>Bonus Rules{" "}</p>
                                </div>
                                <div
                                  onClick={() => navigate("/profile/stacksettings")}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <FaBullseye />
                                  <p>Stake Settings{" "}</p>
                                </div>
                                <div
                                  onClick={() => navigate("/profit-loss")}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <BsBarChart />
                                  <p>Profit & Loss{" "}</p>
                                </div>

                                <div
                                  onClick={() => navigate("/unsettled-bets")}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
                                >
                                  <BsBarChart />
                                  <p>Unsettled Bets{" "}</p>
                                </div>
                                <div
                                  onClick={() => navigate("/profile/changepassword")}
                                  className="py-2 px-4 w-full flex justify-start items-center space-x-2"
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
                  </div> */}
                  <div className="flex justify-end w-full items-center">
                    <div className="text-[#bbb] d-md-flex hidden text-[12px] font-semibold">
                        {/* {dateTime} */}
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            <div className="flex gap-2 justify-end w-full">
                              <ul className="flex gap-3 justify-end  items-start mb-0 ps-0 w-100 ">
                                <li className="hidden lg:block"><input placeholder="Search Events...." className="!text-[12px] h-[27px] bg-white rounded-[3px] focus:outline-0 px-2" type="text" name="" id="" /></li>
                                <li className="flex flex-col justify-center items-center gap-1">
                                  <button className="bg-[var(--secondary)] hover:opacity-[0.7] transition text-black !rounded-[3px] !text-[10px] font-bold !px-[22px] h-[25px]">
                                    DEPOSIT
                                  </button>
                                  <div className="text-[var(--secondary)] text-[11px]">(BAL:<span className="text-white">{balance && balance.coins
                                  ? Number(balance.coins).toFixed(2)
                                  : "0"}</span>)</div>
                                </li>
                                <li className="flex flex-col justify-center items-center gap-1">
                                    <button  className="text-white transition hover:!text-black hover:!bg-white font-bold border !border-white !rounded-[3px] !text-[10px] !px-[20px] h-[25px] !bg-transparent">
                                    WITHDRAW
                                  </button>
                                  <div className="text-[var(--secondary)] text-[11px]">(EXP:<span className="text-white"> 
                                  
                                  {balance && balance.exposure ? Number(balance.exposure).toFixed(2) : "0"}
                                  </span>)</div>
                                </li>
                                <li className="relative hidden lg:block cursor-pointer">
                                  <div 
                                    ref={myRef}
                                    onClick={() => setIsOpen(true)}
                                    >
                                    <img className="!w-[28px] !h-[28px]" src="/images/zetto/profile.png" alt="" />
                                    <img className="absolute top-0 -right-[8px] !w-[17px] !h-[30px]" src="/images/zetto/flash.png" alt=""/>
                                    <div
                                      className={`fixed inset-0 bg-white/75 bg-opacity-50 z-50 transition-opacity duration-300 ${
                                        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                                      }`}
                                      onClick={() => setIsOpen(false)}
                                    ></div>
                                  </div>
                                    {isOpen && (
                                      <div
                                        className={`fixed top-0 right-0 !w-80 bg-[--primary] text-white shadow-2xl z-[10000] transform h-dvh overflow-y-auto transition-transform duration-300 ${
                                          isOpen ? "translate-x-0" : "translate-x-full"
                                        } flex flex-col`}
                                      >
                                        {/* Header */}
                                        <div className="!m-4 flex justify-center items-center hover:bg-white rounded-[4px] w-6 h-6">
                                          <IoClose onClick={handleClose} className="w-5 h-5 text-[--secondary]"/>
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                          {/* <div className="bg-[var(--primary)] text-white font-bold text-[16px] text-center p-3">
                                          </div> */}
                                            <img src="/images/zetto/profile.webp" alt="" className="!w-[30px] !h-[30px]" /> {user?.data?.username || "User"}
                                        </div>
                                        <div className="text-[15px] text-white my-2 text-center font-normal">Balance Information</div>
                                        {/* Wallet info */}
                                        <div className="p-4 border-b border-black text-sm space-y-2">
                                          {/* <div className="flex justify-between">
                                            <span>Wallet Amount</span>
                                            <span className="font-bold">{balance?.coins ? Number(balance.coins).toFixed(2) : "0"}</span>
                                          </div> */}
                                          
                                          <div className="flex justify-between border-b border-white pb-4">
                                            <span className="text-[15px] font-[400]">Available Credit</span>
                                            <span className="font-bold">{balance?.coins ? Number(balance.coins).toFixed(2) : "0.00"}</span>
                                          </div>
                                          <div className="flex justify-between border-b border-white pb-4">
                                            <span className="text-[15px] font-[400]">Net Exposure</span>
                                            <span className="font-bold">{balance?.exposure ? Number(balance.exposure).toFixed(2) : "0"}</span>
                                          </div>

                                          <div className="flex gap-2 !mt-5">
                                            <Link to='/wallet' className='w-[50%] text-[12px] font-semibold rounded-[3px] h-[35px] border border-[--secondary] flex items-center justify-center text-[--secondary] hover:bg-[--secondary] hover:text-white'>WALLET</Link>
                                            <Link to='/deposit' className=' flex justify-center items-center w-[50%] text-[12px] font-semibold text-black rounded-[3px] h-[35px] border border-[--secondary] hover:opacity-[0.8] bg-[--secondary]'>DEPOSIT</Link>
                                          </div>
                                          {/* <div className="flex justify-between">
                                            <span>Bonus</span>
                                            <span className="font-bold">{balance?.coins ? Number(balance.coins).toFixed(2) : "0.00"}</span>
                                          </div> */}
                                          {/* <div className="flex justify-between">
                                            <span>Withdrawal</span>
                                            <span className="font-bold">{balance?.coins ? Number(balance.coins).toFixed(2) : "0.00"}</span>
                                          </div> */}
                                        </div>

                                        {/* Actions */}
                                        {/* <div className="py-3 px-4 border-b border-black space-y-2">
                                          <div
                                            onClick={() => navigate("/bonus-list")}
                                            className="p-2 border border-[var(--primary)] text-[var(--primary)] rounded cursor-pointer text-center"
                                          >
                                            AWAITING BONUS : 1000
                                          </div>
                                          <div
                                            onClick={() => navigate("/refer-and-earn")}
                                            className="p-2 bg-[var(--primary)] text-white rounded cursor-pointer text-center"
                                          >
                                            REFER AND EARN
                                          </div>
                                        </div> */}

                                        {/* Menu Items */}
                                        <div className="flex-1 capitalize text-sm text-[#212529] px-4">
                                          {/* <div
                                            onClick={() => navigate("/dashboard")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <img src="/subHeader/menu-home.png" className="w-4 h-4" />
                                            <span className="text-[14px]">Home</span>
                                          </div> */}
                                          {/* <div
                                            onClick={() => navigate("/dashboard")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <img src="/images/jetto/savatar.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">My Profile</span>
                                          </div> */}
                                          <div  onClick={() => {
                                              navigate("/profile");
                                              handleClose();
                                            }}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <img src="/images/zetto/savatar.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">My Profile</span>
                                          </div>
                                          <div  onClick={() => {
                                            navigate("/profile");
                                            handleClose();
                                          }}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <img src="/images/zetto/refericon.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Referral Earnings</span>
                                          </div>
                                          {/* <div
                                            onClick={() => navigate("/profile")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <img src="/images/zetto/message.png" className="w-4 h-4" />
                                            <span className="text-[14px]">My Message(1)</span>
                                          </div> */}
                                          
                                          <div onClick={() => {
                                              navigate("/changepassword");
                                              handleClose();
                                            }}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            {/* <BiLockAlt /> */}
                                            <img src="/images/zetto/editpassword.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Change Password</span>
                                          </div>
                                          <div
                                          onClick={() => {
                                              navigate("/ac-statement");
                                              handleClose();
                                            }}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            {/* <BsBarChartSteps /> */}
                                            <img src="/images/zetto/accstatement.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Account Statement</span>
                                          </div>
                                          <div
                                            onClick={() => navigate("/ac-statement")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            {/* <BsBarChartSteps /> */}
                                            <img src="/images/zetto/bethistory.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Current Bets</span>
                                          </div>
                                          <div
                                          onClick={() => {
                                              navigate("/profit-loss");
                                              handleClose();
                                            }}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            {/* <BsBarChartSteps /> */}
                                            <img src="/images/zetto/profloss.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Profit/Loss</span>
                                          </div>
                                          <div
                                            onClick={() => navigate("/ac-statement")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            {/* <BsBarChartSteps /> */}
                                            <img src="/images/zetto/bethistory.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Bet History</span>
                                          </div>
                                          <div
                                            onClick={() => navigate("/ac-statement")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            {/* <BsBarChartSteps /> */}
                                            <img src="/images/zetto/passhistory.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Activity Log</span>
                                          </div>

                                          {/* <div
                                            onClick={() => navigate("/profile/stacksettings")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <FaBullseye />
                                            <span className="text-[14px]">Stake Settings</span>
                                          </div> */}

                                          {/* <div
                                            onClick={() => navigate("/profit-loss")}
                                            className="flex items-center gap-2 px-3 py-4 border-b border-white text-white cursor-pointer"
                                          >
                                            <BsBarChart />
                                            <span className="text-[14px]">Profit & Loss</span>
                                          </div> */}

                                          <div
                                          
                                          onClick={() => {
                                              navigate("/profile/changepassword");
                                              handleClose();
                                            }}
                                            className="flex items-center gap-2 p-3 border-white text-white cursor-pointer"
                                          >
                                            {/* <BiLockAlt /> */}
                                            <img src="/images/zetto/setting.webp" className="w-4 h-4" />
                                            <span className="text-[14px]">Setting</span>
                                          </div>
                                        </div>

                                        {/* Signout */}
                                        <div
                                          onClick={() => { localStorage.clear(); navigate(""); }}
                                          className="flex bg-[--secondary] text-[14px] h-[55px] rounded-[4px] p-3 m-4 justify-center items-center gap-2 text-black font-semibold uppercase"
                                          style={{
                                            background: '',
                                            boxShadow: ''
                                          }}
                                        >
                                          {/* <BsBoxArrowRight /> */}
                                          <span>Logout</span>
                                        </div>
                                      </div>
                                    )}
                                </li>
                              </ul>
                            </div>
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
                      className="bg-[var(--secondary)] cursor-pointer hover:bg-[var(--secondary)] text-[var(--black)] bg-theme2  hover:opacity-[0.7] transition text-black !rounded-[3px] flex justify-center items-center !text-[10px] font-bold !px-[22px] h-[25px]">
                      SIGN UP
                    </div>
                    <div onClick={() => { navigate("/login");}}
                      className="hover:bg-[var(--secondary)] text-[var(--white)] text-xs uppercase py-1 cursor-pointer text-white hover:!text-black hover:!bg-white font-bold border !border-white !rounded-[3px] !text-[10px] !px-[25px] h-[25px] !bg-transparent">
                      Login
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div >
    </>
  );
};

export default AppHeader;