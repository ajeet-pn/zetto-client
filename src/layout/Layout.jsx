
import AppSidebar from '../component/layout/AppSidebar'
import AppHeader from '../component/layout/AppHeader'
import AppContent from '../component/layout/AppContent'
import { useEffect, useState } from 'react'
import MarqueeNotification from '../component/marquee/MarqueeNotification'
import AppRightSIdebar from '../component/layout/AppRightSidebar'
import AppFooter from '../component/layout/AppFooter'
import { useLocation } from 'react-router-dom';
import AppSidebarMobile from '../component/layout/AppSidebarMobile'




const Layout = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);

    const location = useLocation();
    const currentPath = location.pathname;


    const handleToggle = () => {
        document.body.classList.toggle("StakeModalOpen");
    };
    useEffect(() => {
        const checkSidebarStatus = () => {
            // setIsStakeModalOpen(document.body.classList.contains("StakeModalOpen"));
        };
        checkSidebarStatus();
        const observer = new MutationObserver(checkSidebarStatus);
        observer.observe(document.body, { attributes: true });
        return () => observer.disconnect();
    }, []);
    const hideSidebarRoutes = ['/sport-view', "/sport-view-racing", '/deposit', "/wallet", "/all-casino", "/term-condition", "/promotions", "/casino-list-by-providername", "/privacy-policy", "/rules", "/about-us", "/contact-us", "/why-choose-us"];
    const shouldHideSidebars = hideSidebarRoutes.some(route => currentPath.startsWith(route));


    const hideLeftSidebarRoutes = ['/deposit', "/wallet", "/all-casino", "/term-condition", "/promotions", "/casino-list-by-providername", "/privacy-policy", "/rules", "/about-us", "/contact-us","/why-choose-us"];
    const shouldHideLeftSidebars = hideLeftSidebarRoutes.some(route => currentPath.startsWith(route));



    return (
        <>
            <section className="w-full h-screen flex flex-col overflow-hidden relative bg-gray-200">
                <div className="shrink-0 z-10 lg:bg-white bg-black">
                    <div className="">
                        <AppHeader setSidebarOpen={setIsSidebarOpen} />
                    </div>
                    <div><MarqueeNotification /></div>
                </div>

                <div className="md:flex flex-1 md:overflow-hidden overflow-auto relative">
                    {!shouldHideLeftSidebars && (<div className={`${isSidebarOpen ? 'fixed' : 'hidden'} 
                lg:relative lg:block hidden inset-0 lg:inset-auto py-1 lg:w-[290px] w-[55%] h-screen lg:h-auto z-20 lg:z-auto bg-[var(--backgroundmain)] overflow-y-auto scrollbar-hide`}>
                        <AppSidebar
                            isSidebarOpen={isSidebarOpen}
                            setIsSidebarOpen={setIsSidebarOpen}
                        />
                    </div>)}

                    <div className={`${isSidebarOpen ? 'fixed' : 'hidden'} 
                lg:relative lg:hidden block inset-0 lg:inset-auto  lg:w-[290px] w-[65%] h-screen lg:h-auto z-20 lg:z-auto bg-[var(--backgroundmain)] overflow-y-auto scrollbar-hide`}>
                        <AppSidebarMobile
                            isSidebarOpen={isSidebarOpen}
                            setIsSidebarOpen={setIsSidebarOpen}
                        />
                    </div>

                    <div className={`flex-1 h-auto overflow-y-auto ${isSidebarOpen ? 'lg:ml-[0px] fixed inset-0 lg:static' : ''}`}>
                        <div className="p-1 h-full">
                            <AppContent />

                        </div>
                    </div>
                    {!shouldHideSidebars && (
                        <div className={`lg:relative lg:block inset-0 lg:inset-auto pb-1 lg:w-[350px] w-[55%] h-screen lg:h-auto z-20 lg:z-auto overflow-y-auto hidden  scrollbar-hide`}>
                            <AppRightSIdebar />
                        </div>)}

                    {/* {isSidebarOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )} */}
                </div>

            </section>

            <div className='w-full max-lg:pb-16'>
                <AppFooter />
            </div>
        </>
    )
}

export default Layout;