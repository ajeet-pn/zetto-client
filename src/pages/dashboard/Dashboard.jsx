import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { MdHowToVote, MdOutlineSportsEsports, MdSportsCricket } from "react-icons/md";
import { IoFootballSharp, IoTennisball } from "react-icons/io5";
import { FaFootballBall, FaHorseHead } from 'react-icons/fa';
import { IoIosColorWand } from 'react-icons/io';
import { FaTableTennisPaddleBall } from "react-icons/fa6";
import LiveMatches from "../../component/dashboard/LiveMatches";
import TopHeader from "../../component/dashboard/TopHeader";
import InplayMatches from "../../component/dashboard/InplayMatches";
import PopularGame from "../../component/dashboard/groupCasino/PopularGame";
import LiveCasino from "../../component/dashboard/groupCasino/LiveGames";
import useGroupCasinoList from "../../component/IntGroupCasinoList/IntGroupCasinoList";
import MarqueeNotification from "../../component/marquee/MarqueeNotification";
import Trending from "../../component/dashboard/groupCasino/Trending";
import Providers from "../../component/dashboard/Providers";
import DashboardInplay from "../../component/dashboard/DashboardInplay";
import DashboardUpcoming from "../../component/dashboard/DashboardUpcoming";
import Banner from "../../component/banner/Banner";
import SubHeader from "../../component/header/SubHeader";
import SeeMoreLess from "../../component/seeMore/SeeMore";
import GameSlider from "../../component/GameSlider/GameSlider";
import LiveReports from "../LiveReports/LiveReports";
import MobileFooter from "../../component/mobileFooter/MobileFooter";
import { Link } from "react-router-dom";
import LoginPopUp from "../../component/LoginPopUp/LoginPopUp";


export const sportlistArray = [
  {
    sportId: 4,
    sportName: "Cricket",
    icon: <MdSportsCricket />
  },
  {
    sportId: 1,
    sportName: "Football",
    icon: <IoFootballSharp />
  },
  {
    sportId: 2,
    sportName: "Tennis",
    icon: <IoTennisball />
  },
  {
    sportId: 999,
    sportName: "Election",
    icon: <MdHowToVote />
  },

]

export const AllSportsArray = [
  {
    sportName: "Cricket",
    sportId: 4,
    icons: <FaFootballBall />
  },
  {
    sportName: "Football",
    sportId: 1,
    icons: <FaFootballBall />
  },
  {
    sportName: "Tennis",
    sportId: 2,
    icons: <FaTableTennisPaddleBall />
  },
  {
    sportName: "Esoccer",
    sportId: 46,
    icons: <MdOutlineSportsEsports />
  },
  {
    sportName: "Horse Racing",
    sportId: 7,
    icons: <FaHorseHead />
  },
  {
    sportName: "Greyhound Racing",
    sportId: 4339,
    icons: <FaHorseHead />
  },
  {
    sportName: "Table Tennis",
    sportId: 76544645,
    icons: <FaTableTennisPaddleBall />
  },
  {
    sportName: "Basketball",
    sportId: 6746546548,
    icons: <FaFootballBall />
  },
  {
    sportName: "Boxing",
    sportId: 974556455,
    icons: <FaFootballBall />
  },
  {
    sportName: "Mixed Martial Arts",
    sportId: 145450,
    icons: <FaFootballBall />
  },
  {
    sportName: "American Football",
    sportId: 15675651,
    icons: <FaFootballBall />
  },
  {
    sportName: "Volleyball",
    sportId: 1565672,
    icons: <IoIosColorWand />
  },
  {
    sportName: "Badminton",
    sportId: 156568453,
    icons: <FaFootballBall />
  },
  {
    sportName: "Snooker",
    sportId: 1578554,
    icons: <FaFootballBall />
  },
  {
    sportName: "Ice Hockey",
    sportId: 154585685,
    icons: <FaFootballBall />
  },
  {
    sportName: "E Games",
    sportId: 15656566,
    icons: <FaFootballBall />
  },
  {
    sportName: "Politics",
    sportId: 5656565617,
    icons: <FaFootballBall />
  },
  {
    sportName: "Futsal",
    sportId: 1565656688,
    icons: <FaFootballBall />
  },
  {
    sportName: "Handball",
    sportId: 156546559,
    icons: <FaFootballBall />
  },
  {
    sportName: "Motor Sports",
    sportId: 2055656767,
    icons: <FaFootballBall />
  },
  {
    sportName: "Kabaddi",
    sportId: 11,
    icons: <FaFootballBall />
  }
];

