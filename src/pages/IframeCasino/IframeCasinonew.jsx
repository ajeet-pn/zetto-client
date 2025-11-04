// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { apiCall } from "../../config/HTTP";
// import Loader from "../../component/loader/Loader";


// const IframeCasinonew = () => {
//     const [casinoData, setCasinoData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [showAlert, setShowAlert] = useState(false);
//     const [errorType, setErrorType] = useState(0);
//     const [resMessage, setResMessage] = useState("");
//     const history = useNavigate();
//     const { gameId , provider } = useParams();  // Using useParams for dynamic routing
//     const clientNotification = JSON.parse(localStorage.getItem('notification'));
    
//     useEffect(() => {
//         getCasinoData();

//         if (showAlert) {
//             const timeout = setTimeout(() => {
//                 setShowAlert(false);
//                 history('/dashboard');
//             }, 2000);

//             return () => clearTimeout(timeout);
//         }
//     }, [showAlert]);

//     const handleIframeLoad = () => {
//         setLoading(false);
//     };

//     const getCasinoData = async () => {
//         try {
//             const casinoLogin = {
//                 "gameId": gameId + "",
//                 "platformId": "mobile",
//                 "redirectUrl": `${window.location.origin}/dashboard`,
//                 "providerName": provider,
//             };

//             const casinoLoginResponse = await apiCall("POST",'user/casinoLoginUrl', casinoLogin);
//             if (!casinoLoginResponse.error) {
//                 setLoading(true);
//                 setCasinoData(casinoLoginResponse.data || {});
//                 setLoading(false);
//             } else {
//                 setShowAlert(true);
//                 setErrorType(1);
//                 setResMessage(casinoLoginResponse.message || "Something went wrong11");
//             }
//         } catch (error) {
//             console.error("Error fetching casino data:", error);
//             setShowAlert(true);
//             setErrorType(1);
//             setResMessage(error?.message || "22");
//         }
//     };

//     return (
//         <div>
//             {showAlert && (
//                 <div className={`absolute top-[2%] right-[2%] px-5 py-3 z-30 ${errorType === 1 ? "bg-red-600" : "bg-green-600"} rounded`}>
//                     <span className='white-text font-bold'>{resMessage}</span>
//                 </div>
//             )}
//             {loading && <Loader />}

//             {casinoData ? (
//                 <>
//                     {loading && <Loader />}
//                     <div className="h-[100dvh] mb-20">
//                         <iframe
//                             src={casinoData.url}
//                             title="Casino iframe"
//                             loading='lazy'
//                             className="mx-auto w-[100%] h-full "
//                             onLoad={handleIframeLoad}
//                         />
//                     </div>
//                 </>
//             ) : <Loader />}
//         </div>
//     );
// };

// export default IframeCasinonew;


import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiCall } from "../../config/HTTP";
import Loader from "../../component/loader/Loader";

const IframeCasinonew = () => {
  const [casinoData, setCasinoData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorType, setErrorType] = useState(0);
  const [resMessage, setResMessage] = useState("");
  const history = useNavigate();
  const { gameId, provider } = useParams();

  useEffect(() => {
    getCasinoData();
  }, []);

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false);
        history("/dashboard");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [showAlert, history]);

  const handleIframeLoad = () => {
    setLoading(false); // ✅ Loader stop on iframe load
  };

  const getCasinoData = async () => {
    try {
      setLoading(true); // ✅ Loader start on API call

      const casinoLogin = {
        gameId: gameId + "",
        platformId: "mobile",
        redirectUrl: `${window.location.origin}/dashboard`,
        providerName: provider,
      };

      const response = await apiCall("POST", "user/casinoLoginUrl", casinoLogin);

      if (!response.error) {
        setCasinoData(response.data || {});
        // Loader will hide when iframe finishes loading
      } else {
        setShowAlert(true);
        setErrorType(1);
        setResMessage(response.message || "Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching casino data:", error);
      setShowAlert(true);
      setErrorType(1);
      setResMessage(error?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="iframeCasinoMain relative">
      {showAlert && (
        <div
          className={`absolute top-[2%] right-[2%] px-5 py-3 z-30 ${
            errorType === 1 ? "bg-red-600" : "bg-green-600"
          } rounded`}
        >
          <span className="white-text font-bold">{resMessage}</span>
        </div>
      )}

      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100]">
          <Loader  active={loading}/>
        </div>
      )}

      {casinoData && (
        <div className="h-[100dvh] mb-20">
          <iframe
            src={casinoData.url}
            title="Casino iframe"
            loading="lazy"
            className="mx-auto w-[100%] h-full"
            onLoad={handleIframeLoad}
          />
        </div>
      )}
    </div>
  );
};

export default IframeCasinonew;