const tabList = [
  { id: "inplay", label: "IN-PLAY", icon: "▶️", tab: true },
  { id: "upcoming", label: "UPCOMING", icon: "⏰", tab: true },
  { id: 4, label: "CRICKET", icon: "🏏", tab: true  },
  { id: 1, label: "FOOTBALL", icon: "⚽", tab: true  },
  { id: 2, label: "TENNIS", icon: "🎾", tab: true  },
  { id: 11, label: "Kabaddi", icon: "🤼‍♂️", tab: true  },
  { id: 7, label: "RACING", icon: "🏇", tab: false, link: '/in-play/7' },
  { id: 4339, label: "GREYHOUND", icon: "🐕", tab: false, link: '/in-play/4339' },
  { id: "casino", label: "CASINO", icon: "🎰", tab: false, link: '/all-casino' },
  { id: "sportsbook", label: "SPORTSBOOK", icon: "📒", tab: true, link: '' },
];


const Dashboard = ({ }) => {

  const { sportMatchList } = useSelector((state) => state.sport);
  const groupCasinoList = useGroupCasinoList();
  const matchlistLocal = localStorage.getItem("matchList")
    ? JSON.parse(localStorage.getItem("matchList"))
    : [];
    const token = localStorage.getItem('token');

  const [matchData, setMatchData] = useState([]);
  const [activeTab, setActiveTab] = useState("inplay");

  useEffect(() => {
    let matchListData = matchlistLocal ? matchlistLocal : sportMatchList;
    setMatchData(matchListData);
  }, [sportMatchList]);


const filteredData = matchData?.filter((match) => {
  if (activeTab === "inplay") {
    return true;
  }

  if (!isNaN(activeTab)) {
    return match.sportId === Number(activeTab);
  }

  return false;
});

const getSportName = (sportId) => {
  const sport = AllSportsArray.find((item) => item.sportId === Number(sportId));
  return sport ? sport.sportName : "";
};


  return (
    <>
      <div className=" ">
        <div className='' >
          <Banner/>
        </div>
        <GameSlider/>
        <div className='block md:hidden mt-2' >
          <GameSlider className='mt-2'/>
        </div>
          <div className="flex flex-nowrap overflow-x-auto items-center gap-1 md:px-2 py-2">
        {tabList.map((tab) => (
          <div
            key={tab.id}
              onClick={() => {
        if (tab.tab) {
          setActiveTab(tab.id);
        } else {
          window.location.href = `${tab.link}`;
        }
      }}
            className={`flex flex-col justify-center items-center min-w-[67px] h-[60px] rounded-md ${
              activeTab === tab.id ? "bg-[--secondary] text-black" : "bg-[--primary] text-white"
            }`}
          >
            <div className="text-lg">{tab.icon}</div>
            <div className="!text-[9px] md:text-base font-medium leading-normal">{tab.label}</div>
          </div>
        ))}
      </div>
        <div className="space-y-0">
      {activeTab === "inplay" ? (
        [...new Set(filteredData.filter(item => [4, 2, 1].includes(item.sportId)).map(item => item.sportId))].map((sportId) => {
          const sportWiseMatches = filteredData.filter(item => item.sportId === sportId);
          const sportName = getSportName(sportId);
          return (
            <DashboardInplay
              key={sportId}
              activeTab={sportId}
              matchlistItems={sportWiseMatches}
              sportName={sportName}
            />
          );
        })
      ) : (
    <DashboardInplay
      activeTab={activeTab}
      matchlistItems={filteredData}
      sportName={getSportName(activeTab)}
    />
  )}
</div>
<LiveReports />
        <Providers filterSection={"providers"}
        providersData={groupCasinoList?.providerList} />

        <SeeMoreLess />

<div className="block lg:hidden">
        <Link to={'/why-choose-us'}>
                                <img className="rounded-[4px] w-full h-auto" src="/images/zetto/why.jpeg" alt=""/>
         </Link>
         { !token ? 
                        <>
                            <li>
                            <Link>
                                <img className="rounded-[4px] w-full h-auto mt-2" src="/images/zetto/wpbanner.png" alt="" />
                            </Link>
                            </li> 
                        </>
                        : null
                    }
                    </div>
        <MobileFooter />
        <div className='w-full max-lg:pb-16'>
        
            </div>
      </div>
    </>
  )
}

export default React.memo(Dashboard);